import "./App.css";
import Hero from "@/sections/hero";

function App() {
  return (
    <>
      <main id="main-app" className="flex flex-col justify-center items-center w-full min-h-svh bg-linear-to-b to-(--primary-color) from-logo">
        <Hero />

      </main>
    </>
  )
}

export default App
