const DEFAULT_SITE_URL = "https://collis.atomiq.rw";

export const IOS_APP_STORE_URL =
  process.env.NEXT_PUBLIC_IOS_APP_STORE_URL ??
  "https://apps.apple.com/us/app/whatsapp-messenger/id310633997";

export const ANDROID_PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_ANDROID_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.whatsapp";

export const FALLBACK_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

export function getDownloadEntryUrl(origin?: string) {
  return new URL("/getApp", origin ?? FALLBACK_SITE_URL).toString();
}

export type MobilePlatform = "ios" | "android" | "other";

export function detectPlatformFromUserAgent(userAgent: string): MobilePlatform {
  const normalizedAgent = userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(normalizedAgent)) {
    return "ios";
  }

  if (/android/.test(normalizedAgent)) {
    return "android";
  }

  return "other";
}
