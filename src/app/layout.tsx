import Footer from "./components/footer";
import Navbar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Tanyaradzwa T Mushonga - Full Stack Developer",
  description:
    "Portfolio of Tanyaradzwa Mushonga, a passionate full-stack developer specializing in modern web technologies.",
  keywords:
    "developer, full-stack, react, next.js, node.js, python, zimbabwe, harare",
  authors: [{ name: "Tanyaradzwa T Mushonga" }],
  openGraph: {
    title: "Tanyaradzwa T Mushonga - Full Stack Developer",
    description:
      "Portfolio showcasing innovative web applications and development expertise",
    type: "website",
    url: "https://tanyaradzwatmushonga.me",
    siteName: "Tanyaradzwa Mushonga Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanyaradzwa T Mushonga - Full Stack Developer",
    description:
      "Portfolio showcasing innovative web applications and development expertise",
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
