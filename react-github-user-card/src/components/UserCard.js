import React, { Component } from 'react'

export default class UserCard extends Component {
    state = {
        login: '',
        avatar_url: '',
        bio: '',
        followers: 0,
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.username}`)
        .then(res => res.json())
        .then(res => {
            this.setState({...res})
        })
    }

    
    render() {
        return (
            <div className="App">
              <h2>{this.state.login}</h2>
              <img src={this.state.avatar_url} />
              <p>bio: {this.state.bio}</p>
              <span>Followers: {this.state.followers}</span>
            </div>
          )
    }
}