/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import "./globals.css";
import { Montserrat, Cormorant } from "next/font/google";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: "variable",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "variable",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} text-sonja-black font-montserrat flex flex-col items-center justify-center min-h-screen`}
      >
        <Navigation />
        <div className="mt-10 h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
