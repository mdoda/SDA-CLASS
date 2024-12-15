import { Outlet } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
const Layout = () => {
  return (
    <div>
      <NavigationMenu />
      <main>
        {/* Render child routes here */}
        <Outlet /> {/* Outlet options: */}
      </main>
    </div>
  );
};

export default Layout;
