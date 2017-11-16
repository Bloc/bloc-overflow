import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import OtherPage from './OtherPage'
import QuestionRead from './QuestionRead'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      questions: []
    }
    this.getData = this.getData.bind(this)
    this.getQuestions = this.getQuestions.bind(this)
    this.getQuestion = this.getQuestion.bind(this)
  }
  componentDidMount () {
    this.getQuestions()
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getData () {
    this.fetch('api/')
      .then(data => {
        this.setState({data: data})
      })
  }

  getQuestions () {
    this.fetch('/api/questions')
      .then(questions => {
        this.setState({questions: questions})
      })
  }

  getQuestion (id) {
    this.fetch(`api/questions/${id}`)
      .then(question => this.setState({question: question}))
  }

  render () {
    let data = this.state
    return data
    ? <Container className="app">
        <Route exact path='/' render={() => (
          <HomePage
            questions = { this.state.questions }
          />
        )}/>
        <Route path='/other' render={() => (
          <OtherPage />
        )}/>
        <Route path='/questions/:id' render={() => (
          <QuestionRead
            question = { this.state.question }
          />
        )}/>
      </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  }
}

export default App
