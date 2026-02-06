import { Container, Nav, Navbar, NavDropdown, Image, Dropdown, NavItem } from "react-bootstrap";

const Header = function () {
  return (
    <header>
      <Navbar expand="lg" bg="black" variant="dark">
        <Container fluid className="px-lg-4">
          <Navbar.Brand className="navbar-brand" href="#">
            <Image src="src\assets\netflix_logo.png" alt="Netflix logo" width="100" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="gap-2">
              <Nav.Link active href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#link">TV Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            <Nav className="flex-column flex-lg-row align-items-lg-center gap-2 ms-lg-auto">
              <NavItem className="d-none d-lg-block">
                <i className="bi bi-search p-2"></i>
              </NavItem>
              <NavItem className="d-none d-lg-block">Kids</NavItem>
              <NavItem className="d-none d-lg-block">
                <i className="bi bi-bell-fill p-2"></i>
              </NavItem>

              <NavDropdown title="Profile" id="basic-nav-dropdown" className="mt-5 mt-lg-0 w-25 mx-lg-2">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Billing</NavDropdown.Item>
              </NavDropdown>
              <Image src="src\assets\avatar.png" width={30} className=" rounded-circle" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <!-- Fine Navbar --> */}

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
