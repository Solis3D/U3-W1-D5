import RowSection from "./RowSection";

const TVShows = function () {
  return (
    <div className="d-flex flex-column min-vh-100 body-bg">
      <h2 className="px-3 my-3">Most Popular TV Shows</h2>
      <RowSection title="Dragon Ball" search="Dragon Ball" />
      <RowSection title="Naruto" search="Naruto" />
    </div>
  );
};

export default TVShows;
