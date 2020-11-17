import React, { Component } from 'react'
import Button from "../stories/Button"

export default class info extends Component {
    constructor(props){
        
        super()    
        this.state = {
          display: "block"
        }
        
      }
      
    showQuote = () => {

        if (this.state.display == "none") {this.setState({display:"block"}) } else {this.setState({display:"none"})}
      
      console.log(this.state.display)
      } 
    render() {
        let divStyle1 = {display:`${this.state.display}`}
        return (
            <div>
            {/* <button size="small" color="primary" onClick={() => this.showQuote()}> */}
            {/* Show Quote</button> */}
            <div style = {divStyle1}>
             {this.props.quote}   
             </div>
            </div>
            
        )
    }
}
