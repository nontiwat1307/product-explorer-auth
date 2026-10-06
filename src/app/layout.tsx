import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Product Explorer", description: "Product Explorer with Google OAuth" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="th"><body>{children}</body></html>; }
