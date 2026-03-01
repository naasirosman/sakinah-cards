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
import { DECKS } from '../constants/decks';
import { Colors, Fonts, Radius, Spacing } from '../constants/theme';
import { Favourite, useFavourites } from '../hooks/useFavourites';

export default function FavouritesScreen() {
  const { favourites, removeFavourite } = useFavourites();

  // Group by deck
  const grouped: Record<string, Favourite[]> = {};
  for (const fav of favourites) {
    if (!grouped[fav.deckId]) grouped[fav.deckId] = [];
    grouped[fav.deckId].push(fav);
  }

  const deckOrder = DECKS.map((d) => d.id);
  const sortedGroupKeys = Object.keys(grouped).sort(
    (a, b) => deckOrder.indexOf(a) - deckOrder.indexOf(b)
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved Cards</Text>
        <View style={styles.headerRight}>
          {favourites.length > 0 && (
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{favourites.length}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.divider} />

      {favourites.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>🤍</Text>
          <Text style={styles.emptyTitle}>No saved cards yet</Text>
          <Text style={styles.emptyText}>
            Start a deck and save the questions that speak to you.
          </Text>
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.startBtnText}>Explore Decks</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {sortedGroupKeys.map((deckId) => {
            const deck = DECKS.find((d) => d.id === deckId);
            const items = grouped[deckId];
            if (!deck || !items) return null;

            return (
              <View key={deckId} style={styles.group}>
                <View style={styles.groupHeader}>
                  <Text style={styles.groupEmoji}>{deck.emoji}</Text>
                  <Text style={styles.groupTitle}>{deck.title}</Text>
                </View>

                {items.map((fav) => (
                  <View
                    key={fav.id}
                    style={[styles.favCard, { backgroundColor: deck.cardColor, borderColor: deck.accentColor + '30' }]}
                  >
                    <View style={styles.favTop}>
                      <View
                        style={[styles.levelBadge, { backgroundColor: deck.accentColor + '25' }]}
                      >
                        <Text style={[styles.levelText, { color: deck.accentColor }]}>
                          {fav.level}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.removeBtn}
                        onPress={() => removeFavourite(fav.id)}
                      >
                        <Text style={styles.removeIcon}>✕</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.favQuestion}>{fav.question}</Text>
                  </View>
                ))}
              </View>
            );
          })}
        </ScrollView>
      )}
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
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 18,
    color: Colors.text,
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.text,
    flex: 1,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  headerRight: {
    width: 40,
    alignItems: 'center',
  },
  countBadge: {
    backgroundColor: Colors.red,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontFamily: Fonts.bold,
    fontSize: 12,
    color: Colors.white,
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
    gap: Spacing.xl,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xxl,
    gap: Spacing.md,
  },
  emptyIcon: {
    fontSize: 52,
    marginBottom: Spacing.sm,
  },
  emptyTitle: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.text,
    textAlign: 'center',
  },
  emptyText: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 24,
  },
  startBtn: {
    marginTop: Spacing.md,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.red,
  },
  startBtnText: {
    fontFamily: Fonts.semiBold,
    fontSize: 15,
    color: Colors.red,
    letterSpacing: 0.5,
  },
  group: {
    gap: Spacing.sm,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.xs,
  },
  groupEmoji: {
    fontSize: 20,
  },
  groupTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.text,
    letterSpacing: 0.3,
  },
  favCard: {
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderWidth: 1,
    gap: Spacing.sm,
  },
  favTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  levelText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    letterSpacing: 1,
  },
  removeBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeIcon: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  favQuestion: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
    letterSpacing: 0.2,
  },
});
