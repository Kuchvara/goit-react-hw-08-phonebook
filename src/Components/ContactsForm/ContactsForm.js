import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/operations';
import contactsSelectors from '../../redux/contacts/selectors';

import styles from './ContactsForm.module.css';

const initialState = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (name, number) => {
      dispatch(contactsOperations.addContact(name, number));
    },
    [dispatch],
  );

  const hanldeChange = event => {
    const { name, value } = event.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    const normalizedName = name.toLowerCase();

    const nameInContacts = contacts.find(
      contact => contact.name === normalizedName,
    );

    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    if (!nameInContacts && !numberInContacts) {
      onSubmit(normalizedName, number);
      resetForm();
      return;
    }   
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="Input for your name"
          className={styles.input}
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          disabled={isLoading}
          required
        />
      </label>
      <label className={styles.label}>
        <span className={styles.text}>Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          className={styles.input}
          value={number}
          onChange={hanldeChange}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          disabled={isLoading}
          required
        />
      </label>
      <div className={styles.container}>
      <button type="submit" className={styles.button} disabled={isLoading}>
        Add contact
      </button>
      </div>
    </form>
  );
}