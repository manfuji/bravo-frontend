import S1 from "../public/locations/S1 (1).jpg";
import S2 from "../public/locations/S1 (9).jpg";
import S3 from "../public/locations/S1 (3).jpg";
import S4 from "../public/locations/S1 (4).jpg";
import S5 from "../public/locations/S1 (8).jpg";
import Sa from "../public/locations/S2 (1).jpg";
import Sb from "../public/locations/S2 (2).jpg";
import Sc from "../public/locations/S2 (13).jpg";
import Sd from "../public/locations/S2 (4).jpg";
import Sf from "../public/locations/S2 (12).jpg";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
function Gallery() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-screen bg-gray-100 text-center text-2xl font-bold text-red-700">
        <div>
          <Head>
            <title>Bravo - Gallery</title>
            <meta
              name="description"
              content="Bravos Food is Food restaurant located in Ho at;1st Floor, Ahoe Satellite Market Shopping Center And Top Floor,Bayport Office,Opposite High Court, Adjacent to NHIS,Old Traffic
          Light,Ho"
            />
            <meta property="og:title" content="Bravos Food locate us in Ho  " />
            <meta property="og:site_name" content="BRAVOS FOOD - Gallery" />
            <meta property="og:type" content="food" />
            <meta property="og:url" content="www.bravosfoodgh.com/gallery" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="h-full w-full bg-gray-100 flex flex-col text-center pb-10">
            <div className="mb-16 mt-12 p-4">
              <div className="mb-4">
                <h1 className=" uppercase text-xl font-extrabold tracking-widest text-red-600">
                  Site 1
                </h1>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:min-w-full space-y-2 md:space-x-2 w-80 mx-auto">
                  <div className="">
                    <Image src={S1} />
                  </div>

                  <div className="">
                    <Image src={S3} />
                  </div>
                  <div className="">
                    <Image src={S4} />
                  </div>
                  <div className=" ">
                    <Image src={S2} />
                  </div>
                  <div className=" ">
                    <Image src={S5} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20 p-4">
              <div className="mb-4">
                <h1 className=" uppercase text-xl font-extrabold tracking-widest text-red-600">
                  Site 2
                </h1>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:min-w-full space-y-2 md:space-x-2 w-80 mx-auto">
                  <div className="">
                    <Image src={Sa} />
                  </div>

                  <div className="">
                    <Image src={Sb} />
                  </div>
                  <div className="">
                    <Image src={Sf} />
                  </div>
                  <div className=" ">
                    <Image src={Sc} />
                  </div>
                  <div className=" ">
                    <Image src={Sd} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20 p-4">
              <div className="mb-4">
                <h1 className=" uppercase text-xl font-extrabold tracking-widest text-red-600">
                  Events
                </h1>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:min-w-full space-y-2 md:space-x-2 w-80 mx-auto">
                  <div className="">
                    <Image src={Sa} />
                  </div>

                  <div className="">
                    <Image src={Sb} />
                  </div>
                  <div className="">
                    <Image src={Sf} />
                  </div>
                  <div className=" ">
                    <Image src={Sc} />
                  </div>
                  <div className=" ">
                    <Image src={Sd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
