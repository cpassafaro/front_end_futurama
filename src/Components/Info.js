import React, { Component } from 'react'

export default class info extends Component {
    constructor(){
        super()    
        this.state = {
          display: "none"
        }
      }
    showQuote = () => {
        if (this.state.display == "none") {this.setState({display:"block"}) } else {this.setState({display:"none"})}
      
      console.log(this.state.display)
      } 
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
