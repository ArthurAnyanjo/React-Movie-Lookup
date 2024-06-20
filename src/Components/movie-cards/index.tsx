import React, { useContext } from 'react'
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../Context/movie-context';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import tvSeriesIcon from '../../assets/icons/icon-category-tv.svg'
import movieIcon from '../../assets/icons/icon-category-movie.svg'
import BookmarkEmptyIcon from '../icons/bookmark-empty-icon';
import BookmarkIcon from '../icons/bookmark-icon';

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOGGLE BOOKMARK", id });
  }

  return (
    <Card variant='outlined' sx={{
      bgcolor: "transparent", color: "#E0e0e0", my: 3, border: "none"
    }}>

      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img src={movie.thumbnail.regular.large} alt="" style={{ width: "400px", height: "18 0px", borderRadius: "8px" }} />
          </Grid>

          <Grid item xs={8}>
            <Grid container spacing={1} alignContent="center">
              <Grid item>
                <Typography fontSize={10} color="#E0e0e0" aria-aria-label="year of release">{movie.year}</Typography>
              </Grid>
              <Grid item>
                <Box sx={{
                  width: "4px",
                  height: "4px",
                  background: "#BD67Dg",
                  borderRadius: "50%"
                }} />
              </Grid>
              <Grid item>
                <img src={movie.category === "Movies" ? movieIcon : tvSeriesIcon} alt="" width={16} height={16} />
              </Grid>
              <Grid item>
                <Box sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#e03030",
                  borderRadius: "full"
                }} />
              </Grid>

              <Grid item>
                <Typography fontSize={10} color="#E0e0e0" aria-aria-label="Movie Rating">{movie.rating}</Typography>
              </Grid>

              <Grid item>
                <Typography fontSize={10} color="#E0e0e0" padding={0} aria-aria-label="Movie title">{movie.title}</Typography>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            paddingLeft: "16px",
          }}>


          <Box sx={{

            p: "1rem",
            backgroundColor: "black",
            borderRadius: "100%",
            cursor: "pointer",
            "&:hover": { opacity: 0.8 },
          }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? ( <BookmarkIcon fill={"#e0e0e0"} />) : (<BookmarkEmptyIcon />)}

          </Box>

        </Box>
      </CardContent>
    </Card>
  )
}

export default MovieCard