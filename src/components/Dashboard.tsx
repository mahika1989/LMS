import  { useState, useEffect } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { useAuth } from '../context/AuthContext';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import SearchBar from './SearchBar';
import UserManagement from './UserManagement';
import { Book } from '../types';

const Dashboard = () => {
  const { searchByTitle, searchByAuthor, books } = useLibrary();
  const { currentUser } = useAuth();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearchTitle = (title: string) => {
    setFilteredBooks(searchByTitle(title));
  };

  const handleSearchAuthor = (author: string) => {
    setFilteredBooks(searchByAuthor(author));
  };

  const isAdmin = currentUser?.role === 'admin';

  return (
    <div className="py-6 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Library Management</h2>
        <SearchBar 
          onSearchTitle={handleSearchTitle}
          onSearchAuthor={handleSearchAuthor}
        />
        {isAdmin && <AddBookForm />}
        <BookList />
      </div>
      
      {isAdmin && <UserManagement />}
    </div>
  );
};

export default Dashboard;
  