import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
function Contact() {
  const initialState = {
    name: "",
    Email: "",
    message: "",
  };
  const [data, setData] = useState(initialState);
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("https://bravosfood.pythonanywhere.com/api/message/", data, config)
      .then((res) => {
        alert("Submitted successfully");
        (data.name = ""), (data.Email = ""), (data.message = "");
      })
      .catch((err) => alert("message not sent"));
    console.log(data);
  };
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Bravos Food is Food restaurant located in Ho providing service all over the capital of the volta region"
        />
        <meta
          property="og:title"
          content="Bravos Food contact us in on: 0596011743 or 0247130081 or 0500856550 "
        />
        <meta property="og:site_name" content="BRAVOS FOOD contact Us" />
        <meta property="og:type" content="food" />
        <meta property="og:url" content="www.bravosfoodgh.com/contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen pb-12 w-full bg-gray-100 ">
        <Navbar />
        <div className="my-12 mx-16 space-y-2">
          <blockquote className="text-justify ml-4 md:m-16">
            <h1 className="text-xl sm:text-2xl tracking-widest font-mono font-bold text-gray-600">
              Contact Information
            </h1>
            <p className="text-lg text-gray-700 font-serif tracking-wider">
              <h2>Email: Bravo@gmail.com</h2>
              <h2>Phone: 0596011743 or 0247130081 or 0500856550</h2>

              <h2>Address: p.o box 23232 Ho</h2>
            </p>
          </blockquote>
          <div className="items-center md:w-full md:justify-center">
            <h1 className="tracking-wider mx-auto font-extrabold sm:text-center text-xl mb-3 ml-4 text-gray-700">
              Send A Message
            </h1>
            <div className="flex flex-col md:flex-row">
              <form
                onSubmit={onSubmit}
                className="space-x-2 space-y-3 text-center"
              >
                <input
                  name="name"
                  value={data.name}
                  onChange={onChange}
                  type="text"
                  placeholder="Name"
                  className="h-8 w-52 md:w-80 md:h-10 rounded-md outline-none px-2"
                />
                <input
                  name="Email"
                  value={data.Email}
                  onChange={onChange}
                  type="email"
                  placeholder="Email"
                  className="h-8 w-52 md:w-80 md:h-10 rounded-md outline-none px-2"
                />
                <input
                  name="message"
                  value={data.message}
                  onChange={onChange}
                  type="text"
                  placeholder="message"
                  className="h-14 w-52 md:w-80 md:h-14 rounded-md outline-none px-2 "
                />
                <button className="py-3 px-20 rounded-md bg-red-600 text-white hover:bg-red-800 text-xl hover:text-2xl font-semibold">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
