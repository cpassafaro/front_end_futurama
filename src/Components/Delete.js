import React, {Component} from 'react';
import axios from 'axios';

export default class Delete extends Component {
    constructor(props){
        super(props)

        this.state={
        }
    }
    deleteCharacter = e => {
        let element = e.target
        axios.delete(`https://futurama-project.herokuapp.com/characters/${element}`)
            .then((res) => {
                console.log(res)
            })
    }
    render(){
        return(<div></div>)
    }
}