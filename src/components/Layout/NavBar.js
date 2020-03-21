import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Coderlust</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#feature">Features</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}

export default NavBar
