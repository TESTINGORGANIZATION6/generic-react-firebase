import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Cards = () => {
  return (
    <Container className='cardContainer'>
      <Row>
        <Col>
          <Card  className="cardview" style={{ width: '18rem', margin : '0 auto'}}>
            <Card.Body className="box">
              <div className='icon iconred'>
                01
              </div>
              <div className="content"> 
              <Card.Title className="p-2">Web Development</Card.Title>
              <Card.Subtitle className="mb-2 p-1">
                Develop beautiful website
              </Card.Subtitle>
              <Card.Text>
                We build as you like. There are three responses to a piece of
                design – yes, no, and WOW! Wow is the one to aim for.
              </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card  className="cardview"  style={{ width: '18rem', margin : '0 auto'}}>
            <Card.Body className="box">
            <div className='icon icongreen'>
                02
              </div>
              <div className="content"> 
              <Card.Title className="p-2">Software Development</Card.Title>
              <Card.Subtitle className="mb-2 p-1">Software you enjoy</Card.Subtitle>
              <Card.Text>
                Make things as simple as possible, but not simpler. Software and
                cathedrals are much the same – first we build them, then we pray
              </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card  className="cardview"  style={{ width: '18rem', margin : '0 auto'}}>
            <Card.Body className="box">
            <div className='icon iconblue'>
                03
              </div>
              <div className="content"> 
              <Card.Title className="p-2">Crazy Enthusiasm</Card.Title>
              <Card.Subtitle className="mb-2 p-1">Grow each day</Card.Subtitle>
              <Card.Text>
                Technology over technique produces emotionless design.The only
                strategy that is guaranteed to fail is not taking risks.
              </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cards
