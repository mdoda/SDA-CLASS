import Footer from '../components/Footer';
import NavigationMenu from '../components/NavigationMenu'; // Ensure this is imported
import MovieDetails from '../components/MovieDetails';
import MoviesList from '../components/MoviesList';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <Layout />,
      children: [
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
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);
