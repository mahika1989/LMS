import  { Book, Home, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Book size={32} />
          <h1 className="text-2xl font-bold">Library Management System</h1>
        </div>
        
        {currentUser && (
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Home size={18} />
              <span>Home</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{currentUser.name} ({currentUser.role})</span>
              </div>
              
              <button 
                onClick={logout}
                className="flex items-center space-x-1 bg-indigo-800 hover:bg-indigo-900 px-3 py-1 rounded transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
  