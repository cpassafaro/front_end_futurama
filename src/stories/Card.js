import React, { useState } from "react";
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import "./card.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  // console.log(props.characters.data)

  const [newPlanet, setNewPlanet] = useState("");

  function handleEdit(nameText) {
    console.log(newPlanet);
    fetch("https://futurama-project.herokuapp.com/characters/planet/" + nameText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        planet: newPlanet,
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res)
        props.rerenderParentCallback()
      });
      
  }


  function handleChange(e) {
    setNewPlanet(e.target.value);
  }

  function deleteButton(name) {
    console.log(name)
    // alert(`Are you sure you want to delete ${name}`)
        axios.delete(`https://futurama-project.herokuapp.com/characters/delete/${name}`)
            .then((res) => {
                console.log(res)
            })
  }

    function getQuotes(props) {
      let quoteList=[]
      quoteList.push(props.quotes.data)
      const quote = quoteList.filter(props.quotes.data.name);
      console.log(quoteList)
    }
    
    
  return (
    <div className="teo">
      <div className="hi">{console.log(props.characters.data)}</div>
      <Grid
        container
        display="grid"
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {props.length !== 0
          ? props.characters.data.map((card) => (
              <div className="hi">
                <Card>
                  {console.log(card.picUrl)}
                  <CardActionArea>
                    <CardMedia
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
                    <Button size="small" color="primary" onClick={() => deleteButton(card.name)}>
                      Delete Character
                    </Button>
                    <Button size="small" color="primary">
                      Show Quote
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))
          : null}
      </Grid>
    </div>
  );
}
