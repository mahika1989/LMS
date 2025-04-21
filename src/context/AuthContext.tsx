import  { createContext, useState, useContext, ReactNode } from 'react';
import { User, UserRole } from '../types';
import { initialUsers } from '../data';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, password: string, name: string, role: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string): boolean => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const register = (username: string, password: string, name: string, role: UserRole): boolean => {
    // Check if username already exists
    if (users.some(user => user.username === username)) {
      return false;
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      username,
      password,
      name,
      role
    };

    setUsers([...users, newUser]);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
  