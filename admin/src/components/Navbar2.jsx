import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogin, handleLogout } from "../redux/actions/adminActions";

import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBarStyles.css";

function NavBar2() {
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("you are now logged out");
    dispatch(handleLogout());
  };

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  {isLoggedIn ? (
                    <>
                      <Nav.Link as={Link} to="/products">
                        products
                      </Nav.Link>
                      <Nav.Link as={Link} to="/category">
                        Category
                      </Nav.Link>
                      <Nav.Link as={Link} to="/cart">
                        Cart
                      </Nav.Link>
                      <Nav.Link as={Link} to="/product">
                        Add product
                      </Nav.Link>
                      <Nav.Link as={Link} to="/product/details/:id">
                        Product-details
                      </Nav.Link>
                      <Button as={Link} to="/" onClick={handleClick}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Nav.Link as={Link} to="/login" onClick={handleLogin}>
                        Login
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar2;
