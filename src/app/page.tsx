import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Social from "@/components/Social";
import About from "@/components/About";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Social/>
      <About/>
      <Projects/>
    </>
  );
}
