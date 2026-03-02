import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardTheme } from '../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';

const THEME_LABELS: Record<CardTheme, string> = {
  scenario: 'Scenario',
  'what-if': 'What if…',
  challenge: 'Challenge',
  reveal: 'Reveal',
  reflect: 'Reflect',
  imagine: 'Imagine',
};

interface Props {
  question: string;
  emoji: string;
  accentColor: string;
  theme?: CardTheme;
}

const ShareCard = React.forwardRef<View, Props>(function ShareCard(
  { question, emoji, accentColor, theme },
  ref
) {
  return (
    <View ref={ref} style={styles.card} collapsable={false}>
      <View style={styles.innerContent}>
        <Text style={[styles.brand, { color: accentColor }]}>SAKINA</Text>
        <Text style={styles.emoji}>{emoji}</Text>

        {theme && (
          <View style={[styles.chip, { backgroundColor: accentColor + '20' }]}>
            <Text style={[styles.chipText, { color: accentColor }]}>
              {THEME_LABELS[theme]}
            </Text>
          </View>
        )}

        <Text style={styles.questionText}>{question}</Text>

        <View style={styles.footer}>
          <Text style={[styles.appName, { color: accentColor }]}>Sakinah Cards</Text>
          <Text style={styles.download}>Download on the App Store</Text>
        </View>
      </View>
    </View>
  );
});

export default ShareCard;

const styles = StyleSheet.create({
  card: {
    width: 320,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
    backgroundColor: Colors.white,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3,
  },
  innerContent: {
    alignItems: 'center',
    width: '100%',
    gap: Spacing.md,
  },
  brand: {
    fontFamily: Fonts.semiBold,
    fontSize: 11,
    letterSpacing: 5,
  },
  emoji: {
    fontSize: 36,
    marginVertical: Spacing.xs,
  },
  chip: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: Radius.full,
  },
  chipText: {
    fontFamily: Fonts.semiBold,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  questionText: {
    fontFamily: Fonts.semiBold,
    fontSize: 24,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 34,
    letterSpacing: 0.2,
  },
  footer: {
    alignItems: 'center',
    gap: 2,
    marginTop: Spacing.sm,
  },
  appName: {
    fontFamily: Fonts.semiBold,
    fontSize: 13,
    letterSpacing: 0.5,
  },
  download: {
    fontFamily: Fonts.italic,
    fontSize: 12,
    color: Colors.textLight,
    letterSpacing: 0.5,
  },
});
