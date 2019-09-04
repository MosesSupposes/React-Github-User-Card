import React, { Component } from 'react'

export default class SearchForm extends Component  {
    state = {
        username: ''
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchUser(this.state.username)
        this.setState({username: ''})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <button type="submit">🔍</button>
            </form>
        )
    }
}