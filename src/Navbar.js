import React, { useState } from "react";
import {
  Button,
  Collapse,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const routes = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "Why us?", href: "#" },
  { name: "How It Works", href: "#" },
];

const NavMenu = ({ routes, children }) => (
  <Nav className="mx-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
    {children}
    {routes.map((route, i) => (
      <Nav.Item key={i}>
        <Nav.Link href={route.href}>{route.name}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  children: PropTypes.node,
};

const NavMenu2 = ({ toggleSearch }) => (
  <Nav className="flex-row mb-2 mb-lg-0">
    <Nav.Item className="nav-item me-2">
      <Button variant="light" className="px-3">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    </Nav.Item>
    <Nav.Item className="nav-item">
      <Button
        variant="light"
        className="px-3"
        type="button"
        onClick={toggleSearch}
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </Nav.Item>
  </Nav>
);

NavMenu2.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
};

const SearchForm = () => (
  <Form className="mt-4">
    <InputGroup>
      <Form.Control type="search" placeholder="City, Address, Zip" />
      <Button variant="" className="ezy__nav5-btn px-3" type="submit">
        Search
      </Button>
    </InputGroup>
  </Form>
);

const Navigation5 = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const toggleSearch = () => setIsOpenSearch(!isOpenSearch);

  return (
    <div className="ezy__nav5 light">
      <Navbar expand="lg" className="flex-column py-3">
        <Container>
          <Navbar.Brand href="/" className="p-4 " style={{ display: "flex " }}>
            <img
              src="https://unsplash.com/assets/core/logo-black-ddbdd505b663faadbc1e1731369f0929b2616886cb1d7fe11237c473bba02a50.svg"
              className=" mx-auto d-block"
              alt="..."
            />
            <h6 className="mt-2 " style={{ marginLeft: "20px" }}>
              Unsplash Developers
            </h6>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="ezy__nav5-navbar-nav">
            <span>
              <span />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="ezy__nav5-navbar-nav">
            <NavMenu routes={routes} />
          </Navbar.Collapse>
        </Container>
        <Container>
          <Collapse in={isOpenSearch} className="w-100">
            <div>
              <SearchForm />
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation5;
