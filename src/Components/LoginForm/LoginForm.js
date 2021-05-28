import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import styles from './LoginForm.module.css';

const initialState = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const isLoading = useSelector(authSelectors.getLoading);

  const dispatch = useDispatch();

  const onLogin = useCallback(
    state => {
      dispatch(authOperations.logIn(state));
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

    onLogin(state);

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Email</span>

        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your e-mail"          
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
          placeholder="Your password"          
          disabled={isLoading}
          autoComplete="current-password"
          required
        />
      </label>

      <div className={styles.container}>
        <button type="submit" className={styles.button} disabled={isLoading}>
          Log in
        </button>
      </div>
    </form>
  );
}