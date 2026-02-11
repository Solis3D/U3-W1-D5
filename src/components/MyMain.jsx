import { Container } from "react-bootstrap";
import RowSection from "./RowSection";
import Header from "./Header";

const MyMain = function () {
  return (
    <>
      <Header />
      <Container fluid className=" flex-grow-1">
        <RowSection title="Trending Now" search="Alien" />
        <RowSection title="Watch It Again" search="Harry Potter" />
        <RowSection title="New Releases" search="Rocky" />
      </Container>
    </>
  );
};

export default MyMain;
