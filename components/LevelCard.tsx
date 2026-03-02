import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Level } from '../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';

interface Props {
  level: Level;
  label: string;
  description: string;
  accentColor: string;
  cardColor: string;
  onPress: () => void;
  index: number;
  locked?: boolean;
}

const LEVEL_DOTS: Record<Level, number> = {
  close: 1,
  closer: 2,
  closest: 3,
};

export default function LevelCard({
  level,
  label,
  description,
  accentColor,
  onPress,
  locked = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, locked && styles.cardLocked]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.row}>
        <View style={styles.dotsRow}>
          {Array.from({ length: LEVEL_DOTS[level] }).map((_, i) => (
            <View
              key={i}
              style={[styles.dot, { backgroundColor: locked ? Colors.textLight : accentColor }]}
            />
          ))}
          {Array.from({ length: 3 - LEVEL_DOTS[level] }).map((_, i) => (
            <View
              key={i}
              style={[styles.dotEmpty, { borderColor: Colors.border }]}
            />
          ))}
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.label, locked && styles.labelLocked]}>{label}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {locked ? (
          <Text style={styles.lockEmoji}>🔒</Text>
        ) : (
          <View style={[styles.arrow, { backgroundColor: accentColor + '18' }]}>
            <Text style={[styles.arrowText, { color: accentColor }]}>›</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardLocked: {
    opacity: 0.6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 4,
    width: 48,
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotEmpty: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  label: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: Colors.text,
  },
  labelLocked: {
    color: Colors.textMuted,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.textMuted,
    lineHeight: 18,
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
  lockEmoji: {
    fontSize: 16,
  },
});
