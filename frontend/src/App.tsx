import "./App.css";
import Hero from "@/sections/hero";
import Header from "@/segments/header";
import Footer from "@/sections/footer";
import Contact from "@/sections/contact";
import Featured from "@/sections/featured";
import Gallery from "@/sections/gallery";
import About from "@/sections/about";
import Services from "./sections/services";

function App() {
  return (
    <>
      <Hero />
      <main id="main-app" className="flex flex-col justify-center items-center w-full min-h-svh text-accent">
        <Header />
        <Gallery />
        <Services />
        <About />
        <Featured />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
