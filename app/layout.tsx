import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import { PixelCursor } from "@/components/common/PixelCursor";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { PreferencesProvider } from "@/components/common/PreferencesProvider";
import { getPreferences } from "@/lib/server-preferences";
import { copy } from "@/lib/copy";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--font-roboto",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getPreferences();
  return {
    title: "Duong Le — Portfolio",
    description: copy[locale].bio,
    icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const preferences = await getPreferences();
  return (
    <html
      lang={preferences.locale}
      className={`${roboto.variable} ${geistMono.variable} antialiased ${preferences.theme === 'dark' ? 'dark' : ''}`}
    >
      <body className="font-sans bg-background text-foreground relative">
        <PreferencesProvider preferences={preferences}>
          <LoadingScreen />
          <PixelCursor />
          {children}
        </PreferencesProvider>
      </body>
    </html>
  );
}
