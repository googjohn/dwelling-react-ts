import { createBrowserRouter } from "react-router";
import { Suspense } from "react";

import RootLayout from "./layout";
import Home from "@/pages/home";
import Featured from "@/sections/featured";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import { Loader } from "lucide-react";
import ErrorPage from "@/segments/error";
import Services from "@/sections/services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/featured",
        element: (
          <Suspense fallback={<div className="h-svh w-full text-accent border flex justify-center items-center bg-(--bg) gap-5"><Loader /> Loading...</div>}>
            <Featured />
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <About />
            <Services />
            <Contact />
          </>
        )
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
])