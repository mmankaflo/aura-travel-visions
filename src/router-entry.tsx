import { QueryClient } from "@tanstack/react-query";
import { Router, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();
const router = new Router({ routeTree, context: { queryClient } });

export default function App() {
  return <RouterProvider router={router} context={{ queryClient }} />;
}
