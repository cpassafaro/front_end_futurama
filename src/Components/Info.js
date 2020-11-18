import React, { Component } from 'react'
import Button from "../stories/Button"

export default class info extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
      
    render() {
        
        return (
            <div className="quote">{this.props.quote}</div>
            
        )
    }
}
