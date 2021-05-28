import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to='/'
            className={styles.link}
            activeClassName={styles['link--active']}
          >
            Home
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink
              to='/contacts'
              className={styles.link}
              activeClassName={styles['link--active']}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}