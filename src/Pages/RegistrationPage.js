import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

import RegistrationForm from '../Components/RegistrationForm/RegistrationForm';

export default function RegistrationPage()  {
  const isLoading = useSelector(authSelectors.getLoading);

   useEffect(() => {
    document.title = 'Create account | Phonebook';
  }, []);

  return (
    <main>
      <h2>Create your account</h2>

      <RegistrationForm />

      {isLoading && 'Loading...'}
    </main>
  );
}