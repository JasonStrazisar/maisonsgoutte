import type { Metadata } from "next";
import { Agentation } from "agentation";
import { DialRoot } from "dialkit";
import "dialkit/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Générations Unies pour Maisonsgoutte !",
  description:
    "Ensemble, faisons de Maisonsgoutte un village où il fait bon vivre, à tout âge. Élections municipales 2026.",
  openGraph: {
    title: "Générations Unies pour Maisonsgoutte !",
    description:
      "Ensemble, faisons de Maisonsgoutte un village où il fait bon vivre, à tout âge.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <DialRoot />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
