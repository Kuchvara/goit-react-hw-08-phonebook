import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import LoginForm from '../Components/LoginForm/LoginForm';

export default function LoginPage() {
  const isLoading = useSelector(authSelectors.getLoading);

    useEffect(() => {
    document.title = 'Log in to App | Phonebook';
  }, []);

  return (
    <main>
      <h2>Log in to Phonebook</h2>
      <LoginForm />
      {isLoading && 'Loading...'}
    </main>
  );
}