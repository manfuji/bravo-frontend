import Image from "next/image";
import Link from "next/link";
function Card({ Picture, title, desc, price, id }) {
  return (
    <div>
      <div className="relative bg-gray-100 text-justify m-2 transform transition duration-100 hover:scale-110">
        <div className="object-cover">
          <Image src={Picture} className=" " width="350" height="300" />
        </div>
        <div>
          {/*}  <Link href={`product/${id}`}>
            <a className="no-underline hover:text-blue-700 focus:text-blue-800">
              <div className="flex flex-row mt-4 pl-2 justify-between">
                <span className="text-black">{title}</span>
              </div>
            </a>
  </Link> */}
          <div className="flex flex-row justify-between p-2">
            <button className="bg-red-700 py-2 px-6 items-center rounded-md text-white font-medium">
              <a
                className="text-white no-underline"
                href="https://wa.me/233545992182"
              >
                {" "}
                ORDER
              </a>
            </button>

            <button className="bg-red-700 py-2 px-6 items-center rounded-md text-white font-medium">
              <a className="text-white no-underline" href="tel:233247130081">
                {" "}
                CALL
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
