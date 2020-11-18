import React, { Component } from 'react'
import Button from "../stories/Button"

export default class info extends Component {
    
      
    render() {
        
        return (
            <div>
             {this.props.quote}   
            </div>
            
        )
    }
}
