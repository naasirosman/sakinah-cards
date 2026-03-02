import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DeckCard from '../components/DeckCard';
import { DECKS } from '../constants/decks';
import { Colors, Fonts, Spacing } from '../constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
          </View>
          <TouchableOpacity
            style={styles.heartBtn}
            onPress={() => router.push('/favourites')}
          >
            <Text style={styles.heartIcon}>♡</Text>
          </TouchableOpacity>
        </View>

        {/* Title section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>ota Cards</Text>
          <Text style={styles.subtitle}>Deep Conversation Decks</Text>
          <View style={styles.divider} />
        </View>

        {/* Intro text */}
        <Text style={styles.intro}>
          Choose a deck below and begin a meaningful conversation — with respect, intention &
          sincerity.
        </Text>

        {/* Deck cards */}
        <View style={styles.decks}>
          {DECKS.map((deck) => (
            <DeckCard key={deck.id} deck={deck} />
          ))}
        </View>

        {/* Ayah banner */}
        <View style={styles.ayahBanner}>
          <Text style={styles.ayahSymbol}>☾</Text>
          <Text style={styles.ayahText}>
            "And He placed between you affection and mercy."
          </Text>
          <Text style={styles.ayahSource}>— Surah Ar-Rum 30:21</Text>
          <View style={styles.ayahDivider} />
          <Text style={styles.appName}>sakina cards</Text>
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
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  headerLeft: {
    flex: 1,
  },
  bismillah: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textMuted,
    letterSpacing: 1,
  },
  heartBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    fontSize: 18,
    color: Colors.red,
  },
  titleSection: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 44,
    color: Colors.text,
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: Fonts.mediumItalic,
    fontSize: 17,
    color: Colors.textMuted,
    letterSpacing: 1.5,
    marginTop: Spacing.xs,
    textAlign: 'center',
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: Colors.red,
    marginTop: Spacing.lg,
    borderRadius: 1,
  },
  intro: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.md,
  },
  decks: {
    gap: 0,
  },
  ayahBanner: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: Spacing.xl,
    alignItems: 'center',
    marginTop: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: Spacing.sm,
  },
  ayahSymbol: {
    fontSize: 24,
    color: Colors.red,
    marginBottom: Spacing.xs,
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
  ayahDivider: {
    width: 30,
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.xs,
  },
  appName: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: Colors.textMuted,
    letterSpacing: 3,
    textTransform: 'lowercase',
  },
});
