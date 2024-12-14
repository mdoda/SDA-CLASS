import Footer from '../components/Footer';
import MovieDetails from '../components/MovieDetails';
import MoviesList from '../components/MoviesList'
import About from '../components/About'
import { createBrowserRouter } from 'react-router-dom';


export const createRouter = () =>
  createBrowserRouter([
    {
        path: '/',
        element: <MoviesList />,
    },
    {
      path: '/details',
      element: <MovieDetails />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
        path: '/footer',
        element: <Footer />,
    },

  ]);