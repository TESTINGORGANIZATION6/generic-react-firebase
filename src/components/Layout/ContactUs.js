import React, { useState } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import { sendMessage } from '../../api/slack'

const ContactUs = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    query: '',
    error: '',
    success: false
  })

  const { name, email, query, error, success } = values

  // handle change
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value })
  }

  // submit changes
  const handleSubmit = (e) => {
    e.preventDefault()

    setValues({ ...values, error: false })

    sendMessage({ name, email, query }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    })
  }

  return (
    <div className="contactBox">
      <Alert variant="success" style={{ display: success ? '' : 'none' }}>
        Thanks for your query, We will get back to you ASAP.
      </Alert>
      <Alert variant="danger" style={{ display: error ? '' : 'none' }}>
        Query submission failed!! Please try again
      </Alert>
      <Row className="justify-content-md-center p-3 m-0">
        <Col xs lg="5">
          <h2 className="text-center title tamplateHeader">Contact Us</h2>
          <Form>
            <Form.Group controlId="formBasicEmail" className="inputbox">
              <Form.Control
                type="text"
                required="required"
                onChange={handleChange('name')}
              />
              <Form.Label className="text">Name</Form.Label>
              <span className="line"></span>
            </Form.Group>
            <Form.Group className="inputbox">
              <Form.Control
                type="email"
                required="required"
                onChange={handleChange('email')}
              />
              <Form.Label className="text">Email</Form.Label>
              <span className="line"></span>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="inputbox textarea"
            >
              <Form.Control
                as="textarea"
                rows="3"
                required="required"
                onChange={handleChange('query')}
              />
              <Form.Label className="text">Your Query</Form.Label>
              <span className="line"></span>
            </Form.Group>
            <Button className="submitBtn" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default ContactUs
