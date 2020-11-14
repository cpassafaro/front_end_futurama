import React ,{useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';


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

  const [newAge, setNewAge] = useState("")


  function handleEdit(age){
    console.log(newAge)
    fetch("https://futurama-project.herokuapp.com/characters/" + age ,{

        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            status: newAge
        })

    })
        .then(res => res.text())
        .then(res => console.log(res))
   

}


function handleChange(e){
    setNewAge(e.target.value)

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
                <Card>{console.log(card.picUrl)}
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
                  <TextField placeholder={card.age}  onChange={handleChange} />
                    <Button onClick= {()=> handleEdit(card.age)} size="small" color="primary">
                      Edit Age

                    </Button>
                    <Button size="small" color="primary">
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
