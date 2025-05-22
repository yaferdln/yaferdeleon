// src/pages/NotFound.jsx

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-center text-gray-300 px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
        <p className="text-xl md:text-2xl mb-2">Page Not Found</p>
        <p className="text-sm md:text-base text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
