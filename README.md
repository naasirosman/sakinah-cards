# Sakina Cards

Thoughtful conversation card decks for Muslim couples — pre-marriage, married life, and faith & deen. Built with Expo + React Native.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18+ |
| Expo CLI | `npm install -g expo` |
| EAS CLI | `npm install -g eas-cli` |

---

## Local Development

```bash
npm install
npm start          # opens Expo Go QR code
npm run ios        # iOS simulator
npm run android    # Android emulator
```

---

## EAS Build

### 1. Log in to your Expo account

```bash
eas login
```

### 2. Link the project (first time only)

```bash
eas init
```

---

### Development build

Installs a custom Expo dev client on device — required for native modules.

```bash
# iOS
eas build --platform ios --profile development

# Android
eas build --platform android --profile development
```

Install the resulting `.ipa` / `.apk` on your device, then run:

```bash
npm start
```

---

### Preview build

Internal distribution build for TestFlight / direct APK install.

```bash
# iOS (ad-hoc, installs via TestFlight internal testing)
eas build --platform ios --profile preview

# Android (outputs .apk, sideload directly)
eas build --platform android --profile preview

# Both platforms
eas build --platform all --profile preview
```

---

### Production build

App Store / Play Store submission build. Version is auto-incremented via `autoIncrement: true`.

```bash
# iOS (.ipa for App Store)
eas build --platform ios --profile production

# Android (.aab for Google Play)
eas build --platform android --profile production

# Both
eas build --platform all --profile production
```

---

## EAS Submit

Submits a completed production build to the stores.

### iOS — App Store Connect

Update `eas.json` with your credentials first:

```json
"ios": {
  "appleId": "you@example.com",
  "ascAppId": "1234567890",
  "appleTeamId": "ABCD1234"
}
```

Then run:

```bash
eas submit --platform ios --profile production
```

### Android — Google Play

Place your service account key at the path in `eas.json` (`./google-service-account.json`), then:

```bash
eas submit --platform android --profile production
```

Builds are submitted to the **internal** track by default. Promote to production from the Play Console.

---

## Over-the-Air Updates (EAS Update)

Push JS/asset updates without a full store release:

```bash
npx expo install expo-updates

# Publish an update
eas update --branch production --message "Fix paywall copy"
```

---

## Project Structure

```
app/
  _layout.tsx        # Root stack navigator + font loading
  index.tsx          # Home screen — deck list
  deck/[id].tsx      # Deck detail + level picker
  card/[id]/[level].tsx  # Card swipe screen
  paywall.tsx        # £19.99 lifetime unlock screen
  favourites.tsx     # Saved questions

components/
  DeckCard.tsx
  LevelCard.tsx      # Shows lock state for freemium levels
  QuestionCard.tsx
  ProgressBar.tsx

constants/
  decks.ts           # All deck/question data
  theme.ts           # Colors, fonts, spacing

hooks/
  useFavourites.ts   # AsyncStorage favourites
  usePurchase.ts     # Freemium purchase state
```

---

## Freemium Model

- **Free** — "Close" level of every deck (30 questions)
- **Pro — £19.99 lifetime** — "Closer" + "Closest" levels unlocked forever

Purchase state is persisted in AsyncStorage. Wire up `hooks/usePurchase.ts` to [RevenueCat](https://www.revenuecat.com) (or StoreKit / Billing directly) before shipping.

---

## Bundle IDs

| Platform | ID |
|----------|----|
| iOS | `com.sakinacards.app` |
| Android | `com.sakinacards.app` |
