export  interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  available: boolean;
  borrowedBy?: string;
  borrowDate?: Date;
  returnDate?: Date;
}

export type UserRole = 'admin' | 'student';

export interface User {
  id: string;
  username: string;
  password: string;
  role: UserRole;
  name: string;
}
  