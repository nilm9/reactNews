import React from 'react'
import { Grid, Typography } from '@mui/material'
import useNews from '../hooks/useNews'
import New from './New'

const NewsList = () => {
    const { news} = useNews()
    console.log(news);
  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={1}
            variant='h3'
            component={'h2'}
        >
            Latest news
        </Typography>
        <Grid container spacing={2}>
            {news.map(newArticle=> (
                <New newArticle={newArticle} key={newArticle.url}/>
            ))}
        </Grid>
   
    </>
     ) 
}

export default NewsList