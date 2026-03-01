import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';
import { Level } from '../constants/decks';

const PURCHASE_KEY = '@sakina_purchased';

export function usePurchase() {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(PURCHASE_KEY)
      .then((val) => {
        if (val === 'true') setIsPurchased(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const purchase = useCallback(async () => {
    // TODO: integrate with RevenueCat / StoreKit / Google Play Billing
    await AsyncStorage.setItem(PURCHASE_KEY, 'true');
    setIsPurchased(true);
  }, []);

  const restorePurchase = useCallback(async () => {
    // TODO: integrate with RevenueCat restore
    const val = await AsyncStorage.getItem(PURCHASE_KEY);
    if (val === 'true') {
      setIsPurchased(true);
      return true;
    }
    return false;
  }, []);

  const isLevelLocked = useCallback(
    (level: Level) => {
      if (isPurchased) return false;
      return level === 'closer' || level === 'closest';
    },
    [isPurchased]
  );

  return { isPurchased, isLoading, purchase, restorePurchase, isLevelLocked };
}
