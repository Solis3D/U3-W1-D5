import { Component, createRef } from "react";
import { Row, Col, Container, Spinner, Button } from "react-bootstrap";
import MyCard from "./MyCard";

const filmURL = "https://www.omdbapi.com/?apikey=4ba7697&s=";

class RowSection extends Component {
  state = {
    films: [],
    isLoading: true,
  };

  rowRef = createRef();

  scrollLeft = () => {
    this.rowRef.current.scrollBy({ left: -300.16, behavior: "smooth" });
  };

  scrollRight = () => {
    this.rowRef.current.scrollBy({ left: 300.16, behavior: "smooth" });
  };

  getFilms = () => {
    fetch(filmURL + this.props.search)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((filmsFromDB) => {
        // console.log(filmsFromDB.Search);
        this.setState({
          films: filmsFromDB.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    // console.log("Parte ComponentDidMount");

    this.getFilms();
  }

  render() {
    return (
      <Container fluid className=" mt-3 mb-5">
        <div className=" d-flex justify-content-between align-items-center">
          <h4>{this.props.title}</h4>

          <div className=" d-none d-lg-flex gap-2">
            <Button variant="dark" className="px-2" onClick={this.scrollLeft}>
              <i className="bi bi-caret-left" />
            </Button>
            <Button variant="dark" className="px-2" onClick={this.scrollRight}>
              <i className="bi bi-caret-right" />
            </Button>
          </div>
        </div>

        <div className=" position-relative my-3">
          <Row ref={this.rowRef} className=" gx-3 align-items-center flex-nowrap overflow-x-auto p-3 scroll bg-custom z-n1">
            {this.state.isLoading
              ? Array.from({ length: 6 }).map((ph, i) => (
                  <Col key={i} xs={6} md={4} lg={2} className=" d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </Col>
                ))
              : this.state.films.map((film, i) => <MyCard key={`${film.imdbID}-${i}`} imgSrc={film.Poster} title={film.Title} year={film.Year} />)}
          </Row>
        </div>
      </Container>
    );
  }
}

export default RowSection;
