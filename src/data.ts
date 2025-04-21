import  { v4 as uuidv4 } from 'uuid';
import { Book, User } from './types';

export const initialBooks: Book[] = [
  {
    id: uuidv4(),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '978-0061120084',
    available: true,
  },
  {
    id: uuidv4(),
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0451524935',
    available: true,
  },
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0743273565',
    available: true,
  },
  {
    id: uuidv4(),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '978-0141439518',
    available: true,
  },
  {
    id: uuidv4(),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    isbn: '978-0316769488',
    available: true,
  }
];

export const initialUsers: User[] = [
  {
    id: uuidv4(),
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Library Admin'
  },
  {
    id: uuidv4(),
    username: 'student1',
    password: 'student123',
    role: 'student',
    name: 'John Doe'
  },
  {
    id: uuidv4(),
    username: 'student2',
    password: 'student123',
    role: 'student',
    name: 'Jane Smith'
  }
];
  