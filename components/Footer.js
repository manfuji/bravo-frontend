import {} from "@heroicons/react/solid"
function Footer() {
    return (
      <div className="bg-red-600 text-white w-full h-full pt-3 pb-12">
        <div className=" grid grid-cols-1 md:grid-cols-2 pt-3">
          <div className="flex flex-col text-center">
            <ul>
              <h1 className="font-semibold text-lg sm:font-extrabold sm:text-xl">
                Follow us on
              </h1>
              <p className=" font-medium sm:text-md">
                <li>FACEBOOK:bravosfoodgh </li>
                <li>INSTAGRAM:bravosfood </li>
                <li>TWITTER:bravosfood@twitter.com </li>
              </p>
            </ul>
          </div>
          <div className="flex flex-col justify-evenly ml-5">
            <h1 className="font-semibold text-lg md:text-2xl">Our Services </h1>
            <ul>
              <li> We do instant delivery services. </li>
              <li> We take order for large Occasions like:</li>
              <li>1.Wedding </li>
              <li>2.Engagements</li>
              <li>3.Outdooring </li>
              <li>4.Executive Meetings</li>
              <li>5.Dinner Services</li>
              <li>6.Party</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer
