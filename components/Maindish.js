import Image from "next/image";
import Food from "../public/JOOOBBS.jpg";
function Maindish() {
  return (
    <div>
      <div className=" relative h-[200px] md:h-[200px] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[900px] xl:w-[1000px] mx-auto ">
        <Image src={Food} layout="fill" objectFit="cover" />
        <div className="absolute z-30 lg:top-1/4 w-full lg:ml-10 top-3/4 text-white">
          <div className=" space-y-1">
            {" "}
            <button className="px-3 py-1.5 md:px-8 md:py-2 rounded-md font-sans bg-red-700 hover:text-lg shadow-2xl transition duration-50 animate-bounce">
              <a className="text-white no-underline" href="/Job">
                APPLY NOW!
              </a>
            </button>
          </div>
        </div>
        <div className="absolute z-0 -top-0 -left-0 h-full w-full bg-black opacity-30" />
      </div>
    </div>
  );
}

export default Maindish;
