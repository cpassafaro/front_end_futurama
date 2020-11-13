import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './card.css'

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

  return (

    <div className="teo">
      <div className="hi">{console.log(props.characters.data)}</div>
      {

        props.length !== 0
          ?

          props.characters.data.map((card) =>
            <div className="hi">
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card>

                  <CardActionArea>
                    <CardMedia
                    // className={classes.media}

                    // title="Character"

                    />
                    
                    {card.picURL}
                    <CardContent>

                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        <p> Planet: {card.planet}</p>
                        <p> Age: {card.age}</p>
                        <p> Status:{card.status} </p>

                      </Typography>
                    </CardContent>

                  </CardActionArea>

                  <CardActions>
                    <Button size="small" color="primary">
                      Edit Character
        </Button>
                    <Button size="small" color="primary">
                      Delete Character
        </Button>

                    <Button size="small" color="primary">
                      Show Quote
        </Button>



                  </CardActions>


                </Card>
              </Grid>
            </div>


          )
          : null

      }

    </div>



  );
}
