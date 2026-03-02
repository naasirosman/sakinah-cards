import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';

interface Props {
  name: string;
  emoji: string;
  questionCount: number;
  accentColor: string;
  onPress: () => void;
}

export default function TopicCard({
  name,
  emoji,
  questionCount,
  accentColor,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.row}>
        <View style={[styles.emojiContainer, { backgroundColor: accentColor + '18' }]}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.count}>{questionCount} questions</Text>
        </View>

        <View style={[styles.arrow, { backgroundColor: accentColor + '18' }]}>
          <Text style={[styles.arrowText, { color: accentColor }]}>›</Text>
        </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  emojiContainer: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 22,
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: Colors.text,
  },
  count: {
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
    lineHeight: 24,
  },
});
