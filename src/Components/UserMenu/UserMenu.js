import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();
  
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={styles.profile}>
      <div className={styles.thumb}>
        <img
          src={`https://eu.ui-avatars.com/api/?background=2196f3&color=fff&&length=1&name=${email}`}
          alt="avatar"
          title="Your avatar"
          className={styles.avatar}
        />
      </div>

      <span className={styles.welcome}>
        Welcome, <span className={styles.email}>{email}</span>
      </span>

      <button
        type="button"
        title="Log out"
        aria-label="Log out"
        onClick={onLogout}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
}