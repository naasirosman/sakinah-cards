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
      style={styles.card}
      onPress={() => router.push(`/deck/${deck.id}`)}
      activeOpacity={0.7}
    >
      <View style={styles.left}>
        <View style={[styles.emojiWrap, { backgroundColor: deck.bgColor }]}>
          <Text style={styles.emoji}>{deck.emoji}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.subtitle}</Text>
      </View>

      <View style={[styles.arrow, { backgroundColor: deck.accentColor + '18' }]}>
        <Text style={[styles.arrowText, { color: deck.accentColor }]}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Radius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    gap: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  left: {},
  emojiWrap: {
    width: 52,
    height: 52,
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 26,
  },
  body: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: 20,
    color: Colors.text,
    letterSpacing: 0.1,
  },
  subtitle: {
    fontFamily: Fonts.italic,
    fontSize: 13,
    color: Colors.textMuted,
    letterSpacing: 0.3,
  },
  arrow: {
    width: 34,
    height: 34,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 24,
    lineHeight: 30,
  },
});
