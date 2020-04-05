import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <div className="contactBox">
      <Row className="justify-content-md-center p-3 m-0">
        {/* <Col xs className="mailimg" lg="6">
        </Col> */}
        <Col xs lg="5">
          <h2 className="text-center title">Contact Us</h2>
          <Form>
            <Form.Group controlId="formBasicEmail" className="inputbox">
              <Form.Control type="text" required="required" />
              <Form.Label className="text">Name</Form.Label>
              <span className="line"></span>
            </Form.Group>
            <Form.Group className="inputbox">
              <Form.Control type="email" required="required" />
              <Form.Label className="text">Email</Form.Label>
              <span className="line"></span>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="inputbox textarea"
            >
              <Form.Control as="textarea" rows="3" required="required" />
              <Form.Label className="text">Your Query</Form.Label>
              <span className="line"></span>
            </Form.Group>
            <Button className="submitBtn" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default ContactUs
