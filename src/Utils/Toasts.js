import toast from "react-hot-toast";
import ToastMessage from "../components/UI/ToastMessage";

export const addMovieToast = (movieTitle) => {
  toast.success(
    <ToastMessage
      movieTitle={movieTitle}
      message="added to your list"
      type="success"
    />,
    {
      iconTheme: {
        primary: "#0b64eb",
        secondary: "#000000",
      },
      duration: 1800,
    }
  );
};

export const sameMovieToast = (movieTitle) => {
  toast.error(
    <ToastMessage
      movieTitle={movieTitle}
      message="exists on your list"
      type="warning"
    />,
    {
      iconTheme: {
        primary: "#0b64eb",
        secondary: "#000000",
      },
      duration: 1800,
    }
  );
};

export const removeMovieToast = (movieTitle) => {
  toast.error(
    <ToastMessage
      movieTitle={movieTitle}
      message="removed from your list"
      type="remove"
    />,
    {
      iconTheme: {
        primary: "#0b64eb",
        secondary: "#000000",
      },
      duration: 1800,
    }
  );
};
