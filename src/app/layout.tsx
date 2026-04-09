import Footer from "./components/footer";
import Navbar from "./components/NavBar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://tanyaradzwatmushonga.me"),
  title: {
    default: "Tanyaradzwa T Mushonga - Software Engineer | Full-Stack & Cloud Specialist",
    template: "%s | Tanyaradzwa T Mushonga"
  },
  description:
    "Portfolio of Tanyaradzwa Mushonga, a Software Engineer specializing in Full-Stack development, Cloud infrastructure, and Mobile applications. Building scalable digital solutions with Next.js, React Native, and AWS.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "software engineer",
    "full-stack engineer",
    "cloud specialist",
    "mobile specialist",
    "react native developer",
    "next.js expert",
    "typescript",
    "backend developer",
    "aws specialist",
    "django developer",
    "software architect",
    "zimbabwe developer",
  ],
  authors: [{ name: "Tanyaradzwa T Mushonga", url: "https://tanyaradzwatmushonga.me" }],
  creator: "Tanyaradzwa T Mushonga",
  openGraph: {
    title: "Tanyaradzwa T Mushonga - Software Engineer | Full-Stack & Cloud Specialist",
    description:
      "Tanyaradzwa Mushonga is a multi-disciplinary Software Engineer building high-performance, scalable digital experiences across web, mobile, and cloud.",
    type: "website",
    url: "https://tanyaradzwatmushonga.me",
    siteName: "Tanyaradzwa Mushonga Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanyaradzwa T Mushonga - Software Engineer | Full-Stack & Cloud Specialist",
    description:
      "Software Engineer specializing in Full-Stack, Cloud, and Mobile development. View my portfolio.",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        <Analytics />
      </body>
    </html>
  );
}
