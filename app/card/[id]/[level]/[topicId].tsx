import * as Haptics from 'expo-haptics';
import * as Sharing from 'expo-sharing';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import {
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../../../../components/ProgressBar';
import QuestionCard from '../../../../components/QuestionCard';
import ShareCard from '../../../../components/ShareCard';
import { getDeck, getDeckLevelTopic, Level } from '../../../../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../../../../constants/theme';
import { useFavourites } from '../../../../hooks/useFavourites';
import { usePurchase } from '../../../../hooks/usePurchase';

const LEVEL_LABELS: Record<Level, string> = {
  close: 'Close',
  closer: 'Closer',
  closest: 'Closest',
};

export default function CardScreen() {
  const { id, level, topicId } = useLocalSearchParams<{
    id: string;
    level: Level;
    topicId: string;
  }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const shareCardRef = useRef<View>(null);

  const deck = getDeck(id);
  const deckLevel = deck?.levels.find((l) => l.level === level);
  const isAll = topicId === 'all';
  const topic = isAll ? null : getDeckLevelTopic(id, level, topicId);
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const { isLevelLocked, isLoading } = usePurchase();

  useEffect(() => {
    if (!isLoading && isLevelLocked(level)) {
      router.replace('/paywall');
    }
  }, [isLoading, level]);

  if (!deck || (!topic && !isAll) || (isAll && !deckLevel)) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.errorText}>Not found</Text>
      </SafeAreaView>
    );
  }

  const questions = isAll
    ? deckLevel!.topics.flatMap((t) => t.questions)
    : topic!.questions;
  const headerTitle = isAll ? 'All Topics' : topic!.name;
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
        topicId: topicId,
        topicName: headerTitle,
        question: currentQuestion.text,
      });
    }
  }

  async function handleShare() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const shareText = `${deck.emoji} "${currentQuestion.text}"\n\nsakinacards.app`;
    try {
      const uri = await captureRef(shareCardRef, { format: 'png', quality: 1 });
      await Share.share({ message: shareText, url: uri });
    } catch (_) {
      await Share.share({ message: shareText });
    }
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: deck.bgColor }]} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Text style={styles.iconBtnText}>←</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={[styles.deckLabel, { color: deck.accentColor }]}>
            {LEVEL_LABELS[level].toUpperCase()}
          </Text>
          <Text style={styles.headerTitle}>{headerTitle}</Text>
        </View>

        <TouchableOpacity style={styles.iconBtn} onPress={handleShare}>
          <Text style={styles.iconBtnText}>↑</Text>
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
          theme={currentQuestion.theme}
        />
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.navBtn, currentIndex === 0 && styles.navBtnDisabled]}
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navBtnText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.saveBtn, saved && { borderColor: deck.accentColor }]}
          onPress={handleSave}
        >
          <Text style={[styles.saveIcon, { color: saved ? deck.accentColor : Colors.textMuted }]}>
            {saved ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>

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

      {/* Off-screen card used for image capture on share */}
      <View style={styles.offScreen} pointerEvents="none">
        <ShareCard
          ref={shareCardRef}
          question={currentQuestion.text}
          emoji={deck.emoji}
          accentColor={deck.accentColor}
          theme={currentQuestion.theme}
        />
      </View>
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
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnText: {
    fontSize: 18,
    color: Colors.text,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  deckLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 10,
    letterSpacing: 4,
  },
  headerTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
    letterSpacing: 0.2,
  },
  progressContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.xs,
    marginBottom: Spacing.md,
  },
  progressText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
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
    gap: Spacing.lg,
  },
  navBtn: {
    width: 56,
    height: 56,
    borderRadius: Radius.full,
    backgroundColor: Colors.white,
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
  },
  saveBtn: {
    width: 56,
    height: 56,
    borderRadius: Radius.full,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveIcon: {
    fontSize: 22,
  },
  offScreen: {
    position: 'absolute',
    left: -9999,
    top: 0,
  },
});
