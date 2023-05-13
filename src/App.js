import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./components/rootEelement/RootEelement";
import Home from "./pages/home/Home";
import Avatar, { loader as fetchAvatarData } from "./pages/avatar/Avatar";
import ErrorPage from "./pages/errorPage/ErrorPage";
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";
import FavoriteMovies from "./pages/favoriteMovies/FavoriteMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/avatar", element: <Avatar />, loader: fetchAvatarData },
      {
        path: "/:movieId",
        element: <MovieDetailPage />,
      },
      { path: "fav-movies", element: <FavoriteMovies /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
