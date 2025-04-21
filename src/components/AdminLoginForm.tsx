import  { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, User, AlertCircle, ShieldCheck } from 'lucide-react';

interface AdminLoginFormProps {
  setView: (view: 'adminLogin' | 'studentLogin' | 'register') => void;
}

const AdminLoginForm = ({ setView }: AdminLoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, currentUser } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const success = login(username, password);
    if (!success) {
      setError('Invalid username or password');
    } else if (currentUser?.role !== 'admin') {
      setError('Access denied. This login is for administrators only.');
      return;
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <div className="flex justify-center">
          <ShieldCheck size={32} className="text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Admin Login</h2>
        <p className="mt-2 text-gray-600">Sign in to access the admin dashboard</p>
      </div>
      
      {error && (
        <div className="p-3 text-sm bg-red-100 text-red-700 rounded-md flex items-center">
          <AlertCircle size={16} className="mr-2" />
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Admin Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User size={16} className="text-gray-400" />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter admin username"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock size={16} className="text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign In as Admin
        </button>
      </form>
      
      <div className="text-center text-sm text-gray-600">
        <p>Admin test credentials:</p>
        <p className="mt-1"><strong>Username:</strong> admin</p>
        <p className="mt-1"><strong>Password:</strong> admin123</p>
      </div>
    </div>
  );
};

export default AdminLoginForm;
  