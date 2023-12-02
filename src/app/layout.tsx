import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./css/global.css";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legacy of choices",
  description: "Legacy of choices",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
