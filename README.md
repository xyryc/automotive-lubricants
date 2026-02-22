# Automotive Lubricants App

React Native app built with Expo Router + NativeWind.

## Prerequisites

- Node.js 18+
- npm 9+
- Xcode (for iOS simulator)
- Android Studio (for Android emulator)

## Install

```bash
npm install
```

## Run

Start Metro:

```bash
npx expo start -c
```

Run on iOS simulator:

```bash
npm expo run:ios
```

Run on Android emulator:

```bash
npm expo run:android
```

## Project Structure

- `app/(auth)` - Sign in / Sign up screens
- `app/(tabs)` - Marketplace, Services, Scan, Roadside assistance, Profile
- `stores/authStore.ts` - Auth state (signup/login/logout/session)
- `lib/alert.ts` - Global dropdown alert helper

## Authentication Flow (Mock)

- Sign up creates a local user
- Duplicate usernames are blocked (case-insensitive)
- Sign in validates local users
- Session is stored locally
- Logout clears session and returns to sign in

## Test Credentials

- Username: `shl0145`
- Password: `123456`

## Notes

- Alerts are shown via `react-native-dropdownalert` mounted in `app/_layout.tsx`.
- `@` imports are configured via `tsconfig.json` and `babel.config.js`.
