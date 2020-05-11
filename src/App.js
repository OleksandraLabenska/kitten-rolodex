//jshint esversion:6
import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchField} from './components/seach-field/search-filed.component';
import "./App.css";


class App extends Component {

  constructor(){
    super();

    this.state={
      monsters:[],
      searchField: ""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>this.setState({monsters:users}));
  }

  handleChange = event => {
    this.setState({searchField: event.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchField 
      handleChange={this.handleChange}
      placeholder="search monster"
    />
    <CardList 
      monsters={filteredMonsters}
    />
    </div>
    );
  }
}


export default App;
