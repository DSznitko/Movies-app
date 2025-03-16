import { createBrowserRouter } from "react-router-dom";
import {
  ErrorPage,
  MovieDetailPage,
  FavoriteMoviesPage,
  HomePage,
} from "./pages";
import RootElement from "./components/rootEelement/RootEelement";
import Avatar, { loader as fetchAvatarData } from "./pages/avatar/Avatar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/avatar", element: <Avatar />, loader: fetchAvatarData },
      {
        path: "/:movieId",
        element: <MovieDetailPage />,
      },
      { path: "fav-movies", element: <FavoriteMoviesPage /> },
    ],
  },
]);
