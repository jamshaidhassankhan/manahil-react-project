function Laptop() {
  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      <img
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        alt="Laptop"
        className="rounded-xl shadow-lg"
      />


      <div>

        <h1 className="text-4xl font-bold">
          Premium Laptop
        </h1>

        <p className="text-blue-600 text-2xl font-bold mt-4">
          $899
        </p>


        <p className="text-gray-600 mt-5">
          High performance laptop for coding, business and daily use.
          It comes with powerful performance and premium design.
        </p>


        <h2 className="text-2xl font-bold mt-6">
          Features
        </h2>


        <ul className="mt-3">
          <li>✅ Intel Processor</li>
          <li>✅ 8GB RAM</li>
          <li>✅ 512GB SSD</li>
          <li>✅ HD Display</li>
        </ul>


        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default Laptop;