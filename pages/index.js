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
          content="Bravos Food provide Healthy and Affordable foods to you anywhere in HO"
        />
        <meta
          name="keywords"
          content="food,bravos bravosfood,bravo burger,bravos food restaurant, bravosfoodgh, restaurant,bravo,restaurants near me,food near me,fast food near me,burger near me,pizza near me,burger king near me"
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
      <div className="">
        <Nav />
      </div>
      <main className="w-full">
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
        <section className="m-10  md:ml-24 xl:ml-14 ">
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
