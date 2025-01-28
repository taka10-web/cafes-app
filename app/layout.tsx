import { Header } from "@/components/layouts/Header";
import "./globals.css";
import { CafeProvider } from "@/features/cafes/CafeContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <CafeProvider>{children}</CafeProvider>
      </body>
    </html>
  );
}
