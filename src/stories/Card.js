import React, { useState } from "react";
import axios from 'axios'
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Route, Link, Redirect } from "react-router-dom";
import Info from "../Components/Info"
import "./card.css";
import { CommunicationPhonelinkSetup } from "material-ui/svg-icons";
import noEncryption from "material-ui/svg-icons/notification/no-encryption";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
    backgroundSize: "contain"
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  
   //console.log(props)
  //console.log(props.quotes.data)


  const [newPlanet, setNewPlanet] = useState("");
  

  
  function handleEdit(nameText) {
  //  console.log(newPlanet);
    fetch("https://futurama-project.herokuapp.com/characters/planet/" + nameText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        planet: newPlanet,
      }),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
      
  }


  function handleChange(e) {
    setNewPlanet(e.target.value);
  }

  function deleteButton(id) {
    //console.log(id)
    // alert(`Are you sure you want to delete ${name}`)
        axios.delete(`https://futurama-project.herokuapp.com/characters/delete/${id}`)
            .then((res) => {
              console.log(res);
              props.rerenderParentCallback()
            })
  }


    function getQuotes(name) {
      console.log(props.quotes.data)
       let quoteList=props.quotes.data.filter(word => 
         name.includes("head") )
        let future = props.quotes.data.map(item => { if (name.includes(item.character)){return <Info {...item}></Info>} })
        //let future = props.quotes.data.map(item => { if (name.includes(item.character)){return <p>{item.quote}</p>} })
        
        console.log(future)
    
       console.log(name)
      

      return future
    }

  function showQuote (id) {
    console.log(id) 
    let selectedID = document.getElementById(id)
    console.log(selectedID.style.display)
    if (selectedID.style.display == "none"){
      selectedID.style.display = "block"
    } else {
      selectedID.style.display = "none"
    }
  }

  return (
    <div className="teo">
      <div className="hi"></div>
      {/* //{console.log(props.characters.data)} */}
      <Grid
        container
        display="flexbox"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        {props.length !== 0
          ? props.characters.data.map((card, index) => (
              <div className="hi">
                <Card>
                  {/* {console.log(card.picUrl)} */}
                  <CardActionArea>
                    <CardMedia id="images"
                      className={classes.media}
                      image={card.picUrl}
                      title="Character"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <h3> {card.name}</h3>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <p> Planet: {card.planet} </p>
                        <p> Age:{card.age} </p>
                        <p> Status: {card.status}</p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <TextField placeholder={card.planet} onChange={handleChange} />
                    <Button
                      onClick={() => handleEdit(card.name)}
                      size="small"
                      color="primary"
                    >
                      Edit Planet
                    </Button>
                    <Button size="small" color="primary" onClick={() => deleteButton(card._id)}>
                      Delete Character
                    </Button>
                    <Button size="small" color="primary" onClick={() => showQuote(index)}>
                      Show Quotes
                    </Button>       
                  </CardActions>
                  <div className="quote" id={index} style={{display:"none"}}>
                    {getQuotes(card.name)}
                    </div>
                </Card>
              </div>
            ))
          : null}
      </Grid>
    </div>
  );
}
