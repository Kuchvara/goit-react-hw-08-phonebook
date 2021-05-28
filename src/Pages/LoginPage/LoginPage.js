import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import LoginForm from '../../Components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const isLoading = useSelector(authSelectors.getLoading);

  return (
    <main className={styles.container}>
      <h2>Log in to Phonebook</h2>
      <LoginForm />
      {isLoading && 'Loading...'}
    </main>
  );
}