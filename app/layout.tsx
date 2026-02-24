import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Filip",
  description:
    "Filip — Frontend Developer, Team Leader, Business Developer. I build the internet. You're welcome.",
  openGraph: {
    title: "Filip",
    description:
      "Frontend Developer, Team Leader, Business Developer. I build the internet. You're welcome.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // Prevents React hydration mismatch caused by next-themes injecting
      // a theme class server-side vs. client-side
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable} ${dmMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="filip-mode"
          themes={["light", "dark", "filip-mode"]}
          // Keep transitions enabled — smooth CSS variable transition on theme switch
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
