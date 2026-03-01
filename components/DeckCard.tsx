import { router } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Deck } from '../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';

interface Props {
  deck: Deck;
}

export default function DeckCard({ deck }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: deck.cardColor }]}
      onPress={() => router.push(`/deck/${deck.id}`)}
      activeOpacity={0.85}
    >
      {/* Decorative corner accent */}
      <View style={[styles.cornerAccent, { backgroundColor: deck.accentColor + '40' }]} />

      <View style={styles.header}>
        <Text style={styles.emoji}>{deck.emoji}</Text>
        <View style={styles.badge}>
          <Text style={[styles.badgeText, { color: deck.accentColor }]}>3 levels</Text>
        </View>
      </View>

      <Text style={styles.title}>{deck.title}</Text>
      <Text style={[styles.subtitle, { color: deck.accentColor }]}>{deck.subtitle}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {deck.description}
      </Text>

      <View style={[styles.footer, { borderTopColor: deck.accentColor + '30' }]}>
        <Text style={styles.cardCount}>30 questions</Text>
        <View style={[styles.arrow, { backgroundColor: deck.accentColor }]}>
          <Text style={styles.arrowText}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    position: 'relative',
  },
  cornerAccent: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  emoji: {
    fontSize: 36,
  },
  badge: {
    borderRadius: Radius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  badgeText: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.text,
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontFamily: Fonts.mediumItalic,
    fontSize: 14,
    marginBottom: Spacing.sm,
    letterSpacing: 0.5,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textMuted,
    lineHeight: 20,
    marginBottom: Spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: Spacing.md,
  },
  cardCount: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: Colors.textMuted,
    letterSpacing: 0.5,
  },
  arrow: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
});
