import React from 'react'
import './App.css'
import UserCard from './components/UserCard'
import SearchForm from './components/SearchForm'

export default class App extends React.Component {
  state = {
    followers: [],
    searchedUser: ''
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.username}/followers`)
    .then(res => res.json())
    .then(res => {
      this.setState({followers: res})
    })
  }

  searchUser = (username) => {
    this.setState({searchedUser: username })
  }


  
  render() {
    return (
      <>
      <SearchForm searchUser={this.searchUser} />

      <main className="App">
        {/* UserCard for the user that was searched for (if any) */}
        {this.state.searchedUser && <UserCard username={this.state.searchedUser} />}

        {/* UserCard for the user this app is centered around*/}
        <UserCard username={this.props.username} /> 

        {/* UserCards for the main user's followers */}
        {this.state.followers.map(function renderFollowers(follower, i) {
          return <UserCard key={i} username={follower.login} />
        })}
      </main>
      </>
    )
  }      
}


