import { Container, Nav, Navbar, NavDropdown, NavItem, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = function () {
  const location = useLocation();
  return (
    <Navbar expand="lg" bg="black" variant="dark">
      <Container fluid className="px-lg-4">
        <Navbar.Brand className="navbar-brand" href="#">
          <Image src="../src/assets/netflix_logo.png" alt="Netflix logo" width="100" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-2">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
            <Link to="/TVShows" className={location.pathname === "/TVShows" ? "nav-link active" : "nav-link"}>
              TV Shows
            </Link>
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
  );
};

export default MyNavbar;
