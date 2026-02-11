import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/Header";
import MyMain from "./components/MyMain";
import Footer from "./components/Footer";
import TVShows from "./components/TVShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 body-bg">
        <Header />

        <Routes>
          <Route path="/" element={<MyMain />}></Route>
          <Route path="/TVShows" element={<TVShows />}></Route>
          <Route path="/MovieDetails/:movieID" element={<MovieDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
