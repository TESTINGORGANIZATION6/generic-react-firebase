import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Template = () => {
  return (
    <Jumbotron fluid className="bg-primary templateBox">
      <Container className="text-white">
        <h1 className="text-center">Join Hexovo</h1>
        <div className="border-top my-4"></div>
        <h4 className="text-center">
          Web Design-Software Development-Crazy Enthusiasm
        </h4>
      </Container>
    </Jumbotron>
  )
}

export default Template
