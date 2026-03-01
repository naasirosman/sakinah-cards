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
  accentColor,
  cardIndex,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

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
              transform: [{ rotateY: frontRotate }],
              opacity: frontOpacity,
            },
          ]}
        >
          <View style={styles.innerContent}>
            <Text style={[styles.brand, { color: accentColor }]}>SAKINA</Text>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.questionText}>{question}</Text>
            <Text style={styles.hint}>Tap to reflect</Text>
          </View>
        </Animated.View>

        {/* Back */}
        <Animated.View
          style={[
            styles.card,
            styles.back,
            {
              backgroundColor: Colors.surface,
              transform: [{ rotateY: backRotate }],
              opacity: backOpacity,
            },
          ]}
        >
          <View style={styles.innerContent}>
            <Text style={styles.backSymbol}>☾</Text>
            <Text style={[styles.backTitle, { color: accentColor }]}>Reflect Together</Text>
            <View style={[styles.divider, { backgroundColor: Colors.border }]} />
            <Text style={styles.backQuote}>
              "Listen with your heart.{'\n'}Answer with honesty."
            </Text>
            <View style={[styles.divider, { backgroundColor: Colors.border }]} />
            <Text style={styles.backSub}>Tap to return</Text>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: Radius.xl,
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
    backgroundColor: Colors.white,
    // subtle shadow
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3,
  },
  front: {},
  back: {},
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
  questionText: {
    fontFamily: Fonts.semiBold,
    fontSize: 24,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 34,
    letterSpacing: 0.2,
  },
  hint: {
    fontFamily: Fonts.italic,
    fontSize: 12,
    color: Colors.textLight,
    letterSpacing: 0.5,
    marginTop: Spacing.sm,
  },
  divider: {
    width: 32,
    height: 1,
  },
  backSymbol: {
    fontSize: 32,
    color: Colors.textLight,
  },
  backTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    letterSpacing: 0.5,
  },
  backQuote: {
    fontFamily: Fonts.semiBoldItalic,
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.2,
  },
  backSub: {
    fontFamily: Fonts.italic,
    fontSize: 12,
    color: Colors.textLight,
    letterSpacing: 0.5,
  },
});
