import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes';
import { MovieProvider } from "./Context/movie-context";


function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;