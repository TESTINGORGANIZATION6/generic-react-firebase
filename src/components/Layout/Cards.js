import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Cards = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card bg="success" text="white" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Subtitle className="mb-2">
                Develop beautiful website
              </Card.Subtitle>
              <Card.Text>
                We build as you like. There are three responses to a piece of
                design – yes, no, and WOW! Wow is the one to aim for.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="danger" text="white" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Software Development</Card.Title>
              <Card.Subtitle className="mb-2">Software you enjoy</Card.Subtitle>
              <Card.Text>
                Make things as simple as possible, but not simpler. Software and
                cathedrals are much the same – first we build them, then we pray
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="warning" text="white" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Crazy Enthusiasm</Card.Title>
              <Card.Subtitle className="mb-2">Grow each day</Card.Subtitle>
              <Card.Text>
                Technology over technique produces emotionless design.The only
                strategy that is guaranteed to fail is not taking risks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cards
