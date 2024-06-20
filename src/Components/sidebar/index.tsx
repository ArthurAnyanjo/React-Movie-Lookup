import React from 'react'
import homeIcon from '../../assets/icons/iconHome.svg'
import movieIcon from '../../assets/icons/iconMovies.svg'
import tvSeriesIcon from '../../assets/icons/iconTvShow.svg'
import bookmarkIcon from '../../assets/icons/iconBookmark.svg'
import { Link, useLocation } from 'react-router-dom'
import { Box, Hidden, Typography } from '@mui/material'

const navLinks = [
    {
        name: "Home",
        icon: homeIcon,
        link: "/",
    },
    {
        name: "Movies",
        icon: movieIcon,
        link: "/movies",
    },
    {
        name: "Tv-shows",
        icon: tvSeriesIcon,
        link: "/tv-shows",
    },
    {
        name: "Bookmarks",
        icon: bookmarkIcon,
        link: "/bookmarks",
    },

]

const Sidebar = () => {

    const { pathname } = useLocation();
    return (
        <Box sx={
            {
                backgroundColor: "161dsf",
                padding: 2,
                borderRadius: 2,
                display: "flex",
                flexDirection: {
                    xs: "row",
                    lg: "column",
                },
                alignItems: "center",
                justifyContent: "space-between",
                width: {
                    sm: "100%",
                    lg: 200,
                },
            }
        }
        >
            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "row",
                    lg: "column",
                },
                gap: 5,
                alignItems: {
                    xs: "center",
                    lg: "start"
                },
                width: "100%",
            }}>

                <Box sx={{
                    py: {
                        xs: "0px",
                        ls: "16px"
                    },
                    display: "flex",
                    flexDirection: {
                        xs: "row",
                        lg: "column",
                    },
                    gap: 4,
                }}
                >

                    <Hidden smDown>
                        <Typography variant='h5' component="h1" my={2} fontWeight={400} fontSize={18}>AnimDrama</Typography>
                    </Hidden>
                    <Box sx={{
                        py: {
                            xs: "0px",
                            ls: "16px"
                        },
                        display: "flex",
                        flexDirection: {
                            xs: 'row',
                            lg: 'column'
                        },
                        gap: 4
                    }}
                    >

                        {
                            navLinks.map((item) => (
                                <Link key={item.name} to={item.link} style={{
                                    textDecoration: "none"
                                }}>
                                    <Box sx={
                                        {
                                            display: "flex",
                                            alignItems: 'center',
                                            gap: 2,
                                            color: "white",
                                            textDecoration: 'none'
                                        }
                                    }>
                                        <img src={item.icon} alt={item.name} style={{
                                            width: "18px",
                                            filter: `${pathname === item.link ? "invert(50%) sepia(14%) saturate(3100%) hue-rotate(215deg)" : "invert(84%)"}`
                                        }} />
                                        <Hidden mdDown>
                                            <Typography>{item.name}</Typography>
                                        </Hidden>
                                    </Box>
                                </Link>
                            ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar