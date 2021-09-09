import Head from "next/head";
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import Maindish from "../components/Maindish";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bravos food - Restaurant in Ho, Volta Region</title>
        <meta
          name="description"
          content="Bravos Food is Restaurant in Ho, that provide Healthy and Affordable foods to you anywhere in HO 
          : We have pizza, burger, Fried rice, shawarma, hamburger. We are open on Monday to Friday from 8:30 AM to 11:00 PM,
          Saturday and Sunday from 11:00 AM to 11:00 PM "
        />
        <meta
          name="keywords"
          content="bravosfoodgh,bravosfood restaurant - food, bravo, bravosfood,bravo burger,bravos food restaurant, restaurant,bravo,restaurants Ho,food Ho,fast food Ho,burger near me,
          restaurants nearby, pizza Ho, burger king Ho"
        />
        <meta
          name="google-site-verification"
          content="vqsh9E1ZTWscTCsq1hhaUdwedQefp4Pg-pqWhpRXn24"
        />
        <meta property="og:title" content="Bravos Food is at your service" />
        <meta property="og:site_name" content="BRAVOS FOOD" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Restaurant in Ho, Volta Region"
        ></meta>
        <meta property="og:url" content="www.bravosfoodgh.com" />
        <meta property="og:url" content="https://bravosfoodgh.com" />
        <link rel="canonical" href="https://bravosfoodgh.com" />
        <meta name="format-detection" content="telephone=233247130081" />
        <link rel="icon" href="/favi.ico" />
      </Head>
      <Navbar />
      <div className=" min-w-full">
        <Nav />
      </div>
      <main className="min-w-full">
        {/*<section className="pt-6">
      <Navigation />
      <h1 className="font-bold text-4xl text-gray-900 text-center">
            {" "
            Our Menu <FireIcon className="h-4 text-red-600 inline-block" />
          </h1>
          <Products />
  </section> */}
        <section className="md:p-4 max-w-7xl">
          <Maindish />
        </section>
        <section className="m-10  md:ml-24 xl:ml-32 ">
          <h1 className="text-2xl tracking-widest md:text-3xl font-extrabold text-gray-900 text-center">
            OUR MENU
          </h1>
          <div>
            <Cards />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
