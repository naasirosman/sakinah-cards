import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RevenueCatUI from 'react-native-purchases-ui';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';
import { usePurchase } from '../hooks/usePurchase';

const APP_VERSION = '1.0.2';

function openLink(url: string) {
  Linking.openURL(url);
}

export default function SettingsScreen() {
  const { isPurchased, customerInfo } = usePurchase();
  const [restoring, setRestoring] = useState(false);

  async function handleRestore() {
    setRestoring(true);
    try {
      await RevenueCatUI.presentCustomerCenter();
    } finally {
      setRestoring(false);
    }
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.divider} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Premium */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>PREMIUM</Text>
          <View style={styles.card}>
            {!isPurchased && (
              <>
                <TouchableOpacity
                  style={styles.upgradeRow}
                  onPress={() => router.push('/paywall')}
                  activeOpacity={0.8}
                >
                  <View>
                    <Text style={[styles.rowLabel, { color: Colors.gold }]}>
                      Upgrade to Premium
                    </Text>
                    <Text style={styles.rowSub}>Unlock all levels & decks</Text>
                  </View>
                  <Text style={[styles.chevron, { color: Colors.gold }]}>›</Text>
                </TouchableOpacity>
                <View style={styles.rowDivider} />
              </>
            )}
            <TouchableOpacity
              style={styles.row}
              onPress={handleRestore}
              disabled={restoring}
            >
              <Text style={[styles.rowLabel, restoring && styles.rowLabelMuted]}>
                {restoring ? 'Restoring…' : 'Restore Purchases'}
              </Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>SUPPORT</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                openLink(
                  'https://apps.apple.com/app/id6759875947?action=write-review'
                )
              }
            >
              <Text style={styles.rowLabel}>Rate Sakina Cards</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
            <View style={styles.rowDivider} />
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                openLink('mailto:hello@sakinacards.app?subject=Feedback')
              }
            >
              <Text style={styles.rowLabel}>Send Feedback</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
            <View style={styles.rowDivider} />
            <TouchableOpacity
              style={styles.row}
              onPress={() => openLink('https://sakinacards.app/terms')}
            >
              <Text style={styles.rowLabel}>Terms of Service</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
            <View style={styles.rowDivider} />
            <TouchableOpacity
              style={styles.row}
              onPress={() => openLink('https://sakinacards.app/privacy')}
            >
              <Text style={styles.rowLabel}>Privacy Policy</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ABOUT</Text>
          <View style={styles.card}>
            <View style={styles.infoRow}>
              <Text style={styles.rowLabel}>Version</Text>
              <Text style={styles.rowValue}>{APP_VERSION}</Text>
            </View>
            <View style={styles.rowDivider} />
            <View style={styles.infoRow}>
              <Text style={styles.rowLabel}>Customer ID</Text>
              <Text style={styles.rowValue}>{customerInfo?.originalAppUserId ?? '—'}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 22,
    color: Colors.text,
  },
  headerTitle: {
    fontFamily: Fonts.boldItalic,
    fontSize: 28,
    color: Colors.text,
    flex: 1,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  headerRight: {
    width: 40,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
    gap: Spacing.lg,
  },
  section: {
    gap: Spacing.xs,
  },
  sectionLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 11,
    color: Colors.textMuted,
    letterSpacing: 2,
    paddingHorizontal: Spacing.xs,
    marginBottom: 2,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  upgradeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  rowDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.md,
  },
  rowLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
  },
  rowLabelMuted: {
    color: Colors.textMuted,
  },
  rowSub: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 2,
  },
  rowValue: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textMuted,
  },
  chevron: {
    fontSize: 22,
    color: Colors.textMuted,
    lineHeight: 26,
  },
});
