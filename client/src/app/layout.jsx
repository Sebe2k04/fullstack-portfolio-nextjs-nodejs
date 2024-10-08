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
import SEO from "@/components/seo/SEO";
import Script from "next/script";

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
      <head>
        <link rel="shortcut icon" href="/sebeico.png" type="image/x-icon" />
         {/* Google Analytics */}
         <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TWWC4KFJPK`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TWWC4KFJPK', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="inter">
        <SEO
          title="Sebe S"
          description="a Passionate web developer and Tech Enthusiast who interest on coding and eager to learn develop Web Applications and Software using Javascript programming language . I'm a fresher and I can adapt various tech environments and perform collaborative works and scalable projects , this project is one of my full-stack projects built with Next.js, Node.js, Tailwind CSS, MongoDB, and more."
          keywords="Portfolio, portfolio, sebpage , sebe2k04, trend, developer , nandha college of technology, sebe saravanan , sebe s, Next.js, Node.js, Full-Stack, Web Development, MongoDB, Tailwind CSS , sebe, sebe2k04,full stack project , ecommerce , genrio"
          image="/profile.png"
          author="sebe2k04"
          url={process.env.NEXT_PUBLIC_CLIENT_URL}
        />
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
        <HireIcon />
      </body>
    </html>
  );
}
