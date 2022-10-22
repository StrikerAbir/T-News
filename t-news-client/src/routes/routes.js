import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Profile from "../pages/Others/Profile/Profile";
import TermsAndConditions from "../pages/Others/TermsAndConditions";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://t-news-server.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => {
          return fetch(
            `https://t-news-server.vercel.app/category/${params.id}`
          );
        },
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://t-news-server.vercel.app/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
