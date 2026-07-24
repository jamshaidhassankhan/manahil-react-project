import { Link } from "react-router-dom";

function Services() {

    const products = [
        {
            id: 1,
            title: "Premium Laptop",
            price: "$899",
            image:
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
            description:
                "High performance laptop for work and business."
        },

        {
            id: 2,
            title: "Smart Watch",
            price: "$199",
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            description:
                "Modern smartwatch with fitness features."
        },

        {
            id: 3,
            title: "Wireless Headphones",
            price: "$149",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            description:
                "Premium headphones with clear sound quality."
        }
    ];


    return (

        <div className="bg-gray-100 min-h-screen p-10">


            <h1 className="text-4xl font-bold text-center">
                Our Products
            </h1>


            <p className="text-center text-gray-600 mt-3">
                Explore our latest ecommerce products
            </p>



            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-10">


                {
                    products.map((product) => (


                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                        >


                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />



                            <div className="p-5">


                                <h2 className="text-xl font-bold">
                                    {product.title}
                                </h2>



                                <p className="text-gray-600 mt-2">
                                    {product.description}
                                </p>



                                <p className="text-blue-600 font-bold text-lg mt-3">
                                    {product.price}
                                </p>




                                <Link
                                    to={
                                        product.id === 1
                                            ? "/laptop"
                                            : product.id === 2
                                                ? "/smartwatch"
                                                : "/headphones"
                                    }
                                    className="block text-center bg-blue-600 text-white mt-5 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    View Details
                                </Link>
                            </div>


                        </div>


                    ))
                }


            </div>


        </div>
        

 
    );

}

export default Services;