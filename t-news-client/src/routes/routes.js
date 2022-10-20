import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:1000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => {
          return fetch(`http://localhost:1000/category/${params.id}`);
        },
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({params}) => fetch(`http://localhost:1000/news/${params.id}`),
      },
    ],
  },
]);