import Image from "next/image";
import Navbar from "../../components/Navbar";

function SingleProduct({
  Product_name,
  description,
  picture,
  price,
  other_price,
}) {
  console.log(Product_name, description);
  return (
    <div className="bg-gray-100 min-h-screen  min-w-full items-center">
      <Navbar />

      <div className="flex flex-col md:flex-row md:max-w-4xl shadow-xl items-center h-full max-w-xl mx-auto bg-gray-300 mt-10 md:mt-20">
        <div className="object-cover">
          <Image src={picture} height="400" width="600" />
        </div>
        <div className="text-justify mx-3 py-3">
          <p className="tracking-widest text-3xl font-extrabold ">
            {Product_name}
          </p>
          <div className="flex justify-between font-bold text-red-600">
            <p className="text-lg font-sans ">{description}</p>
            <p className="text-lg font-bold p-1">{price}</p>
          </div>

          <div className="flex flex-row justify-between">
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
SingleProduct.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://bravosfood.pythonanywhere.com/api/product/${query.id}`
  );
  const pro = res.json();
  return pro;
};
export default SingleProduct;
