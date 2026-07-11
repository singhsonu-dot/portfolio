import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      }, 
      {
        path: "/skills",
        element: <Skills/>,
      }, 
      {
        path: "/project",
        element: <Project/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  }, 
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App 