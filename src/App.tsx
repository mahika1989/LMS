import  { AuthProvider } from './context/AuthContext';
import { LibraryProvider } from './context/LibraryContext';
import Main from './components/Main';

function App() {
  return (
    <AuthProvider>
      <LibraryProvider>
        <Main />
      </LibraryProvider>
    </AuthProvider>
  );
}

export default App;
  