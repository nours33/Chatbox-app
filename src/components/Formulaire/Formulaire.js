import React, { Component } from 'react'

import './Formulaire.css'

class Formulaire extends Component {

    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)
        //RESET
        this.setState({ message: '', length })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.message !== '' ) {
            this.createMessage()
        }
    }

    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    render() {
        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
            >

                <textarea
                    onChange={this.handleChange}
                    value={this.state.message}
                    maxLength={this.props.length}
                />
                <div className="info">
                    {this.state.length}
                </div>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        )
    }
}

export default Formulaire