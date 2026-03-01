import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

export interface Favourite {
  id: string;
  deckId: string;
  deckTitle: string;
  deckEmoji: string;
  level: string;
  question: string;
}

const STORAGE_KEY = '@sakina_favourites';

export function useFavourites() {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    loadFavourites();
  }, []);

  async function loadFavourites() {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (json) {
        setFavourites(JSON.parse(json));
      }
    } catch (_) {}
  }

  async function saveFavourites(updated: Favourite[]) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (_) {}
    setFavourites(updated);
  }

  const addFavourite = useCallback(
    async (fav: Favourite) => {
      const already = favourites.find((f) => f.id === fav.id);
      if (already) return;
      const updated = [...favourites, fav];
      await saveFavourites(updated);
    },
    [favourites]
  );

  const removeFavourite = useCallback(
    async (id: string) => {
      const updated = favourites.filter((f) => f.id !== id);
      await saveFavourites(updated);
    },
    [favourites]
  );

  const isFavourite = useCallback(
    (id: string) => favourites.some((f) => f.id === id),
    [favourites]
  );

  return { favourites, addFavourite, removeFavourite, isFavourite };
}
