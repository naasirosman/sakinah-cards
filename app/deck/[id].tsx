import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LevelCard from '../../components/LevelCard';
import { DECKS, Level } from '../../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../../constants/theme';
import { usePurchase } from '../../hooks/usePurchase';

export default function DeckScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const deck = DECKS.find((d) => d.id === id);
  const { isLevelLocked } = usePurchase();

  if (!deck) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.errorText}>Deck not found</Text>
      </SafeAreaView>
    );
  }

  function handleLevelPress(level: Level) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (isLevelLocked(level)) {
      router.push('/paywall');
      return;
    }
    router.push(`/card/${id}/${level}`);
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: deck.bgColor }]} edges={['top']}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Hero section */}
        <View style={styles.hero}>
          <Text style={styles.emoji}>{deck.emoji}</Text>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={[styles.subtitle, { color: deck.accentColor }]}>{deck.subtitle}</Text>
          <View style={[styles.divider, { backgroundColor: deck.accentColor }]} />
          <Text style={styles.description}>{deck.description}</Text>
        </View>

        {/* Level picker */}
        <View style={styles.levelSection}>
          <Text style={styles.sectionTitle}>Choose your level</Text>
          <Text style={styles.sectionSub}>
            Start where you feel comfortable and go deeper when ready.
          </Text>

          <View style={styles.levels}>
            {deck.levels.map((lvl, index) => (
              <LevelCard
                key={lvl.level}
                level={lvl.level}
                label={lvl.label}
                description={lvl.description}
                accentColor={deck.accentColor}
                cardColor={deck.cardColor}
                onPress={() => handleLevelPress(lvl.level)}
                index={index}
                locked={isLevelLocked(lvl.level)}
              />
            ))}
          </View>
        </View>

        {/* Bottom note */}
        <View style={[styles.note, { borderColor: deck.accentColor + '30' }]}>
          <Text style={styles.noteText}>
            You can revisit this deck at any time and explore different levels.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.md,
  },
  backArrow: {
    fontSize: 20,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  backText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.text,
  },
  errorText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.text,
    padding: Spacing.lg,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    gap: Spacing.sm,
  },
  emoji: {
    fontSize: 52,
    marginBottom: Spacing.xs,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    color: Colors.text,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontFamily: Fonts.mediumItalic,
    fontSize: 16,
    letterSpacing: 1,
  },
  divider: {
    width: 50,
    height: 2,
    borderRadius: 1,
    marginVertical: Spacing.sm,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: Spacing.md,
  },
  levelSection: {
    marginTop: Spacing.lg,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.text,
    marginBottom: Spacing.xs,
    letterSpacing: 0.3,
  },
  sectionSub: {
    fontFamily: Fonts.italic,
    fontSize: 14,
    color: Colors.textMuted,
    marginBottom: Spacing.lg,
    lineHeight: 20,
  },
  levels: {
    gap: 0,
  },
  note: {
    borderWidth: 1,
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginTop: Spacing.lg,
  },
  noteText: {
    fontFamily: Fonts.italic,
    fontSize: 13,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
});
