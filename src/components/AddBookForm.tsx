import  { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { Plus } from 'lucide-react';

const AddBookForm = () => {
  const [showForm, setShowForm] = useState(false);
  const { addBook } = useLibrary();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBook(formData);
    setFormData({ title: '', author: '', isbn: '' });
    setShowForm(false);
  };

  return (
    <div className="mb-6">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          <Plus size={18} />
          <span>Add New Book</span>
        </button>
      ) : (
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-4">Add New Book</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddBookForm;
  