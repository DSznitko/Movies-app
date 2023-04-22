import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./components/rootEelement/RootEelement";
import Home from "./pages/home/Home";
import Avatar from "./pages/avatar/Avatar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/avatar", element: <Avatar /> },
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
