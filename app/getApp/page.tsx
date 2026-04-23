import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  ANDROID_PLAY_STORE_URL,
  detectPlatformFromUserAgent,
  IOS_APP_STORE_URL,
} from "@/lib/download";

export default async function GetAppPage() {
  const userAgent = (await headers()).get("user-agent") ?? "";
  const platform = detectPlatformFromUserAgent(userAgent);

  if (platform === "android") {
    redirect(ANDROID_PLAY_STORE_URL);
  }

  if (platform === "ios") {
    redirect(IOS_APP_STORE_URL);
  }

  redirect("/pricing#get-app");
}
