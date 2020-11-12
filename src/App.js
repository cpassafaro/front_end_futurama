import React, {Component} from 'react';
import axios from 'axios';
import { CircularProgress } from "@material-ui/core/";
import { Route, Link, Redirect } from "react-router-dom";
import Header from './Header/Header';
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
    console.log('mounted')
    let url = "";
    axios.get(url)
      .then((res) => {
        return res
      })
      .then((future) => {
        this.setState({data: future, isLoading:false})
      })

  }

  render(){
    //put if else statement here to see if components are still loading
    //use the one from front-end api project
    if(this.state.isLoading == true){
      return(<CircularProgress/>)
    }else{
    return(<div></div>

    )}
  }
}

export default App;