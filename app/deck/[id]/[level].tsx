// Subcategory screen
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
import TopicCard from '../../../components/TopicCard';
import { getDeck, Level } from '../../../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../../../constants/theme';

const LEVEL_LABELS: Record<Level, string> = {
  close: 'Close',
  closer: 'Closer',
  closest: 'Closest',
};

export default function TopicScreen() {
  const { id, level } = useLocalSearchParams<{ id: string; level: Level }>();
  const deck = getDeck(id);
  const deckLevel = deck?.levels.find((l) => l.level === level);

  if (!deck || !deckLevel) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.errorText}>Not found</Text>
      </SafeAreaView>
    );
  }

  function handleTopicPress(topicId: string) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push(`/card/${id}/${level}/${topicId}`);
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

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.emoji}>{deck.emoji}</Text>
          <Text style={[styles.levelLabel, { color: deck.accentColor }]}>
            {LEVEL_LABELS[level].toUpperCase()}
          </Text>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.description}>{deckLevel.description}</Text>
        </View>

        {/* Open All Cards button */}
        <TouchableOpacity
          style={[styles.openAllBtn, { backgroundColor: deck.accentColor }]}
          onPress={() => handleTopicPress('all')}
          activeOpacity={0.85}
        >
          <Text style={styles.openAllText}>Open All Cards</Text>
          <Text style={styles.openAllCount}>
            {deckLevel.topics.reduce((sum, t) => sum + t.questions.length, 0)} questions
          </Text>
        </TouchableOpacity>

        {/* Topic list */}
        <View style={styles.topicSection}>
          <Text style={styles.sectionTitle}>Choose a topic</Text>
          <View style={styles.topics}>
            <TopicCard
              name="All Topics"
              emoji="✦"
              questionCount={deckLevel.topics.reduce((sum, t) => sum + t.questions.length, 0)}
              accentColor={deck.accentColor}
              onPress={() => handleTopicPress('all')}
            />
            {deckLevel.topics.map((topic) => (
              <TopicCard
                key={topic.id}
                name={topic.name}
                emoji={topic.emoji}
                questionCount={topic.questions.length}
                accentColor={deck.accentColor}
                onPress={() => handleTopicPress(topic.id)}
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
  levelLabel: {
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
  openAllBtn: {
    borderRadius: Radius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.lg,
    gap: 4,
  },
  openAllText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.white,
    letterSpacing: 0.3,
  },
  openAllCount: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.white,
    opacity: 0.8,
  },
  topicSection: {
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
  topics: {
    gap: 0,
  },
});
