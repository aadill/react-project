import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";
import "./navbar.css";
// import {Button} from './button';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;

    :hover {
      color: #d78416;
    }
    font-family: "Nunito Sans", sans-serif;
    line-height: 2;
  }
  .navbar-nav {
    align-items: center;
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <img src={logo} className="header_logo" />
      <Navbar.Brand href="/" className="navbar-head">BRAND NAME</Navbar.Brand>
      <div className="box-1">
            <div className="btn btn-one">
              <span>
              <i class="fas fa-qrcode"></i>
              </span>
            </div>
          </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-uppercase">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/contact">Conatct</Nav.Link>
          <Nav.Link href="/con">Products</Nav.Link>
          <Nav.Link href="/">
            Cart
            <i className="fa fa-shopping-cart ml-2" />
          </Nav.Link>
          {/* <Button buttonStyle="btn--primary">Scan QR</Button> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
