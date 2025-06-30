import { ReactLenis } from "lenis/react";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { metadata } from "@/app/metadata";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className="bg-black text-white antialiased">
          <Header />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
