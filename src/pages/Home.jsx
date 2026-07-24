import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <section className="min-h-[80vh] bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl font-bold">
              Welcome to NovaMart
            </h1>

            <p className="mt-5 text-gray-300 text-lg">
              Discover premium products with a modern shopping
              experience. Quality items, secure payments and
              fast delivery at your doorstep.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                to="/services"
                className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>

            </div>

          </div>


          <div>

            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              alt="shopping"
              className="rounded-2xl shadow-2xl"
            />

          </div>

        </div>

      </section>


      <section className="py-16">

        <h2 className="text-3xl font-bold text-center">
          Featured Products
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Explore our latest products
        </p>


        <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-8">


          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-bold">
                Premium Laptop
              </h3>

              <p className="text-gray-600 mt-2">
                Powerful laptop for work and business.
              </p>

            </div>

          </div>


          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-bold">
                Smart Watch
              </h3>

              <p className="text-gray-600 mt-2">
                Modern smartwatch with smart features.
              </p>

            </div>

          </div>


          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-bold">
                Wireless Headphones
              </h3>

              <p className="text-gray-600 mt-2">
                Premium sound experience.
              </p>

            </div>

          </div>


        </div>

      </section>


      <section className="py-16 bg-gray-100">

        <h2 className="text-3xl font-bold text-center">
          Why Choose NovaMart
        </h2>


        <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-8">


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Quality Products
            </h3>

            <p className="mt-3 text-gray-600">
              We provide high quality products at reasonable prices.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Fast Delivery
            </h3>

            <p className="mt-3 text-gray-600">
              Quick and safe delivery service.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Customer Support
            </h3>

            <p className="mt-3 text-gray-600">
              We are always available to help our customers.
            </p>

          </div>


        </div>

      </section>

    </div>
  );
}

export default Home;