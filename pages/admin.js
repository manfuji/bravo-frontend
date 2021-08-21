import Cards from "../components/Cards";
import AdminCard from "../components/component/adminCard";

function admin() {
  return (
    <div className="flex w-screen">
      <div className="min-h-screen bg-gray-200 w-40 md:w-50 flex flex-col p-2">
        <div className="mb-6 p-2 font-extrabold text-xl text-red-700">
          Bravo Foods
        </div>

        <div className=" flex flex-col max-h-24 text-lg text-blue-900 font-semibold pl-2">
          <div className="active:text-blue-700 cursor-pointer">Home</div>
          <div className="active:text-blue-700 cursor-pointer">Recommended</div>
        </div>
        <div className="m-1 p-2 text-lg font-bold text-blue-900">
          <div className="active:text-blue-700 cursor-pointer">
            All Products
          </div>
          <div className="active:text-blue-700 cursor-pointer">Users</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll mt-10 ml-6">
        <button className="rounded-lg p-2 bg-green-600">Add Product</button>
        <AdminCard />
      </div>
    </div>
  );
}

export default admin;
