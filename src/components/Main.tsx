import  { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Dashboard from './Dashboard';
import Footer from './Footer';
import AuthScreen from './AuthScreen';
import { useAuth } from '../context/AuthContext';

function Main() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {isAuthenticated ? (
        <>
          <Header />
          <Hero />
          <main className="flex-grow container mx-auto">
            <Dashboard />
          </main>
          <Footer />
        </>
      ) : (
        <AuthScreen />
      )}
    </div>
  );
}

export default Main;
  