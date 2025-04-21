import  { useLibrary } from '../context/LibraryContext';
import { useAuth } from '../context/AuthContext';
import { Book, Trash, User, RefreshCw, Check } from 'lucide-react';
import { useState } from 'react';

const BookList = () => {
  const { books, removeBook, borrowBook, returnBook } = useLibrary();
  const { currentUser } = useAuth();
  const [borrower, setBorrower] = useState<string>('');
  const [borrowingId, setBorrowingId] = useState<string | null>(null);

  const handleBorrow = (id: string) => {
    if (borrower.trim()) {
      borrowBook(id, borrower);
      setBorrower('');
      setBorrowingId(null);
    }
  };

  const isAdmin = currentUser?.role === 'admin';
  const isStudent = currentUser?.role === 'student';

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Author</th>
            <th className="py-3 px-4 text-left">ISBN</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {books.map((book) => (
            <tr key={book.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 flex items-center">
                <Book size={18} className="text-indigo-600 mr-2" />
                {book.title}
              </td>
              <td className="py-3 px-4">{book.author}</td>
              <td className="py-3 px-4">{book.isbn}</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-xs ${book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {book.available ? 'Available' : `Borrowed by ${book.borrowedBy}`}
                </span>
              </td>
              <td className="py-3 px-4 flex items-center space-x-2">
                {isAdmin && (
                  <button
                    onClick={() => removeBook(book.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Remove Book"
                  >
                    <Trash size={18} />
                  </button>
                )}
                
                {book.available ? (
                  (isAdmin || isStudent) && borrowingId === book.id ? (
                    <div className="flex items-center space-x-1">
                      <input
                        type="text"
                        value={borrower}
                        onChange={(e) => setBorrower(e.target.value)}
                        placeholder="Borrower name"
                        className="border p-1 text-sm w-32"
                      />
                      <button
                        onClick={() => handleBorrow(book.id)}
                        className="text-green-500 hover:text-green-700"
                        disabled={!borrower.trim()}
                      >
                        <Check size={18} />
                      </button>
                    </div>
                  ) : (isAdmin || isStudent) && (
                    <button
                      onClick={() => setBorrowingId(book.id)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Borrow Book"
                    >
                      <User size={18} />
                    </button>
                  )
                ) : (
                  (isAdmin || (isStudent && book.borrowedBy === currentUser?.name)) && (
                    <button
                      onClick={() => returnBook(book.id)}
                      className="text-green-500 hover:text-green-700"
                      title="Return Book"
                    >
                      <RefreshCw size={18} />
                    </button>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
  