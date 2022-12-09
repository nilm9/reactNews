import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

const New = ({newArticle}) => {
    const {urlToImage, url, title, description,source}=newArticle 
  return (
    <Grid item md={6} lg={4}>
        <Card>
            {urlToImage &&(<CardMedia component="img" alt={`Image of the article ${title}`} image={urlToImage} height={'250'} />) }
            <CardContent>
                <Typography variant="body1" color="error">{source.name}</Typography>
                <Typography variant='h5' component="div">
                    {title}

                </Typography>
                <Typography variant='body2' component="div">
                    {description}

                </Typography>
            </CardContent>

        </Card>  
    </Grid>

  )
}

export default New