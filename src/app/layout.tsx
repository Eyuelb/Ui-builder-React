import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.css";
import MantineProvider from "@/shared/mantine/provider";

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}