// import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavHandler from "@/components/NavHandler";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import FooterHandler from "@/components/FooterHandler";
import GlobalProvider from "@/context/GlobalProvider";
import "react-toastify/dist/ReactToastify.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="inter">
        <GlobalProvider>
          <NavHandler />
          {children}
          <FooterHandler />
          <ToastContainer />
        </GlobalProvider>
      </body>
    </html>
  );
}
