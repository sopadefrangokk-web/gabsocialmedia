import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Gabriel Social Media",
  description: "Estratégia criativa, conteúdo que conecta e resultados reais para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${playfair.variable} dark`}>
      <body className="min-h-screen bg-[#06030b] text-white font-sans antialiased selection:bg-purple-600 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
