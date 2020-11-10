import React, {Component} from 'react';
import axios from 'axios';
import { Route, Link, Redirect } from "react-router-dom";
import Header from './Header/Header'
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      data:"",
      isLoading:true,
    }
  }
  componentDidMount(){
    //do api call in here and then change from isloading to false.

  }

  render(){
    //put if else statement here to see if components are still loading
    //use the one from front-end api project
    return(<div></div>

    )
  }
}

export default App;
