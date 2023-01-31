import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Badge,
  Dropdown,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl style={{ width: 250 }} placeholder="search a product" />
        </Navbar.Text>
        <Nav>
          <Dropdown className="alignright">
            <DropdownToggle variant="success">
              <FaShoppingCart color="white" fontSize="20px" />
              <Badge className="text-dark">{5}</Badge>
            </DropdownToggle>
            <DropdownMenu style={{ minWidth: 150 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
