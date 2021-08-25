import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import banner from "../public/locations/S1 (9).jpg";
import Navigation from "../components/Navigation";
function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Bravos Food is Food restaurant located in Ho providing service all over the capital of the volta region"
        />
        <meta property="og:title" content="Bravos Food is at your service" />
        <meta property="og:site_name" content="BRAVOS FOOD About Us" />
        <meta property="og:type" content="food" />
        <meta property="og:url" content="www.bravosfoodgh.com/about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen pb-12 w-full bg-gray-100 ">
        <div>
          <Navbar />
        </div>
        <div className=" relative h-[350px] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[900px] xl:w-[1000px] mx-auto mb-12">
          <Image src={banner} layout="fill" objectFit="cover" />
        </div>
        <div className="my-5 mx-8 w-7xl sm:mx-16 ">
          <h1 className="tracking-widest font-bold text-2xl text-center text-gray-600">
            Brief History
          </h1>
          <blockquote className="font-mono ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </blockquote>

          <h1 className="tracking-widest font-bold text-xl text-start mt-1 text-gray-600">
            Core Value
          </h1>
          <p className=" font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <h1 className="tracking-widest font-bold text-xl text-start mt-1 text-gray-600">
            Mission Statement
          </h1>
          <p className="font-mono">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <h1 className="tracking-widest font-bold text-xl text-start mt-1 text-gray-600">
            Vission Statement
          </h1>
          <p className="font-mono">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
