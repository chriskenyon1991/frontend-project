import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import Articles from './components/articles';
import Header from './components/header'
import SideBar from './components/sideBar'
import Login from './components/login'
// import Topics from './components/topics'

class App extends React.Component{

  state = {
    username: 'guest'
  }

  callbackFunction = (childData) => {
    this.setState(childData)}
 

  render() {
    console.log(this.state)
    return <div className="App">
      <Header username={this.state.username}/>
      <SideBar parentCallback = {this.callbackFunction}/>
      <Router>
        <Login parentCallback = {this.callbackFunction} path='/login'/>
        <Articles path='/' />
        <Articles path='/articles/:article_id'/>
        <Articles path='/articles/topic/:slug'/>
        <Articles path='/articles/author/:username'/>
      </Router>
    
      </div>
  }
}

export default App;
