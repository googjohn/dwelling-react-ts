import { Outlet, useLocation } from "react-router";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Header from "@/segments/header";

export default function RootLayout() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <Hero />}
      <main id="main-app" className="flex flex-col justify-center items-center w-full min-h-svh text-accent">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}