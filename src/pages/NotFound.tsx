import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold mb-2">404</h1>
        <p className="text-muted-foreground mb-4">Page not found</p>
        <Link to="/" className="text-primary underline">Go home</Link>
      </div>
    </div>
  );
};

export default NotFound;
