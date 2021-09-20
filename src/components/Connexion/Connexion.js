import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Connexion.css'

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false,
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat: true })
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    render() {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Pseudo"
                        required
                    />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion
