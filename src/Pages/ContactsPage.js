import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../Components/ContactsForm/ContactsForm';
import Filter from '../Components/Filter/Filter';
import ContactsList from '../Components/ContactsList/ContactsList';
import contactsOperations from '../redux/contacts/operations';
import contactsSelectors from '../redux/contacts/selectors';
import styles from './HomePage/HomePage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );
  const isError = useSelector(state => contactsSelectors.getError(state));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);  

  return (
    <main className={styles.container}>
      <ContactForm />
      <Filter />
      <ContactsList />
      {isLoadingContacts && 'Loading...'}
      {isError && <alert severity="error">{isError}</alert>}
    </main>
  );
}