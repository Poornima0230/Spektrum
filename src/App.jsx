import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./pages/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        // errorElement:<Error/>
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
