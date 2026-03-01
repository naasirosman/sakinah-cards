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
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Back */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.crescent}>☾</Text>
          <Text style={styles.headline}>Unlock Sakina Cards</Text>
          <Text style={styles.price}>£19.99</Text>
          <View style={styles.priceUnderline} />
          <Text style={styles.lifetimeTag}>Lifetime access</Text>
        </View>

        {/* Benefits */}
        <View style={styles.benefitsCard}>
          {[
            'Every deck — pre-marriage, married & faith',
            'Every level — Close, Closer & Closest',
            'Every card we ever add, forever',
          ].map((benefit, i) => (
            <View key={i} style={[styles.benefitRow, i > 0 && styles.benefitBorder]}>
              <Text style={styles.benefitIcon}>✦</Text>
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>

        {/* Ayah quote */}
        <View style={styles.ayahCard}>
          <Text style={styles.ayahSymbol}>☾</Text>
          <Text style={styles.ayahText}>
            "And He placed between you affection and mercy."
          </Text>
          <Text style={styles.ayahSource}>— Ar-Rum 30:21</Text>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>
          No monthly fees. No renewals.{'\n'}One intention, one payment, forever.
        </Text>

        {/* CTA */}
        <TouchableOpacity
          style={[styles.ctaBtn, purchasing && styles.ctaBtnDisabled]}
          onPress={handlePurchase}
          disabled={purchasing}
          activeOpacity={0.85}
        >
          {purchasing ? (
            <ActivityIndicator color={Colors.background} />
          ) : (
            <Text style={styles.ctaText}>Unlock for £19.99</Text>
          )}
        </TouchableOpacity>

        {/* Restore */}
        <TouchableOpacity
          style={styles.restoreBtn}
          onPress={handleRestore}
          disabled={restoring}
        >
          <Text style={styles.restoreText}>
            {restoring ? 'Restoring...' : 'Restore Purchase'}
          </Text>
        </TouchableOpacity>

        {/* Free note */}
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.md,
  },
  backArrow: {
    fontSize: 20,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  backText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.text,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    gap: Spacing.sm,
  },
  crescent: {
    fontSize: 48,
    color: Colors.gold,
    marginBottom: Spacing.xs,
  },
  headline: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    color: Colors.text,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  price: {
    fontFamily: Fonts.bold,
    fontSize: 52,
    color: Colors.gold,
    letterSpacing: 1,
    marginTop: Spacing.xs,
  },
  priceUnderline: {
    width: 60,
    height: 2,
    backgroundColor: Colors.gold,
    borderRadius: 1,
    opacity: 0.6,
  },
  lifetimeTag: {
    fontFamily: Fonts.mediumItalic,
    fontSize: 16,
    color: Colors.textLight,
    letterSpacing: 1,
  },
  benefitsCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.lg,
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
  benefitIcon: {
    fontSize: 12,
    color: Colors.gold,
    width: 16,
    textAlign: 'center',
  },
  benefitText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.text,
    flex: 1,
    lineHeight: 24,
  },
  ayahCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  ayahSymbol: {
    fontSize: 20,
    color: Colors.red,
  },
  ayahText: {
    fontFamily: Fonts.semiBoldItalic,
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.3,
  },
  ayahSource: {
    fontFamily: Fonts.italic,
    fontSize: 13,
    color: Colors.textMuted,
    letterSpacing: 0.5,
  },
  tagline: {
    fontFamily: Fonts.mediumItalic,
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: Spacing.xl,
    letterSpacing: 0.3,
  },
  ctaBtn: {
    backgroundColor: Colors.gold,
    borderRadius: Radius.full,
    paddingVertical: Spacing.md + 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  ctaBtnDisabled: {
    opacity: 0.6,
  },
  ctaText: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.background,
    letterSpacing: 0.5,
  },
  restoreBtn: {
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  restoreText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    textDecorationLine: 'underline',
  },
  freeNote: {
    fontFamily: Fonts.italic,
    fontSize: 13,
    color: Colors.textMuted,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
