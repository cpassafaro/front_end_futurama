import React, {Component} from 'react';
import { Button, Typography, Container, TextField } from "@material-ui/core";

export default class CreateCharacter extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            name:'',
            planet:'',
            age:'',
            image:'',
            quote:'',
            species: '',
            status: '',
            profession: ''
        }
    }

    postInput = event => {
        event.preventDefault();

        const character ={
            name: this.state.name,
            age: this.state.name,
            planet: this.state.planet,
            image: this.state.image,
            quote: this.state.quote,
            species: this.state.species,
            status: this.state.status,
            profession: this.state.profession
        }

        
    }



    pushCharacterNameToState = e => {
        let element = e.target.value;
        console.log(element)
        this.setState({name: element})
    }

    pushPlanetNameToState = e => {
        let element = e.target.value;
        this.setState({planet: element})
    }

    pushAgeToState = e => {
        let element = e.target.value;
        this.setState({age: element})
    }

    pushQuoteToState = e => {
        let element = e.target.value;
        this.setState({image: element})
    }

    pushImageToState = e => {
        let element = e.target.value;
        this.setState({quote: element})
    }

    render(){
        console.log(this.state.name)
        console.log(this.state.planet)
        console.log(this.state.age)
        console.log(this.state.image)
        console.log(this.state.quote)

        return(<Container>
            <Typography style={{display:'flex', flexDirection:'column'}}>
                <TextField type='text'placeholder='Character Name' onChange={this.pushCharacterNameToState}/>
                <TextField type='text'placeholder='Planet Name' onChange={this.pushPlanetNameToState}/>
                <TextField type='text'placeholder='Character Age' onChange={this.pushAgeToState}/>
                <TextField type='text'placeholder='Character Quote' onChange={this.pushQuoteToState}/>
                <TextField type='text'placeholder='Upload Character Image' onChange={this.pushImageToState}/>
                <TextField type='text'placeholder='Character Species' onChange={this.pushSpeciesToState}/>
                <Button variant='outlined' onClick={this.postInput}>Submit</Button>
            </Typography>
        </Container>)
    }

}
