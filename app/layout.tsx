import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import { PixelCursor } from "@/components/common/PixelCursor";
import { LoadingScreen } from "@/components/common/LoadingScreen";
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

export const metadata: Metadata = {
  title: "Duong Le — Portfolio",
  description: "Personal Portfolio of Duong Le",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${roboto.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground relative">
        <LoadingScreen />
        <PixelCursor />
        {children}
      </body>
    </html>
  );
}
