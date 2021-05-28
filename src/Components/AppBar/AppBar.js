import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса авторизации юзера

  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}