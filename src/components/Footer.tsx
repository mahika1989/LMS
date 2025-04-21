import  { Book, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Book size={24} className="mr-2" />
            <span className="text-xl font-semibold">Library Management System</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-300 flex items-center">
              <Github size={18} className="mr-1" />
              <span>Github</span>
            </a>
            <a href="#" className="hover:text-indigo-300 flex items-center">
              <Mail size={18} className="mr-1" />
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Library Management System. Built with jdoodle.ai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  