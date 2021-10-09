import React, { Component } from 'react'
import './App.css'

import Message from '../Message/Message'
import Formulaire from '../Formulaire/Formulaire'

//Firebase
import base from './../../base'



class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  isUser = pseudo => pseudo === this.state.pseudo


  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  render() {

    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <Message
          key={key}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
        />
      ))


    return (
      <div className='app'>
        <div className="container">
          <div className="messages">
              {messages}
          </div>
          <div className="formulaire">
            <Formulaire
              length={140}
              pseudo={this.state.pseudo}
              addMessage={this.addMessage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
