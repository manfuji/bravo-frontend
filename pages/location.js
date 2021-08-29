import Navbar from "../components/Navbar";
import Head from "next/head";
function Location() {
  return (
    <div>
      <Head>
        <title>Bravo - Location</title>
        <meta
          name="description"
          content="Bravos Food is Food restaurant located in Ho at;1st Floor, Ahoe Satellite Market Shopping Center And Top Floor,Bayport Office,Opposite High Court, Adjacent to NHIS,Old Traffic
          Light,Ho"
        />
        <meta property="og:title" content="Bravos Food locate us in Ho  " />
        <meta property="og:site_name" content="BRAVOS FOOD - Location" />
        <meta property="og:type" content="food" />
        <meta property="og:url" content="www.bravosfoodgh.com/lcation" />
        <link rel="icon" href="/favi.ico" />
      </Head>
      <div className="h-full w-full bg-gray-100 flex flex-col text-center pb-10">
        <Navbar />
        <div className="mb-4 mt-12 p-4 h-full max-w-2xl bg-gray-300 mx-auto">
          <div className="mb-4">
            <h1 className=" uppercase text-3xl font-extrabold tracking-widest text-black pb-6">
              Locate us in Ho at:
            </h1>
            <h1 className=" uppercase text-xl font-extrabold tracking-widest text-red-600">
              1st Floor, Ahoe Satellite Market Shopping Center
            </h1>
            <p>
              <b>Our operating hours are</b> <br />
              Monday to Friday from 8:30 AM to 11:00 PM, <br />
              Saturday and Sunday from 11:00 AM to 11:00 PM <br />
              <span className="font-bold text-lg text-gray-900">
                For direction call: 0596011743 or 0247130081 or 0500856550
              </span>
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:min-w-full space-y-2 md:space-x-2 w-80 mx-auto"></div>
          </div>
        </div>

        <div className="mb-16 mt-12 p-4 h-full max-w-2xl bg-gray-300 mx-auto">
          <div className="mb-4">
            <h1 className=" uppercase text-3xl font-extrabold tracking-widest text-black pb-6">
              And Also in Ho at:
            </h1>
            <h1 className=" uppercase text-xl font-extrabold tracking-widest text-red-600">
              Top Floor Bayport Office,Opposite High Court, Adjacent to NHIS,Old
              Traffic Light,Ho
            </h1>
            <p>
              <b>Our operating hours are</b> <br />
              Monday to Friday from 8:30 AM to 11:00 PM, <br />
              Saturday and Sunday from 11:00 AM to 11:00 PM <br />
              <span className="font-bold text-lg text-gray-900">
                For direction call: 0596011743 or 0247130081 or 0500856550
              </span>
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:min-w-full space-y-2 md:space-x-2 w-80 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
