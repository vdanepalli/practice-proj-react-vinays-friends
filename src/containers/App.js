import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'; 
import {friends} from '../friends';


class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      searchfield: ''
    };

    // console.log("Called constructor");
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ friends: users})});

    this.setState({friends: friends});
    // console.log('Mounting: Updated friends list');

    // this.setState({friends: []});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { friends, searchfield } = this.state;
    const filteredFriends = friends.filter(user =>{
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    // friends = {};

    return !friends.length ?
      <h1 className='tc f1'>Calling Vinay's Friends ...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Vinay's Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList friends={filteredFriends} />
          </Scroll>
        </div>
      );
  }
}

export default App;