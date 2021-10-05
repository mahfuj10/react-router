import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleNews from '../SingleNews/SingleNews';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-09-29&sortBy=popularity&apiKey=f5875c560b2844a29506b807f58fc054`)
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])

    return (

        news.length === 0 ? <Spinner animation="border" />
            :

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>


                    {
                        news.map(item => <Grid item xs={2} sm={4} md={4}>
                            <SingleNews news={item}></SingleNews>
                        </Grid>)
                    }

                </Grid>
            </Box>
    )
}
export default News;