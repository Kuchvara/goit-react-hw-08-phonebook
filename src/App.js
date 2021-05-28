import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import authOperations from './redux/auth/authOperations';
import AppBar from './Components/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomePage = lazy(() =>
  import('./Pages/HomePage.js' /* webpackChunkName: "homePage" */),
);
const ContactsPage = lazy(() =>
  import('./Pages/ContactsPage.js' /* webpackChunkName: "contactsPage" */),
);
const RegistrationPage = lazy(() =>
  import('./Pages/RegistrationPage.js' /* webpackChunkName: "registerPage" */),
);
const LoginPage = lazy(() =>
  import('./Pages/LoginPage.js' /* webpackChunkName: "loginPage" */),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback='Loading...'>
        <Switch>
          <PublicRoute exact path='/'>
            <HomePage />
          </PublicRoute>

          <PrivateRoute path='/contacts' redirectTo='/login'>
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute
            path='/register'
            restricted
            redirectTo='/contacts'
          >
            <RegistrationPage/>
          </PublicRoute>

          <PublicRoute
            path='/login'
            restricted
            redirectTo='/contacts'
          >
            <LoginPage />
          </PublicRoute>

          <PublicRoute>
            <HomePage/>
          </PublicRoute>
        </Switch>
      </Suspense>      
    </>
  );
}

export default App;