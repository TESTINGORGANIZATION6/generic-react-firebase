import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <div className='contactBox'>
      <Row className="justify-content-md-center p-3 m-0">
        {/* <Col xs className="mailimg" lg="6">
        </Col> */}
        <Col xs lg="5">
          <h2 className="text-center title">Contact Us</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />        
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Query</Form.Label>
              <Form.Control as="textarea" rows="3" />
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
