import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import RegistrationForm from '../Components/RegistrationForm/RegistrationForm';
import styles from './LoginPage/LoginPage.module.css';

export default function RegistrationPage()  {
  const isLoading = useSelector(authSelectors.getLoading);  

  return (
    <main className={styles.container}>
      <h2>Create your account</h2>
      <RegistrationForm />
      {isLoading && 'Loading...'}
    </main>
  );
}