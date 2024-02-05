import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "brij-ecommerce",
  description: "best e-commerce web it is very cheap and founder name is brijesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <NextTopLoader height={10} color="#FC6736"/>
    <section className="h-[100%]">
    {children}
    </section>
      <Footer/>
      </body>
    </html>
  );
}
