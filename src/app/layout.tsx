import Footer from "./components/footer";
import Navbar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Tanyaradzwa T Mushonga - Frontend Engineer | Mobile Specialist",
  description:
    "Portfolio of Tanyaradzwa Mushonga, a Frontend Engineer and Mobile Specialist building pixel-perfect web experiences.",
  keywords:
    "frontend, mobile, react native, next.js, typescript, developer, zimbabwe, harare",
  authors: [{ name: "Tanyaradzwa T Mushonga" }],
  openGraph: {
    title: "Tanyaradzwa T Mushonga - Frontend Engineer | Mobile Specialist",
    description:
      "Portfolio showcasing innovative web applications and cross-platform mobile apps.",
    type: "website",
    url: "https://tanyaradzwatmushonga.me",
    siteName: "Tanyaradzwa Mushonga Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanyaradzwa T Mushonga - Frontend Engineer | Mobile Specialist",
    description:
      "Portfolio showcasing innovative web applications and cross-platform mobile apps",
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
