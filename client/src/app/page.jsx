import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
      <Skills/>
    </main>
  );
}
