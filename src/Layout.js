import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.scss';

export function Layout() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navListItem}>
              <Link to="/bundles">Content</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
