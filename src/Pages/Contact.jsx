import { useState } from "react";

function Contact() {

  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });


  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");



  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();


    if(!form.name || !form.email || !form.phone){
      setError("Please fill all fields");
      return;
    }


    if(!form.email.includes("@")){
      setError("Invalid email");
      return;
    }


    if(form.phone.length !== 11){
      setError("Phone number must be 11 digits");
      return;
    }



    let data;


    if(editId){

      data = customers.map((item)=>
        item.id === editId
        ? {...form, id: editId}
        : item
      );

      setEditId(null);

    }
    else{

      data = [
        ...customers,
        {
          ...form,
          id: Date.now()
        }
      ];

    }



    setCustomers(data);

    localStorage.setItem(
      "customers",
      JSON.stringify(data)
    );


    setForm({
      name:"",
      email:"",
      phone:"",
      message:""
    });

    setError("");

  };



  const deleteCustomer = (id)=>{

    const data = customers.filter(
      item => item.id !== id
    );


    setCustomers(data);

    localStorage.setItem(
      "customers",
      JSON.stringify(data)
    );

  };



  const editCustomer = (customer)=>{

    setForm(customer);
    setEditId(customer.id);

  };



  return (

    <div className="max-w-5xl mx-auto p-6">


      <h1 className="text-4xl font-bold mb-6">
        Contact Us
      </h1>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded-xl"
      >


        {
          error &&
          <p className="text-red-600 mb-3">
            {error}
          </p>
        }



        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-3 w-full mb-3 rounded"
        />


        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-3 w-full mb-3 rounded"
        />


        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-3 w-full mb-3 rounded"
        />


        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="border p-3 w-full mb-3 rounded"
        />


        <button className="bg-blue-600 text-white px-6 py-2 rounded">

          {editId ? "Update" : "Submit"}

        </button>


      </form>



      <h2 className="text-3xl font-bold mt-10 mb-5">
        Customer List
      </h2>



      <div className="grid md:grid-cols-2 gap-5">


        {
          customers.map((customer)=>(

            <div
              key={customer.id}
              className="bg-gray-100 p-5 rounded-xl shadow"
            >

              <h3 className="text-xl font-bold">
                {customer.name}
              </h3>


              <p>Email: {customer.email}</p>

              <p>Phone: {customer.phone}</p>

              <p>{customer.message}</p>



              <div className="flex gap-3 mt-4">


                <button
                  onClick={()=>editCustomer(customer)}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>


                <button
                  onClick={()=>deleteCustomer(customer.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>


              </div>


            </div>

          ))
        }


      </div>


    </div>

  );
}

export default Contact;