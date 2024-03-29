import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Admin Ibadahku",
  description: "Website Super Admin Ibadahku",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}