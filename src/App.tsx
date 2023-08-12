import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from '@azure/msal-react';
import './App.css';

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  function loginHandler() {
    instance.loginRedirect();
  }

  function logoutHandler() {
    instance.logoutRedirect();
  }
  console.log(isAuthenticated);

  return (
    <>
      <AuthenticatedTemplate>
        If you are seeing this, you are authenticated via msal.
        <button onClick={logoutHandler}>Logout</button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        If you are seeing this, please login.
        <button onClick={loginHandler}>Login</button>
      </UnauthenticatedTemplate>
    </>
  );
}

export default App;
