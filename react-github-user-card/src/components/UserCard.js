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
            <div className="user-card">
              <h2>{this.state.login}</h2>
              <img src={this.state.avatar_url} />
              <p><strong>bio:</strong> {this.state.bio}</p>
              <span><strong>Followers:</strong> {this.state.followers}</span>
            </div>
          )
    }
}