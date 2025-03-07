import toast from "react-hot-toast";

export const addMovieToast = (movieTitle) => {
  toast.success(
    <span>
      <strong
        style={{ color: "#0b64eb", width: "max-content" }}
      >{`"${movieTitle}"`}</strong>
      added to your list
    </span>,
    {
      style: {
        border: "1px solid #0b64eb",
        color: "#fff",
        background: "#000000e6",
        fontSize: "1.3rem",
      },
      iconTheme: {
        primary: "#0b64eb",
        secondary: "#000000",
      },
      duration: 1800,
    }
  );
};

export const sameMovieToast = (movieTitle) => {
  toast.success(
    <span>
      <strong
        style={{ color: "#0b64eb", width: "max-content" }}
      >{`"${movieTitle}"`}</strong>
      this movie is already on your list
    </span>,
    {
      style: {
        border: "1px solid #0b64eb",
        color: "#fff",
        background: "#000000e6",
        fontSize: "1.3rem",
      },
      iconTheme: {
        primary: "#0b64eb",
        secondary: "#000000",
      },
      duration: 1800,
    }
  );
};
