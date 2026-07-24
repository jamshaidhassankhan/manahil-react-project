function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          ShopZone
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>

          <a href="/products" className="hover:text-blue-600">
            Products
          </a>

          <a href="/about" className="hover:text-blue-600">
            About
          </a>

          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">

          <button className="text-gray-700 hover:text-blue-600">
            🔍
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            👤
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            🛒
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;