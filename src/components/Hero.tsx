const  Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507738978512-35798112892c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzaGVsdmVzfGVufDB8fHx8MTc0NTE1MjkyN3ww&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
          alt="Library books on shelves" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Library Management System</h1>
          <p className="text-lg mb-8">
            Efficiently manage your library collection with our comprehensive system. Add, borrow, and return books with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
  