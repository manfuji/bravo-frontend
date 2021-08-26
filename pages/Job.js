import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Job() {
  const initialState = {
    name: "",
    email: "",
    qualification: "",
  };
  const [data, setData] = useState(initialState);
  const [cv, setCv] = useState(null);
  const onChange = (e) => {
    if (e.target.files) {
      setCv({
        ...cv,
        cv: e.target.files[0],
      });
    }
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
    const formdata = new FormData();

    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("qualification", data.qualification);
    formdata.append("cv", cv.cv);

    axios
      .post("https://bravosfood.pythonanywhere.com/api/job/", formdata, config)
      .then((res) => {
        alert("Submitted successfully, you will hear from us soon.Thank you.");
        (data.name = ""), (data.Email = ""), (data.message = "");
      })
      .catch((err) => alert("Your application was not sent"));
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div className="items-center md:w-full md:justify-center">
        <blockquote className="mx-10 mt-10 ">
          <h1 className="text-2xl text-red-600 font-extrabold text-center p-1">
            BRAVOS FOOD JOBS
          </h1>
          <p>
            Bravos Food (Golden Spoon Restaurants) are a class of Ultra-Modern
            Restaurants with Executive Cocktail Bars (Personalized and Exclusive
            Rooms), in Ho Municipality. The vison of Bravos is to create a
            ‘’Culture of Excellence in Customer Service’’. We don’t just provide
            ‘’Bravo Meals’’ but foster talent development of our Human Capital
            who are our most important assets.
          </p>
          <div className="mx-10">
            <p>
              <h1 className="text-xl text-black font-extrabold">
                The Opportunity and Model
              </h1>
              As part of its social responsibility, Brovos Food is offering
              Training Opportunities to Trainee Cooks/Chefs for employment in
              one of its Golden Spoon Restaurants. Successful Trainees will be
              given scholarships to cover their training programme for six
              months. Scholarships are awarded based on merit. Full scholarship
              is valued at ¢12,500.00, Half Scholarship is valued at ¢6250.00
              and Part Scholarship is valued at ¢3125.00. After successful post
              training evaluation, trainees will be required to do a compulsory
              six-months internship. Trainees who are sponsored throughout the
              training will be required to serve a bond for a period of their
              employment. This is a unique opportunity to develop professional
              hands on skills certified by the Golden Spoon Restaurants.
            </p>

            <p>
              <h1 className="text-xl text-black font-extrabold">Employment</h1>
              Successful Trainees will be employed at Golden Spoon Restaurants.
              The compensation package includes attractive salary, SSNIT,
              Insurance with fringe benefits.
            </p>

            <p>
              <h1 className="text-xl text-black font-extrabold">
                Specialization
              </h1>
              <ol>
                <li>
                  <ChevronRightIcon className="h-4 inline " />
                  Pre Meal Planning (Recipe/Menu Creation, Food Costing)
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Setting up Suppliers, Stock requirement control and
                  Management, Floor Management
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Training and Sales Development (Kitchen Staff, Sales Staff,
                  Marketing Staff Development)
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Meal Preparation (Local and Continental Cuisine)
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Managing Kitchen Orders for occasions
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Customer Management, Hospitality & General Management
                </li>
              </ol>
            </p>

            <p>
              <h1 className="text-xl text-black font-extrabold">Attributes</h1>
              <ol>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Experience as a chef or a cook in a reputable hotel or
                  restaurant will be an advantage but not a requirement
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Excellent interpersonal skills and ability to work in team
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Smart, Customer centric and Ability to cope with high demands
                  of pressure
                </li>
              </ol>
            </p>

            <p>
              <h1 className="text-xl text-black font-extrabold">
                Qualification
              </h1>
              <h2>Category 1 – Trainees (General)</h2>
              <ol>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  SHS Certificate (Home Economics)
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Certificate in Cooking from a recognized Institution
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  NVTI/Diploma in Cooking (Cookery Practical’s)
                </li>
              </ol>
              <h2>Category 2 – Trainees (Professionals)</h2>
              <ol>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  Diploma in Cooking (Cookery Practical’s I and II){" "}
                </li>
                <li>
                  {" "}
                  <ChevronRightIcon className="h-4 inline " />
                  HND (Hotel, Catering and Institutional Management)
                </li>
              </ol>
            </p>
          </div>
        </blockquote>
        <div className="flex flex-grow bg-gray-200 max-w-3xl mx-auto py-10 mt-5">
          <form onSubmit={onSubmit} className="space-x-2 space-y-3 text-center">
            <h1 className="tracking-wider mx-auto font-extrabold sm:text-center text-xl mb-3 ml-4 text-red-600">
              Apply for the job
            </h1>
            <span className="font-light text-red-600">
              Please submit a copy of you CV to bravosfoodgh@gmail.com
            </span>
            <input
              name="name"
              value={data.name}
              onChange={onChange}
              type="text"
              placeholder="Name"
              className="h-8 w-52 md:w-96 md:h-10 rounded-md outline-none px-2"
            />
            <input
              name="email"
              value={data.email}
              onChange={onChange}
              type="email"
              placeholder="Email"
              className="h-8 w-52 md:w-96 md:h-10 rounded-md outline-none px-2"
            />
            <input
              name="qualification"
              value={data.qualification}
              onChange={onChange}
              type="text"
              placeholder=" Qualification eg-- HND"
              className="h-12 w-52 md:w-96 md:h-20 rounded-md outline-none px-2"
            />{" "}
            <input
              onChange={onChange}
              type="file"
              name="cv"
              className="h-8 w-52 md:w-96 md:h-10 rounded-md outline-none px-2"
            />
            <br />
            <button className="py-3 px-20 rounded-md bg-red-600 text-white hover:bg-red-800 text-xl hover:text-2xl font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Job;
