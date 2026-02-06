import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/Header";
import MyMain from "./components/MyMain";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 body-bg">
      <Header />

      <MyMain />

      <Footer />
    </div>
  );
}

export default App;
