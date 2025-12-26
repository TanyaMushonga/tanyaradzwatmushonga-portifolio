import Footer from "./components/footer";
import Navbar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://tanyaradzwatmushonga.me"),
  title: {
    default: "Tanyaradzwa T Mushonga - Frontend Engineer | Mobile Specialist",
    template: "%s | Tanyaradzwa Mushonga"
  },
  description:
    "Portfolio of Tanyaradzwa Mushonga, a Frontend Engineer and Mobile Specialist building pixel-perfect web experiences with Next.js and React Native.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "frontend engineer",
    "mobile specialist",
    "react native developer",
    "next.js expert",
    "typescript",
    "web development",
    "zimbabwe",
    "software engineer"
  ],
  authors: [{ name: "Tanyaradzwa T Mushonga", url: "https://tanyaradzwatmushonga.me" }],
  creator: "Tanyaradzwa T Mushonga",
  openGraph: {
    title: "Tanyaradzwa T Mushonga - Frontend Engineer | Mobile Specialist",
    description:
      "Tanyaradzwa Mushonga is a specialized Frontend Engineer and Mobile App Developer building high-performance, pixel-perfect digital experiences.",
    type: "website",
    url: "https://tanyaradzwatmushonga.me",
    siteName: "Tanyaradzwa Mushonga Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tanyaradzwa Mushonga Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanyaradzwa T Mushonga - Frontend Engineer | Mobile Specialist",
    description:
      "Specialized Frontend Engineer and Mobile App Developer. View my portfolio.",
    images: ["/opengraph-image.jpg"],
    creator: "@tanyaradzwa_tm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <div className="pt-20 md:pt-15">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
