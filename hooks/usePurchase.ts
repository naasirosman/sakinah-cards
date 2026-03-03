import { useCallback, useEffect, useState } from 'react';
import Purchases, { CustomerInfo } from 'react-native-purchases';
import { Level } from '../constants/decks';

const ENTITLEMENT_ID = 'Sakina Cards Pro';

export function usePurchase() {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isPurchased = !!customerInfo?.entitlements.active[ENTITLEMENT_ID];

  useEffect(() => {
    Purchases.getCustomerInfo()
      .then(setCustomerInfo)
      .catch(() => {})
      .finally(() => setIsLoading(false));

    const listener = Purchases.addCustomerInfoUpdateListener((info) => {
      setCustomerInfo(info);
    });

    return () => {
      listener.remove();
    };
  }, []);

  const restorePurchase = useCallback(async (): Promise<boolean> => {
    try {
      const info = await Purchases.restorePurchases();
      setCustomerInfo(info);
      return !!info.entitlements.active[ENTITLEMENT_ID];
    } catch {
      return false;
    }
  }, []);

  const isLevelLocked = useCallback(
    (level: Level) => {
      if (isPurchased) return false;
      return level === 'closer' || level === 'closest';
    },
    [isPurchased]
  );

  return { isPurchased, isLoading, customerInfo, restorePurchase, isLevelLocked };
}
