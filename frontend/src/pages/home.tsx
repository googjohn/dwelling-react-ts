import About from "@/sections/about";
import Contact from "@/sections/contact";
import Featured from "@/sections/featured";
import FrequentlyAsked from "@/sections/frequentlyAskedQuestions";
import Gallery from "@/sections/gallery";
import Services from "@/sections/services";
import Subscribe from "@/sections/subscribe";

export default function Home() {
  return (
    <>
      <Gallery />
      <Featured />
      <Services />
      <Subscribe />
      <FrequentlyAsked />
      <Contact />
    </>
  )
}