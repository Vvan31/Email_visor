import * as React from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
//components
import Login from './pages/login';
import SignUp from './pages/signup';
import Mails from './pages/mails';

 /*    <RequireAuth> 
 <Mails />
   </RequireAuth> */}
export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/mails"
            element={
              <Mails />
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <AuthStatus />
      <Outlet />
    </div>
  );
}
interface User {
  email: string;
  token: any;
}

interface AuthContextType {
  user: User | null;
  signin: (user: string , callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

interface AuthContextType {
  user: User | null;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<User | null>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    // Here, you can create a User object with the received email and token
    const user: User = {
      email: newUser,
      token: null, // Replace with the appropriate token value
    };
    setUser(user);
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (auth.user) {
      navigate("/mails");
    }
  }, [auth.user, navigate]);
  return null;
}


function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

