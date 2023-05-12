const useVoteColor = () => {
  const voteColor = (voteAvr) => {
    if (voteAvr < 5) {
      return "red";
    }

    if (voteAvr > 5 && voteAvr < 8) {
      return "orange";
    }

    return "green";
  };

  return { voteColor };
};

export default useVoteColor;
