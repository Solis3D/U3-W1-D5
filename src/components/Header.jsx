import { Container, Nav, Navbar, NavDropdown, Image, Dropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <header>
      <section className=" d-md-flex justify-content-between align-items-center gap-4 my-3">
        <Container fluid className="d-flex align-items-center gap-4 px-3">
          <h2 className=" fs-2">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic" className="bg-black border border-light-subtle border-2 rounded-0 text-white fw-bold">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Thriller</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sci-FI action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </section>
    </header>
  );
};

export default Header;
