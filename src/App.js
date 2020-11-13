import React, {Component} from 'react';
import axios from 'axios';
import { Card, CircularProgress } from "@material-ui/core/";
import { Route, Link, Redirect } from "react-router-dom";
import CreateCharacters from './Components/CreateCharacter';
import Header from './stories/Header';
import './App.css';
import MediaCard from "./stories/Card"

class App extends Component{
  constructor(){
    super()

    this.state = {
      characters:"",
      isLoading:true,
      quotes: ''
    }
  }
  componentDidMount(){
    //do api call in here and then change from isloading to false.
    console.log('mounted')
    let url = "https://futurama-project.herokuapp.com/characters";
    let urlQuotes = "https://futurama-project.herokuapp.com/quotes";

    axios.get(url)
      .then((res) => {
        return res
      })
      .then((future) => {
        this.setState({characters: future})
      })

    axios.get(urlQuotes)
      .then((res) => {
        return res
      })
      .then((quotesData) => {
        this.setState({quotes: quotesData, isLoading:false})
      })

  }

  render(){
    // console.log(this.state.characters)
    // console.log(this.state.quotes)
    //put if else statement here to see if components are still loading
    //use the one from front-end api project
    if(this.state.isLoading == true){
      return(<CircularProgress/>)
    }else{
    return(
    
    <div>
      <nav>
        <Link to="/create"></Link>
      </nav>
      <main>
        <Header/>
        <Route path='/create' component={CreateCharacters}/>

     </main>

     <div> 

     {
       this.state.characters.length !==0 
       ?
       <MediaCard quotes={this.state.quotes} characters={this.state.characters}/> 
     : null 
     }

     </div>






    </div>
    

    )}
  }
}

export default App;

