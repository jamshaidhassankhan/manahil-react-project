function Headphones() {
  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        alt="Wireless Headphones"
        className="rounded-xl shadow-lg w-full"
      />


      <div>

        <h1 className="text-4xl font-bold">
          Wireless Headphones
        </h1>

        <p className="text-blue-600 text-2xl font-bold mt-4">
          $149
        </p>

        <p className="text-gray-600 mt-4">
          Premium wireless headphones with clear sound quality,
          deep bass and comfortable design.
        </p>


        <h2 className="text-2xl font-bold mt-6">
          Features
        </h2>

        <ul className="mt-3 space-y-2">
          <li>✅ Noise Cancellation</li>
          <li>✅ Wireless Connection</li>
          <li>✅ Premium Sound Quality</li>
          <li>✅ Fast Charging</li>
        </ul>


        <div className="flex gap-4 mt-6">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add To Cart
          </button>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Buy Now
          </button>

        </div>


      </div>

    </div>
  );
}

export default Headphones;