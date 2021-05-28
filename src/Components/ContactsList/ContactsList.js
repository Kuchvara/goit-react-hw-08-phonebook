import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/operations';
import contactsSelectors from '../../redux/contacts/selectors';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getfilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <span className={styles.name}>{contact.name}</span>
            <a href={`tel:${contact.number}`} className={styles.number}>
              {contact.number}
            </a>
          <button
            onClick={() => onDeleteContact(contact.id)}
            aria-label="Delete contact">
            Delete
          </button>
        </li> 
      ))}
    </ul>
  );
}