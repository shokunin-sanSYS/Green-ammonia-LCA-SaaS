import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "グリーンNH₃ LCA自動算定SaaS | 3ヶ月が3週間に",
  description: "グリーンアンモニアのカーボンフットプリント算定を完全自動化。ISO14067準拠、工数85%削減。商社・化学・発電事業者向けSaaS。2025年春リリース予定。",
  keywords: "LCA, グリーンアンモニア, カーボンフットプリント, ISO14067, 自動算定, SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
