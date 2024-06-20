import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Error from './pages/error'
import Home from './pages/home'
import Movie from './pages/movies'
import TvShows from './pages/tv-show'
import Bookmark from './pages/bookmarks'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    }, {
        path: "/movies",
        element: <Movie />,
        errorElement: <Error />,
    },
    {
        path: "/tv-shows",
        element: <TvShows />,
        errorElement: <Error />,
    },
    {
        path: "/bookmarks",
        element: <Bookmark />,
        errorElement: <Error />,
    },
])
