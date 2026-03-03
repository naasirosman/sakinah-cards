import { Ionicons } from '@expo/vector-icons';
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
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.push('/favourites')}
          >
            <Text style={styles.heartIcon}>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.push('/settings')}
          >
            <Ionicons name="settings-outline" size={22} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>

        {/* Title section */}
        <View style={styles.titleSection}>
          <Text style={styles.brand}>SAKINA</Text>
          <Text style={styles.title}>Cards</Text>
          <Text style={styles.subtitle}>Deep Conversation Decks</Text>
        </View>

        {/* Deck cards */}
        <View style={styles.decks}>
          {DECKS.map((deck) => (
            <DeckCard key={deck.id} deck={deck} />
          ))}
        </View>

        {/* Ayah banner */}
        <View style={styles.ayahBanner}>
          <Text style={styles.ayahText}>
            "And He placed between you affection and mercy."
          </Text>
          <Text style={styles.ayahSource}>Surah Ar-Rum 30:21</Text>
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
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    fontSize: 22,
    color: Colors.textMuted,
  },
  titleSection: {
    alignItems: 'center',
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  brand: {
    fontFamily: Fonts.semiBold,
    fontSize: 13,
    color: Colors.gold,
    letterSpacing: 6,
    marginBottom: 2,
  },
  title: {
    fontFamily: Fonts.boldItalic,
    fontSize: 52,
    color: Colors.text,
    letterSpacing: -0.5,
    lineHeight: 56,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.textMuted,
    letterSpacing: 1,
    marginTop: Spacing.sm,
  },
  decks: {
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  ayahBanner: {
    alignItems: 'center',
    marginTop: Spacing.xl,
    paddingVertical: Spacing.xl,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: Spacing.xs,
  },
  ayahText: {
    fontFamily: Fonts.semiBoldItalic,
    fontSize: 16,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  ayahSource: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.textLight,
    letterSpacing: 0.5,
  },
});
