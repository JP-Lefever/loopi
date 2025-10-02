import type { Metadata } from "next";

import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import React from "react";
import {paragraphFont, subtitle} from "@/components/ui/fonts";
import NavBar from "@/components/layout/navBar/NavBar";
import {ToastContainer} from "react-toastify";
import Footer from "@/components/layout/footer/Footer";


export const metadata: Metadata = {
    title: "Loopi Web | Création de site web vitrine & sur-mesure",
    description:
        "Loopi Web crée des sites modernes, rapides et personnalisés. Basé dans le Lot, près de Figeac. Accompagnement sur-mesure et référencement optimisé.",
    keywords: ["création site web", "développeur web Lot", "site vitrine", "Figeac", "Loopi Web"],
    icons: {
        icon: "/images/loopi.webp",
    },
    openGraph: {
        title: "Loopi Web | Création de site web sur-mesure",
        description:
            "Création de site web professionnel près de Figeac. Design, développement, référencement et accompagnement.",
        url: "#",
        siteName: "Loopi Web",
        images: [
            {
                url: "/images/loopi.webp",
                width: 1200,
                height: 630,
                alt: "Loopi Web - Création de site internet",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={` ${paragraphFont.variable} ${subtitle.variable}`}>
          <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
          />
            <NavBar />
            {children}
            <Footer />
            <Analytics/>
      </body>
    </html>
  );
}
