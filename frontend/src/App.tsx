import { RouterProvider } from "react-router/dom";
import { router } from "./layout/routerConfig";
import "./App.css";

export default function App() {
  return <RouterProvider router={router} />
}