function SmartWatch() {
  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        alt="Smart Watch"
        className="rounded-xl shadow-lg"
      />


      <div>

        <h1 className="text-4xl font-bold">
          Smart Watch
        </h1>


        <p className="text-blue-600 text-2xl font-bold mt-4">
          $199
        </p>


        <p className="text-gray-600 mt-5">
          Modern smartwatch with fitness tracking,
          health monitoring and stylish design.
        </p>


        <h2 className="text-2xl font-bold mt-6">
          Features
        </h2>


        <ul className="mt-3">
          <li>✅ Heart Rate Monitor</li>
          <li>✅ Water Resistant</li>
          <li>✅ Bluetooth Support</li>
          <li>✅ Long Battery Life</li>
        </ul>


        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
          Add To Cart
        </button>


      </div>

    </div>
  );
}

export default SmartWatch;