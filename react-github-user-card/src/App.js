import React from 'react'
import './App.css'
import UserCard from './components/UserCard'

export default class App extends React.Component {
  state = {
    followers: []
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.username}/followers`)
    .then(res => res.json())
    .then(res => {
      this.setState({followers: res})
    })
  }
  
  render() {
    return (
      <main>
        {/* UserCard for the user this app is centered around*/}
        <UserCard username={this.props.username} /> 

        {/* UserCards for the main user's followers */}
        {this.state.followers.map(function renderFollowers(follower, i) {
          return <UserCard key={i} username={follower.login} />
        })}
      </main>
    )
  }      
}


