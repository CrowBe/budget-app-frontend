import './App.css';
import useAuth from './context/useAuth'
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { UserContext } from './context/useUser'

function App() {
  const { user } = useAuth();
  return user ?
    <UserContext.Provider value={user}>
      <PrivateRoutes />
    </UserContext.Provider>
  : 
    <PublicRoutes />
}

export default App;
