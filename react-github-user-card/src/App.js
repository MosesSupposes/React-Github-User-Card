import React from 'react'
import './App.css'

export default class App extends React.Component {
  state = {
    avatar_url: '',
    bio: '',
    followers: 0,
    login: ''
  }

  componentDidMount() {
    fetch("https://api.github.com/users/MosesSupposes")
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


