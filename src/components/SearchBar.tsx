import  { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearchTitle: (value: string) => void;
  onSearchAuthor: (value: string) => void;
}

const SearchBar = ({ onSearchTitle, onSearchAuthor }: SearchBarProps) => {
  const [searchType, setSearchType] = useState<'title' | 'author'>('title');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchType === 'title') {
      onSearchTitle(searchValue);
    } else {
      onSearchAuthor(searchValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-6">
      <div className="flex-1 flex items-center">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} className="text-gray-500" />
          </div>
          <input
            type="text"
            className="w-full p-2 pl-10 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder={`Search by ${searchType}...`}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <select
          className="p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value as 'title' | 'author')}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
  