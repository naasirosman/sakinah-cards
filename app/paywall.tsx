import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';
import { usePurchase } from '../hooks/usePurchase';

export default function PaywallScreen() {
  const { purchase, restorePurchase } = usePurchase();
  const [purchasing, setPurchasing] = useState(false);
  const [restoring, setRestoring] = useState(false);

  async function handlePurchase() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setPurchasing(true);
    await purchase();
    setPurchasing(false);
    router.back();
  }

  async function handleRestore() {
    setRestoring(true);
    const restored = await restorePurchase();
    setRestoring(false);
    if (restored) {
      router.back();
    } else {
      Alert.alert('No purchase found', 'We couldn\'t find a previous purchase on this account.');
    }
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Back */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.brand}>SAKINA</Text>
          <Text style={styles.headline}>Unlock All Cards</Text>
          <Text style={styles.price}>£19.99</Text>
          <Text style={styles.lifetimeTag}>Lifetime access · No renewals</Text>
        </View>

        {/* Benefits */}
        <View style={styles.benefitsCard}>
          {[
            'Every deck — pre-marriage, married & faith',
            'Every level — Close, Closer & Closest',
            'Every card we ever add, forever',
          ].map((benefit, i) => (
            <View key={i} style={[styles.benefitRow, i > 0 && styles.benefitBorder]}>
              <View style={[styles.check, { backgroundColor: Colors.gold + '20' }]}>
                <Text style={[styles.checkText, { color: Colors.gold }]}>✓</Text>
              </View>
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>

        {/* Quote */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            "And He placed between you affection and mercy."
          </Text>
          <Text style={styles.quoteSource}>Ar-Rum 30:21</Text>
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={[styles.ctaBtn, purchasing && styles.ctaBtnDisabled]}
          onPress={handlePurchase}
          disabled={purchasing}
          activeOpacity={0.85}
        >
          {purchasing ? (
            <ActivityIndicator color={Colors.white} />
          ) : (
            <Text style={styles.ctaText}>Unlock for £19.99</Text>
          )}
        </TouchableOpacity>

        {/* Restore */}
        <TouchableOpacity style={styles.restoreBtn} onPress={handleRestore} disabled={restoring}>
          <Text style={styles.restoreText}>
            {restoring ? 'Restoring...' : 'Restore Purchase'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.freeNote}>
          The "Close" level of every deck is always free.
        </Text>
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
  },
  hero: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    gap: Spacing.sm,
  },
  brand: {
    fontFamily: Fonts.semiBold,
    fontSize: 11,
    color: Colors.gold,
    letterSpacing: 6,
  },
  headline: {
    fontFamily: Fonts.boldItalic,
    fontSize: 40,
    color: Colors.text,
    textAlign: 'center',
    letterSpacing: -0.3,
    lineHeight: 44,
  },
  price: {
    fontFamily: Fonts.bold,
    fontSize: 48,
    color: Colors.text,
    letterSpacing: -1,
    marginTop: Spacing.xs,
  },
  lifetimeTag: {
    fontFamily: Fonts.italic,
    fontSize: 14,
    color: Colors.textMuted,
    letterSpacing: 0.3,
  },
  benefitsCard: {
    backgroundColor: Colors.white,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: Spacing.xs,
    marginBottom: Spacing.md,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  benefitBorder: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    fontSize: 13,
    fontFamily: Fonts.bold,
  },
  benefitText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.text,
    flex: 1,
    lineHeight: 22,
  },
  quoteCard: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    gap: Spacing.xs,
    marginBottom: Spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  quoteText: {
    fontFamily: Fonts.semiBoldItalic,
    fontSize: 17,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  quoteSource: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.textLight,
    letterSpacing: 0.5,
  },
  ctaBtn: {
    backgroundColor: Colors.text,
    borderRadius: Radius.full,
    paddingVertical: Spacing.md + 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  ctaBtnDisabled: {
    opacity: 0.5,
  },
  ctaText: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: Colors.white,
    letterSpacing: 0.3,
  },
  restoreBtn: {
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  restoreText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textMuted,
    letterSpacing: 0.3,
    textDecorationLine: 'underline',
  },
  freeNote: {
    fontFamily: Fonts.italic,
    fontSize: 13,
    color: Colors.textLight,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
