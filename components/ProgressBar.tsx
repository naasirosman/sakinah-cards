import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, Radius } from '../constants/theme';

interface Props {
  current: number;
  total: number;
  accentColor?: string;
}

export default function ProgressBar({ current, total, accentColor = Colors.gold }: Props) {
  const progress = total > 0 ? current / total : 0;

  return (
    <View style={styles.track}>
      <View
        style={[
          styles.fill,
          {
            width: `${Math.min(progress * 100, 100)}%` as `${number}%`,
            backgroundColor: accentColor,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 2,
    backgroundColor: Colors.border,
    borderRadius: Radius.full,
    overflow: 'hidden',
    width: '100%',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.full,
  },
});
