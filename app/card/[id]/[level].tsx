import * as Haptics from 'expo-haptics';
import * as Sharing from 'expo-sharing';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../../../components/ProgressBar';
import QuestionCard from '../../../components/QuestionCard';
import { getDeck, Level } from '../../../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../../../constants/theme';
import { useFavourites } from '../../../hooks/useFavourites';

const LEVEL_LABELS: Record<Level, string> = {
  close: 'Close',
  closer: 'Closer',
  closest: 'Closest',
};

export default function CardScreen() {
  const { id, level } = useLocalSearchParams<{ id: string; level: Level }>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const deckRaw = getDeck(id);
  const deckLevelRaw = deckRaw?.levels.find((l) => l.level === level);
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();

  if (!deckRaw || !deckLevelRaw) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.errorText}>Not found</Text>
      </SafeAreaView>
    );
  }

  // Narrowed non-nullable refs
  const deck = deckRaw;
  const deckLevel = deckLevelRaw;
  const questions = deckLevel.questions;
  const currentQuestion = questions[currentIndex];
  const favId = currentQuestion.id;
  const saved = isFavourite(favId);

  function handlePrev() {
    if (currentIndex > 0) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setCurrentIndex(currentIndex + 1);
    }
  }

  async function handleSave() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (saved) {
      await removeFavourite(favId);
    } else {
      await addFavourite({
        id: favId,
        deckId: deck.id,
        deckTitle: deck.title,
        deckEmoji: deck.emoji,
        level: LEVEL_LABELS[level],
        question: currentQuestion.text,
      });
    }
  }

  async function handleShare() {
    const shareText = `Sakina Cards ${deck.emoji}\n\n"${currentQuestion.text}"\n\nsakinacards.app`;
    try {
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        // Use native share for text
        await Share.share({ message: shareText });
      } else {
        await Share.share({ message: shareText });
      }
    } catch (_) {
      await Share.share({ message: shareText });
    }
  }

  const progress = (currentIndex + 1) / questions.length;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: deck.bgColor }]} edges={['top', 'bottom']}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{deck.title}</Text>
          <View style={[styles.levelBadge, { backgroundColor: deck.accentColor + '30' }]}>
            <Text style={[styles.levelBadgeText, { color: deck.accentColor }]}>
              {LEVEL_LABELS[level]}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
          <Text style={styles.shareIcon}>↑</Text>
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
          accentColor={deck.accentColor}
        />
        <Text style={styles.progressText}>
          {currentIndex + 1} / {questions.length}
        </Text>
      </View>

      {/* Card */}
      <View style={styles.cardContainer}>
        <QuestionCard
          question={currentQuestion.text}
          emoji={deck.emoji}
          cardColor={deck.cardColor}
          accentColor={deck.accentColor}
          cardIndex={currentIndex}
        />
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        {/* Prev */}
        <TouchableOpacity
          style={[
            styles.navBtn,
            currentIndex === 0 && styles.navBtnDisabled,
          ]}
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <Text
            style={[
              styles.navBtnText,
              currentIndex === 0 && styles.navBtnTextDisabled,
            ]}
          >
            ←
          </Text>
        </TouchableOpacity>

        {/* Save */}
        <TouchableOpacity
          style={[
            styles.saveBtn,
            saved && { backgroundColor: deck.accentColor + '30', borderColor: deck.accentColor },
          ]}
          onPress={handleSave}
        >
          <Text style={[styles.saveIcon, saved && { color: deck.accentColor }]}>
            {saved ? '♥' : '♡'}
          </Text>
          <Text style={[styles.saveText, saved && { color: deck.accentColor }]}>
            {saved ? 'Saved' : 'Save'}
          </Text>
        </TouchableOpacity>

        {/* Next */}
        <TouchableOpacity
          style={[
            styles.navBtn,
            currentIndex === questions.length - 1 && styles.navBtnDisabled,
            { backgroundColor: deck.accentColor },
          ]}
          onPress={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          <Text style={[styles.navBtnText, { color: Colors.white }]}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Completion state */}
      {currentIndex === questions.length - 1 && (
        <View style={styles.completionHint}>
          <Text style={styles.completionText}>
            ✦ You've reached the last card ✦
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  errorText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.text,
    padding: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 18,
    color: Colors.text,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  headerTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
    letterSpacing: 0.3,
  },
  levelBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  levelBadgeText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    letterSpacing: 1,
  },
  shareBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIcon: {
    fontSize: 18,
    color: Colors.text,
    fontFamily: Fonts.bold,
  },
  progressContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.xs,
    marginBottom: Spacing.md,
  },
  progressText: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: 'right',
    letterSpacing: 0.5,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    gap: Spacing.md,
  },
  navBtn: {
    width: 52,
    height: 52,
    borderRadius: Radius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtnDisabled: {
    opacity: 0.3,
  },
  navBtnText: {
    fontSize: 20,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  navBtnTextDisabled: {
    color: Colors.textMuted,
  },
  saveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: Radius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    flex: 1,
    justifyContent: 'center',
  },
  saveIcon: {
    fontSize: 18,
    color: Colors.textMuted,
  },
  saveText: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: Colors.textMuted,
    letterSpacing: 0.5,
  },
  completionHint: {
    alignItems: 'center',
    paddingBottom: Spacing.md,
  },
  completionText: {
    fontFamily: Fonts.italic,
    fontSize: 13,
    color: Colors.textMuted,
    letterSpacing: 0.5,
  },
});
