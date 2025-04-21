import  { useState } from 'react';
import AdminLoginForm from './AdminLoginForm';
import StudentLoginForm from './StudentLoginForm';
import RegisterForm from './RegisterForm';

const AuthScreen = () => {
  const [view, setView] = useState<'adminLogin' | 'studentLogin' | 'register'>('studentLogin');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxsaWJyYXJ5JTIwbG9naW4lMjBhZG1pbiUyMHN0dWRlbnQlMjBzZXBhcmF0ZXxlbnwwfHx8fDE3NDUxNTgwNjN8MA&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
          alt="Library with hanging bulbs" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setView('studentLogin')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                view === 'studentLogin' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Student Login
            </button>
            <button
              type="button"
              onClick={() => setView('adminLogin')}
              className={`px-4 py-2 text-sm font-medium ${
                view === 'adminLogin' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Admin Login
            </button>
            <button
              type="button"
              onClick={() => setView('register')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                view === 'register' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Register
            </button>
          </div>
        </div>
        
        {view === 'studentLogin' && (
          <div className="transition-all duration-300 transform">
            <StudentLoginForm setView={setView} />
          </div>
        )}
        
        {view === 'adminLogin' && (
          <div className="transition-all duration-300 transform">
            <AdminLoginForm setView={setView} />
          </div>
        )}
        
        {view === 'register' && (
          <div className="transition-all duration-300 transform">
            <RegisterForm setView={setView} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
  