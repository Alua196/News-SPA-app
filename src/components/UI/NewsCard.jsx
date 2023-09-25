import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const NewsCard = ({ item }) => {

  var date = new Date(item.webPublicationDate);
  var formatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  var dateString = date.toLocaleDateString('en-US', formatOptions);


  return (
    <Box >
      <Grid container>
        <Grid item  >
          <Card sx={{ maxWidth: 345, marginTop: '25px', }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {dateString}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {item.webTitle}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>

        
      </Grid>
    </Box >
  );
}

export default NewsCard;
