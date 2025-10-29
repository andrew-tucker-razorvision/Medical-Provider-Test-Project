import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-navy mb-4">404</h1>
        <p className="text-2xl text-charcoal mb-8">Page not found</p>
        <p className="text-lg text-charcoal mb-8 max-w-md">
          The page you're looking for doesn't exist. Would you like to explore the platform?
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
