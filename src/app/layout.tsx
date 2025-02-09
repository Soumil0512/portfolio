import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
// import { getThemeFromCookies } from "@/lib/theme";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Soumil Sarkar",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-100">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
