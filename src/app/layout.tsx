import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`h-full antialiased font-sans`}>
        <Nav/>
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
