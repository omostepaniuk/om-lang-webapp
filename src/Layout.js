import { Outlet, Link } from 'react-router-dom';
import './Layout.scss';

export function Layout() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/bundles">Bundles</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}
