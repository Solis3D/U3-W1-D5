import { Container } from "react-bootstrap";
import RowSection from "./RowSection";

const MyMain = function () {
  return (
    <Container fluid className=" flex-grow-1">
      <RowSection title="Trending Now" search="Star Wars" />
      <RowSection title="Watch It Again" search="Harry Potter" />
      <RowSection title="New Releases" search="Avatar" />
    </Container>
  );
};

export default MyMain;
