import React from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Query</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactUs
