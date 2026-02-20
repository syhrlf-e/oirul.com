import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oirul — Premium Digital Agency",
  description:
    "Transforming visions into digital masterpieces. Web development, UI/UX design, and branding for the modern era.",
  keywords: ["Digital Agency", "Web Design", "Next.js", "Oirul", "Portfolio"],
  openGraph: {
    title: "Oirul — Premium Digital Agency",
    description: "Transforming visions into digital masterpieces.",
    url: "https://oirul.com",
    siteName: "Oirul",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oirul — Premium Digital Agency",
    description: "Transforming visions into digital masterpieces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
