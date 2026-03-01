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

const LEVEL_ICONS: Record<Level, string> = {
  close: '✦',
  closer: '✦✦',
  closest: '✦✦✦',
};

export default function LevelCard({
  level,
  label,
  description,
  accentColor,
  cardColor,
  onPress,
  index,
  locked = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: cardColor, borderColor: accentColor + '40' },
        locked && styles.cardLocked,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: accentColor + '25' }]}>
          {locked ? (
            <Text style={styles.lockIcon}>🔒</Text>
          ) : (
            <Text style={[styles.icon, { color: accentColor }]}>{LEVEL_ICONS[level]}</Text>
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text style={[styles.description, { color: Colors.textMuted }]}>{description}</Text>
        </View>
        {locked ? (
          <View style={styles.unlockBadge}>
            <Text style={styles.unlockBadgeText}>Unlock</Text>
          </View>
        ) : (
          <View style={[styles.arrow, { backgroundColor: accentColor + '30' }]}>
            <Text style={[styles.arrowText, { color: accentColor }]}>›</Text>
          </View>
        )}
      </View>
      <View style={[styles.questionCount, { backgroundColor: accentColor + '15' }]}>
        {locked ? (
          <Text style={[styles.questionCountText, { color: Colors.textMuted }]}>
            Pro — unlock to access
          </Text>
        ) : (
          <Text style={[styles.questionCountText, { color: accentColor }]}>10 questions</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 14,
    letterSpacing: 2,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: Colors.text,
    marginBottom: 2,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    lineHeight: 18,
  },
  arrow: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 22,
    lineHeight: 28,
  },
  questionCount: {
    marginTop: Spacing.sm,
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  questionCountText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    letterSpacing: 0.5,
  },
  cardLocked: {
    opacity: 0.75,
  },
  lockIcon: {
    fontSize: 18,
  },
  unlockBadge: {
    backgroundColor: Colors.gold + '25',
    borderWidth: 1,
    borderColor: Colors.gold + '60',
    borderRadius: Radius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
  },
  unlockBadgeText: {
    fontFamily: Fonts.semiBold,
    fontSize: 11,
    color: Colors.gold,
    letterSpacing: 0.5,
  },
});
