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
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved</Text>
        <View style={styles.headerRight}>
          {favourites.length > 0 && (
            <Text style={styles.countText}>{favourites.length}</Text>
          )}
        </View>
      </View>

      <View style={styles.divider} />

      {favourites.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>🤍</Text>
          <Text style={styles.emptyTitle}>No saved cards yet</Text>
          <Text style={styles.emptyText}>
            Save the questions that speak to you.
          </Text>
          <TouchableOpacity style={styles.startBtn} onPress={() => router.back()}>
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
                    style={[styles.favCard, { borderLeftColor: deck.accentColor }]}
                  >
                    <View style={styles.favTop}>
                      <Text style={[styles.levelText, { color: deck.accentColor }]}>
                        {fav.level}
                      </Text>
                      <TouchableOpacity onPress={() => removeFavourite(fav.id)}>
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
    alignItems: 'center',
  },
  countText: {
    fontFamily: Fonts.semiBold,
    fontSize: 13,
    color: Colors.textMuted,
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
    fontSize: 48,
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
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  startBtnText: {
    fontFamily: Fonts.semiBold,
    fontSize: 15,
    color: Colors.text,
    letterSpacing: 0.3,
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
    fontSize: 18,
  },
  groupTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: Colors.text,
    letterSpacing: 0.1,
  },
  favCard: {
    backgroundColor: Colors.white,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 3,
    gap: Spacing.sm,
  },
  favTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelText: {
    fontFamily: Fonts.semiBold,
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  removeBtn: {
    padding: 4,
  },
  removeIcon: {
    fontSize: 13,
    color: Colors.textLight,
  },
  favQuestion: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
});
