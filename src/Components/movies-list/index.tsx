import React from 'react'
import { Box, Grid, Paper } from '@mui/material';
import { MovieDataType } from '../../assets/data';
import MovieCard from '../movie-cards';

interface MovieListProps {
    recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {

    console.log("The recommended List is : ", recommendList);
    return (
        <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }}>

            {recommendList.map((movie) => (
                <Grid item key={movie.id}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                        <MovieCard movie={movie} />
                    </Paper>
                </Grid>
            ))}
        </Box>
    )
}

export default MovieList