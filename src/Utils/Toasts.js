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
      style: {
        bacground: "#aaaa",
        border: "2px solid  #0b64eb",
      },
      duration: 1800,
    }
  );
};

export const sameMovieToast = (movieTitle) => {
  toast.error(
    <ToastMessage movieTitle={movieTitle} message="exists on your list" />,
    {
      iconTheme: {
        primary: "#f3a30f",
        secondary: "#fff",
      },
      style: {
        border: "2px solid #f3a30f",
      },
      duration: 1800,
    }
  );
};

export const removeMovieToast = (movieTitle) => {
  toast.error(
    <ToastMessage movieTitle={movieTitle} message="removed from your list" />,
    {
      iconTheme: {
        primary: "#c50000",
        secondary: "#fff",
      },
      style: {
        border: "2px solid #c50000",
      },
      duration: 1800,
    }
  );
};
