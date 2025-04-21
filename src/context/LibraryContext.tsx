import  { createContext, useState, useContext, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../types';
import { initialBooks } from '../data';

interface LibraryContextType {
  books: Book[];
  addBook: (book: Omit<Book, 'id' | 'available'>) => void;
  removeBook: (id: string) => void;
  borrowBook: (id: string, borrower: string) => void;
  returnBook: (id: string) => void;
  searchByTitle: (title: string) => Book[];
  searchByAuthor: (author: string) => Book[];
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Omit<Book, 'id' | 'available'>) => {
    setBooks([...books, { ...book, id: uuidv4(), available: true }]);
  };

  const removeBook = (id: string) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const borrowBook = (id: string, borrower: string) => {
    setBooks(books.map(book => 
      book.id === id ? 
        { ...book, available: false, borrowedBy: borrower, borrowDate: new Date() } : 
        book
    ));
  };

  const returnBook = (id: string) => {
    setBooks(books.map(book => 
      book.id === id ? 
        { ...book, available: true, borrowedBy: undefined, returnDate: new Date() } : 
        book
    ));
  };

  const searchByTitle = (title: string) => {
    if (!title.trim()) return books;
    return books.filter(book => 
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  const searchByAuthor = (author: string) => {
    if (!author.trim()) return books;
    return books.filter(book => 
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  };

  return (
    <LibraryContext.Provider value={{ 
      books, 
      addBook, 
      removeBook, 
      borrowBook, 
      returnBook, 
      searchByTitle, 
      searchByAuthor 
    }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};
  