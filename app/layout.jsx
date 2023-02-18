import "./globals.css";

import Head from "./head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
