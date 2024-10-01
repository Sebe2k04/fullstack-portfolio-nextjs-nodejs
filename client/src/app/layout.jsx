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
import HireIcon from "@/components/HireIcon";

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
  title: "Sebe S",
  description:
    "a Passionate web developer and Tech Enthusiast who interest on coding and eager to learn develop Web Applications and Software using Javascript programming language . I'm a fresher and I can adapt various tech environments and perform collaborative works and scalable projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="inter">
      {/* <FixedBtn /> */}
        <GlobalProvider>
          <NavHandler />
          {children}
          <FooterHandler />
          <ToastContainer />
        </GlobalProvider>
        {/* <div className="fixed bottom-2">
        <div className=" ">
          <h1 className="hello text-black text-2xl p-2">Hire Me</h1>
        </div>
      </div> */}
      <HireIcon/>
      </body>
    </html>
  );
}
