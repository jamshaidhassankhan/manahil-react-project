function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-10">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl font-bold">
            About NovaMart
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            We provide quality products with secure shopping,
            fast delivery and reliable customer service.
          </p>

        </div>

      </section>


      <section className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          alt="Shopping"
          className="rounded-2xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-bold">
            Who We Are?
          </h2>

          <p className="text-gray-600 mt-4">
            NovaMart is an online shopping platform where
            customers can buy premium products easily.
            We focus on quality, affordable prices and
            a better shopping experience.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
            Explore Products
          </button>

        </div>

      </section>


      <section className="max-w-6xl mx-auto p-10">

        <h2 className="text-3xl font-bold text-center">
          Why Choose Us
        </h2>


        <div className="grid md:grid-cols-3 gap-6 mt-8">


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Quality Products
            </h3>

            <p className="text-gray-600 mt-3">
              We offer reliable and premium quality products.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Fast Delivery
            </h3>

            <p className="text-gray-600 mt-3">
              Quick and secure delivery service for customers.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              Customer Support
            </h3>

            <p className="text-gray-600 mt-3">
              Our team is available to help you anytime.
            </p>

          </div>


        </div>

      </section>


      <section className="bg-white py-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">


          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              10K+
            </h2>
            <p>Customers</p>
          </div>


          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              500+
            </h2>
            <p>Products</p>
          </div>


          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              50+
            </h2>
            <p>Brands</p>
          </div>


          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              24/7
            </h2>
            <p>Support</p>
          </div>


        </div>

      </section>


    </div>
  );
}

export default About;