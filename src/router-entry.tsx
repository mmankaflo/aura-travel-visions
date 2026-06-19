import { Router, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen"; // adjust if your routes are in a different file

const router = new Router({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
