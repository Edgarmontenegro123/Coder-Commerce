import React from 'react'
import {makeStyles, Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'
import AddToCart from '../AddToCart/AddToCart'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '3rem',
    color: 'whitesmoke',
    backgroundColor: /* 'rgb(27, 27, 27, 0.5)' */ 'rgb(90, 90, 90, 0.3)'
  },
  media: {
    height: 140
  }
})

export default function ItemList({items}){
  const classes = useStyles()

  return(
    <div style = {{display: 'flex'}}>
        {items.map(i => <Grid container> 
            <Grid item xs = {12}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image='/static/images/cards/contemplative-reptile.jpg'
                    title={i.name}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                    {i.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div style = {{backgroundColor: 'rgb(27, 27, 27)', color: 'whitesmoke', textAlign: 'center', paddingBottom: '2rem'}}><AddToCart /></div>
        </Card>
        </Grid>
        </Grid>)}
      </div>
  )
}