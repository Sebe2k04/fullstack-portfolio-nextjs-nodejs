export const metadata = {
    title: "Projects",
    description:
      "Explore my Projects to showcase my technical capability and to ensure my expertise to endulge on real world projects",
    keywords:
      "sebe , sebe s , sebe saravanan , sebe2k04 , developer portfolio ,trending portfolio, axolotron , dnyx, software engineer , web developer , portfolio , fullstack portfolio , nandha college of technology , nandha , cse , dev , developer , mongodb , express, nodejs , reactjs , nextjs, genrio , sebe , cb , website , web, dev , engineer , techie , nct , fresher , 2025 , erode ",
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    canonical: process.env.NEXT_PUBLIC_CLIENT_URL,
    authors: [
      { name: "Sebe S", url: process.env.NEXT_PUBLIC_CLIENT_URL }
    ],
    openGraph: {
      title: "Projects",
      description:
       "Explore my Projects to showcase my technical capability and to ensure my expertise to endulge on real world projects",
      url: process.env.NEXT_PUBLIC_CLIENT_URL,
      siteName: "Sebe S - Portfolio",
      images: [
        {
          url: "https://res.cloudinary.com/ded1o1e26/image/upload/v1726405493/profile_ioufgc.png",
          width: 1200,
          height: 640,
          alt: "Sebe S | Software Engineer | Web Developer | Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
  };


export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    );
}