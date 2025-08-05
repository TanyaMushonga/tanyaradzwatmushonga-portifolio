import Footer from "./components/footer";
import Navbar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Tanyaradzwa T Mushonga - Full Stack Developer",
  description:
    "Portfolio of Tanyaradzwa Mushonga, a passionate full-stack developer specializing in modern web technologies.",
  keywords: "developer, full-stack, react, next.js, node.js, python",
  authors: [{ name: "Tanyaradzwa T Mushonga" }],
  openGraph: {
    title: "Tanyaradzwa T Mushonga - Full Stack Developer",
    description:
      "Portfolio showcasing innovative web applications and development expertise",
    type: "website",
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
