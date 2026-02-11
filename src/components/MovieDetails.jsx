import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Image } from "react-bootstrap";

const filmURL = "https://www.omdbapi.com/?apikey=4ba7697&i=";

const MovieDetails = function () {
  const params = useParams();

  const [choosenMovie, setChoosenMovie] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  //   console.log("Oggetto Params", params);

  useEffect(() => {
    fetch(filmURL + params.movieID)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((filmFromDB) => {
        console.log("FILM:", filmFromDB);
        setChoosenMovie(filmFromDB);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("Errore", err);
        setisLoading(false);
      });
  }, [params.movieID]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && choosenMovie && (
        <Row className=" justify-content-center my-5">
          <Col xs={12} md={6} className="bg-black d-flex flex-column align-items-center px-3 py-2">
            <h1 className=" display-3 align-self-start">{choosenMovie.Title}</h1>
            <Image fluid src={choosenMovie.Poster} className="my-5"></Image>
            <div className="my-3 align-self-start">
              <div className="bg-dark p-2 mb-3">
                <h5>Info:</h5>
                <p className=" fs-5">Release Date: {choosenMovie.Released}</p>
                <p className=" fs-5">Genre: {choosenMovie.Genre}</p>
                <p className=" fs-5">Director: {choosenMovie.Director}</p>
                <p className=" fs-5">Country: {choosenMovie.Country}</p>
                <p className=" fs-5">Cast: {choosenMovie.Actors}</p>
                <p className=" fs-5">Rating: {choosenMovie.imdbRating}</p>
              </div>
              <p className="fs-5">Plot: {choosenMovie.Plot}</p>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};
export default MovieDetails;
