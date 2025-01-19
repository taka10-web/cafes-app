import "./globals.css";
import { CafeProvider } from "@/features/cafes/CafeContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <CafeProvider>{children}</CafeProvider>
      </body>
    </html>
  );
}
