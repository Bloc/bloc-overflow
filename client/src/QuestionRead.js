import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class QuestionRead extends Component {
  render() {
    return (
        <Container>
          <h1>{this.props.question.title}</h1>
          <p>{this.props.question.description}</p>
        </Container>
    )
  }
}

export default QuestionRead
