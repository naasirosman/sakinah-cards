import { router } from 'expo-router';
import { useEffect } from 'react';
import RevenueCatUI, { PAYWALL_RESULT } from 'react-native-purchases-ui';

export default function PaywallScreen() {
  useEffect(() => {
    (async () => {
      const result = await RevenueCatUI.presentPaywall();
      switch (result) {
        case PAYWALL_RESULT.PURCHASED:
        case PAYWALL_RESULT.RESTORED:
          router.replace('/');
          break;
        default:
          // cancelled, error, or not presented — just go back
          if (router.canGoBack()) {
            router.back();
          } else {
            router.replace('/');
          }
      }
    })();
  }, []);

  return null;
}
