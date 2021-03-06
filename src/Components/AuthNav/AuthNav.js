import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          to='/register'
          className={styles.link}
          activeClassName={styles['link--active']}
        >
          Sign up
        </NavLink>
      </li>

      <li className={styles.item}>
        <NavLink
          exact
          to='/login'
          className={styles.link}
          activeClassName={styles['link--active']}
        >
          Log in
        </NavLink>
      </li>
    </ul>
  );
}