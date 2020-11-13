import React, { Component } from "react";
import { Button, Typography, Container, TextField } from "@material-ui/core";
import axios from "axios";

export default class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: "",
      planet: "",
      age: "",
      image: "",
      quote: "",
      species: "",
      status: "",
      profession: "",
    };
  }

  postInput = (event) => {
    event.preventDefault();

    const character = {
      name: this.state.name,
      age: this.state.name,
      planet: this.state.planet,
      image: this.state.image,
      species: this.state.species,
      status: this.state.status,
      profession: this.state.profession,
    };

    axios
      .post("https://futurama-project.herokuapp.com/characters", character)
      .then((res) => {
        console.log(res);
        alert("success");
        // this.props.history.push('./Status/success')
        window.location.reload(false)
      })
  }

  pushCharacterNameToState = (e) => {
    let element = e.target.value;
    console.log(element);
    this.setState({ name: element });
  };

  pushPlanetNameToState = (e) => {
    let element = e.target.value;
    this.setState({ planet: element });
  };

  pushAgeToState = (e) => {
    let element = e.target.value;
    this.setState({ age: element });
  };

  pushQuoteToState = (e) => {
    let element = e.target.value;
    this.setState({ quote: element });
  };

  pushImageToState = (e) => {
    let element = e.target.value;
    this.setState({ image: element });
  };

  pushSpeciesToState = (e) => {
    let element = e.target.value;
    this.setState({ species: element });
  };

  pushStatusToState = (e) => {
    let element = e.target.value;
    this.setState({ species: element });
  };

  pushProfessionToState = (e) => {
    let element = e.target.value;
    this.setState({ profession: element });
  };

  render() {
    return (
      <Container>
        <Typography style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            className='input'
            type="text"
            placeholder="Character Name"
            onChange={this.pushCharacterNameToState}
          />
          <TextField
            className='input'
            type="text"
            placeholder="Planet Name"
            onChange={this.pushPlanetNameToState}
          />
          <TextField
            className='input'
            type="text"
            placeholder="Character Age"
            onChange={this.pushAgeToState}
          />
          <TextField
            className='input'
            type="text"
            placeholder="Upload Character Image"
            onChange={this.pushImageToState}
          />
          <TextField
            className='input'
            type="text"
            placeholder="Character Species"
            onChange={this.pushSpeciesToState}
          />
          <TextField
            className='input'
            type="text"
            placeholder="Character Status"
            onChange={this.pushStatusToState}
          />
          <TextField
            className='input'
            type="text"
            placeholder="Character Profession"
            onChange={this.pushProfessionToState}
          />
          <Button variant="outlined" onClick={this.postInput}>
            Submit
          </Button>
        </Typography>
      </Container>
    );
  }
}
