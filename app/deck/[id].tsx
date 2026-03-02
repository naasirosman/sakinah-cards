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
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* Hero section */}
        <View style={styles.hero}>
          <Text style={styles.emoji}>{deck.emoji}</Text>
          <Text style={[styles.deckLabel, { color: deck.accentColor }]}>
            {deck.subtitle.toUpperCase()}
          </Text>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.description}>{deck.description}</Text>
        </View>

        {/* Level picker */}
        <View style={styles.levelSection}>
          <Text style={styles.sectionTitle}>Choose a level</Text>

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
    paddingVertical: Spacing.md,
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 22,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  errorText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.text,
    padding: Spacing.lg,
  },
  hero: {
    alignItems: 'center',
    paddingBottom: Spacing.xl,
    gap: Spacing.sm,
  },
  emoji: {
    fontSize: 48,
    marginBottom: Spacing.xs,
  },
  deckLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 11,
    letterSpacing: 5,
  },
  title: {
    fontFamily: Fonts.boldItalic,
    fontSize: 40,
    color: Colors.text,
    textAlign: 'center',
    letterSpacing: -0.3,
    lineHeight: 44,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: Spacing.md,
    marginTop: Spacing.xs,
  },
  levelSection: {
    marginTop: Spacing.sm,
  },
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 13,
    color: Colors.textMuted,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: Spacing.md,
  },
  levels: {
    gap: 0,
  },
});
