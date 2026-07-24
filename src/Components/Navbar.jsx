import { Link } from "react-router-dom";
import { ShoppingCart, Search, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-400">
          NovaMart
        </h1>

        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Search />
          <User />
          <ShoppingCart />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;