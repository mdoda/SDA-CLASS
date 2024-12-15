import './App.css';
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider
import { createRouter } from './routes/router'; // Import your createRouter function
import NavigationMenu from './components/NavigationMenu'; // Import NavigationMenu
import Footer from './components/Footer';

function App() {
  // Create the router instance
  const router = createRouter();

  return (
    <>

      {/* Dynamic routing using RouterProvider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;