import { ExpoConfig } from "@expo/config-types";

const configFn = ({}: any): ExpoConfig => ({
  name: "expo",
  slug: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  plugins: ["expo-apple-authentication"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.juliusmarminge.expo",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    nextAuthUrl: process.env.NEXTAUTH_URL,
    githubId: process.env.EXPO_GITHUB_ID,
    eas: {
      projectId: "768478b6-46cd-43a3-904b-f4d5065648d2",
    },
  },
});

export default configFn;
