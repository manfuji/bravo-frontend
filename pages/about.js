import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import banner from "../public/locations/S1 (9).jpg";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Bravos Food is Food restaurant located in Ho providing service all over the capital of the volta region"
        />
        <meta
          name="keywords"
          content="bravosfoodgh,bravosfood restaurant - food, Volta region restaurants, Ho restaurants, Pizza, Golden Spoon Restaurants"
        />
        <meta property="og:title" content="Bravos Food is at your service" />
        <meta property="og:site_name" content="BRAVOS FOOD About Us" />
        <meta property="og:type" content="food" />
        <meta property="og:url" content="www.bravosfoodgh.com/about" />
        <link rel="icon" href="/favi.ico" />
      </Head>
      <div className="min-h-screen pb-12 w-full bg-gray-100 ">
        <div>
          <Navbar />
        </div>
        <div className=" relative h-[200px] md:h-[350px] object-contain w-[300px] sm:w-[450px] md:w-[550px] lg:w-[900px] xl:w-[1000px] mx-auto mb-12">
          <Image src={banner} layout="fill" objectFit="cover" />
        </div>
        <div className="my-5 mx-8 w-7xl lg:mx-16 ">
          <h1 className="tracking-widest font-extrabold text-3xl text-center text-gray-900">
            About Us
          </h1>
          <blockquote className="font-semibold text-md max-w-4xl text-center mx-auto">
            Bravos Food (Golden Spoon Restaurants) are a class of Ultra-Modern
            Restaurants with Executive Cocktail Bars (Personalized and Exclusive
            Rooms), in Ho Municipality. The vison of Bravos is to create a
            ‘’Culture of Excellence in Customer Service’’. We don’t just provide
            ‘’Bravo Meals’’ but foster talent development of our Human Capital
            who are our most important assets.
          </blockquote>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
