import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';

interface Props {
  question: string;
  emoji: string;
  cardColor: string;
  accentColor: string;
  cardIndex: number;
}

export default function QuestionCard({
  question,
  emoji,
  cardColor,
  accentColor,
  cardIndex,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  // Reset flip when card changes
  useEffect(() => {
    setFlipped(false);
    Animated.timing(flipAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, [cardIndex, question]);

  function handleFlip() {
    const toValue = flipped ? 0 : 1;
    Animated.spring(flipAnim, {
      toValue,
      tension: 60,
      friction: 8,
      useNativeDriver: true,
    }).start();
    setFlipped(!flipped);
  }

  const frontRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 0.5, 1],
    outputRange: [1, 1, 0, 0],
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 0.5, 1],
    outputRange: [0, 0, 1, 1],
  });

  return (
    <TouchableWithoutFeedback onPress={handleFlip}>
      <View style={styles.container}>
        {/* Front */}
        <Animated.View
          style={[
            styles.card,
            styles.front,
            {
              backgroundColor: cardColor,
              borderColor: accentColor + '50',
              transform: [{ rotateY: frontRotate }],
              opacity: frontOpacity,
            },
          ]}
        >
          {/* Decorative background circles */}
          <View style={[styles.circleTop, { backgroundColor: accentColor + '15' }]} />
          <View style={[styles.circleBottom, { backgroundColor: accentColor + '10' }]} />

          <View style={styles.innerContent}>
            <Text style={styles.emojiLarge}>{emoji}</Text>

            <View style={[styles.divider, { backgroundColor: accentColor + '60' }]} />

            <Text style={styles.questionText}>{question}</Text>

            <View style={[styles.divider, { backgroundColor: accentColor + '60' }]} />

            <View style={styles.hintRow}>
              <Text style={[styles.hintDot, { color: accentColor }]}>◆</Text>
              <Text style={[styles.hintText, { color: accentColor }]}>Tap to reflect</Text>
              <Text style={[styles.hintDot, { color: accentColor }]}>◆</Text>
            </View>
          </View>
        </Animated.View>

        {/* Back */}
        <Animated.View
          style={[
            styles.card,
            styles.back,
            {
              backgroundColor: '#0A0305',
              borderColor: accentColor + '60',
              transform: [{ rotateY: backRotate }],
              opacity: backOpacity,
            },
          ]}
        >
          <View style={[styles.circleTopBack, { backgroundColor: accentColor + '20' }]} />
          <View style={[styles.circleBottomBack, { backgroundColor: accentColor + '10' }]} />

          <View style={styles.innerContent}>
            <Text style={styles.backSymbol}>☾</Text>
            <Text style={[styles.backTitle, { color: accentColor }]}>Reflect Together</Text>
            <View style={[styles.divider, { backgroundColor: accentColor + '50' }]} />
            <Text style={styles.backQuote}>
              "Listen with your heart.{'\n'}Answer with honesty."
            </Text>
            <View style={[styles.divider, { backgroundColor: accentColor + '50' }]} />
            <Text style={styles.backSub}>Tap to return to the question</Text>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 380,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: Radius.xl,
    borderWidth: 1,
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  front: {},
  back: {},
  innerContent: {
    alignItems: 'center',
    width: '100%',
    gap: Spacing.md,
  },
  circleTop: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  circleBottom: {
    position: 'absolute',
    bottom: -50,
    left: -50,
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  circleTopBack: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  circleBottomBack: {
    position: 'absolute',
    bottom: -40,
    right: -40,
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  emojiLarge: {
    fontSize: 42,
  },
  divider: {
    width: 40,
    height: 1,
  },
  questionText: {
    fontFamily: Fonts.semiBold,
    fontSize: 22,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: 0.3,
  },
  hintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  hintDot: {
    fontSize: 8,
  },
  hintText: {
    fontFamily: Fonts.mediumItalic,
    fontSize: 13,
    letterSpacing: 0.5,
  },
  backSymbol: {
    fontSize: 36,
    color: Colors.text,
  },
  backTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    letterSpacing: 1,
  },
  backQuote: {
    fontFamily: Fonts.semiBoldItalic,
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.3,
  },
  backSub: {
    fontFamily: Fonts.italic,
    fontSize: 12,
    color: Colors.textMuted,
    letterSpacing: 0.5,
  },
});
