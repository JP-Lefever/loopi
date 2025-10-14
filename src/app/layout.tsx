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
        icon: "/images/loopi.png",
    },
    metadataBase: new URL("https://loopiweb.fr"),
    openGraph: {
        title: "Loopi Web | Création de site web sur-mesure",
        description:
            "Création de site web professionnel près de Figeac. Design, développement, référencement et accompagnement personnalisé.",
        url: "https://loopiweb.fr",
        siteName: "Loopi Web",
        images: [
            {
                url: "/images/loopi.png",
                width: 1200,
                height: 630,
                alt: "Loopi Web - Création de site internet",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Loopi Web | Création de site web sur-mesure",
        description:
            "Création de site web professionnel près de Figeac. Design, développement, référencement et accompagnement personnalisé.",
        images: ["/images/loopi.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://loopiweb.fr",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Loopi Web",
    image: "https://loopiweb.fr/images/loopi.png",
    url: "https://loopiweb.fr",
    logo: "https://loopiweb.fr/images/loopi.png",
    description:
        "Loopi Web crée des sites web modernes, rapides et personnalisés. Basé dans le Lot, près de Figeac. Accompagnement sur-mesure et référencement optimisé.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "275 route des combes",
        addressLocality: "Camburat",
        postalCode: "46100",
        addressCountry: "FR",
    },
    telephone: "+33 7 81 96 64 96",
    sameAs: [
        "https://www.facebook.com/profile.php?id=61581724560317",
        "https://github.com/JP-Lefever",
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">


      <body className={` ${paragraphFont.variable} ${subtitle.variable}`}>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
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
