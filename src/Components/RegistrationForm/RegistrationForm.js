import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';

import styles from './RegisterationForm.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterationForm() {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const isLoading = useSelector(authSelectors.getLoading); 

  const dispatch = useDispatch();
  
  const onRegister = useCallback(
    state => {
      dispatch(authOperations.register(state));
    },
    [dispatch],
  );

  const hanldeChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    onRegister(state);

    resetForm();
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
          placeholder="Your name"
          aria-label="Input for your name"
          className={styles.input}
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="username"
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Email</span>

        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your e-mail"
          aria-label="Input for your Email"
          disabled={isLoading}
          autoComplete="email"
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Password</span>

        <input
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Should be at least 7 characters"
          aria-label="Input for your password"
          disabled={isLoading}
          autoComplete="new-password"
          required
        />
      </label>

      <div className={styles.container}>
        <button type="submit" className={styles.button} disabled={isLoading}>
          Create account
        </button>
      </div>
    </form>
  );
}