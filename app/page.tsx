import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Portafolio from "@/components/Portafolio";


export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Portafolio />
      <Contact />
      <Footer />
    </main>
  );
}
