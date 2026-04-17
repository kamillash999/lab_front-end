import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import {courses} from "./data/data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      {
        path:"courses/:id",
        element: <CourseDetail />,
        errorElement: <p>Course not found</p>,
        loader: async ({params}) => {
            const course = courses.find(c => c.id === Number(params.id));
            if (!course) throw new Error("Not Found");
            return {course};
        }
      },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);