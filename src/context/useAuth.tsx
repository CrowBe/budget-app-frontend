import {
    createContext,
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../types";
import { apiLogin, apiSignUp } from '../api/auth'
  
interface AuthContextType {
    // We defined the user type in `index.d.ts`, but it's
    // a simple object with email, name and password.
    user?: User;
    loading: boolean;
    error?: any;
    login: (email: string, password: string) => void;
    signUp: (email: string, name: string, password: string) => void;
    logout: () => void;
}
  
const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
  
// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // If we change page, reset the error state.
  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);
  
  // Flags the component loading state and posts the login
  // data to the server.
  //
  // An error means that the email/password combination is
  // not valid.
  //
  // Finally, just signal the component that loading the
  // loading state is over.
  function login(email: string, password: string) {
    setLoading(true);

    apiLogin({ email, password })
      .then((res) => {
        navigate("/");
        setUser(res.user);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  
  // Sends sign up details to the server. On success we just apply
  // the created user to the state.
  function signUp(email: string, name: string, password: string) {
    setLoading(true);
    apiSignUp({ email, name, password })
      .then((res) => {
        navigate("/");
        setUser(res.user);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  // Call the logout endpoint and then remove the user
  // from the state.
  function logout() {
    setUser(undefined);
  }
  
  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signUp,
      logout,
    }),
    [user, loading, error]
  );
  
  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext);
}