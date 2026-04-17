import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 Student Portal</p>
      </footer>
    </div>
  );
};

export default Layout;