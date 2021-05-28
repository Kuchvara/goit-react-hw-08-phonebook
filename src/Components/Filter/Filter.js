import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from '../../redux/contacts/selectors';
import contactsActions from '../../redux/contacts/actions';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const isLoading = useSelector(contactsSelectors.getLoading);

  const dispatch = useDispatch();

  const onChange = useCallback(
    event => {
      dispatch(contactsActions.changeFilter(event.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <h2>Search</h2>
      <label className={styles.label}>
        <span className={styles.text}>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          placeholder="Find"
          className={styles.input}
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contacts by name"
          disabled={isLoading}
          required
        />
      </label>
    </div>
  );
}