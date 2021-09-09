import Navlist from "./Navlist";
import Image from "next/image";
import logo from "../public/Logo.jpg";
import {
  HomeIcon,
  IdentificationIcon,
  PhoneIcon,
  PhotographIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
function Navbar() {
  return (
    <div className="sticky top-0 z-50 min-w-screen">
      <div className="flex justify-between pt-2 h-22 items-center bg-gray-200">
        <div className="ml-4 md:ml-6 mt-[3px] flex md:space-x-4 space-x-2 items-center">
          <div>
            <Link href="/">
              <a className="">
                <Image src={logo} height="60" width="70" />
              </a>
            </Link>
          </div>
          <div>
            <h1 className="font-bold md:text-4xl text-base text-red-700">
              BRAVOS FOOD
            </h1>
            <p className="hidden md:inline-flex text-sm text-red-900 font-bold">
              {" "}
              Call: 0247130081
            </p>
          </div>
        </div>
        <div className="flex flex-grow justify-end md:space-x-3 md:justify-evenly md:max-w-3xl">
          <Navlist Icon={HomeIcon} name="Home" link="/" />
          <Navlist Icon={IdentificationIcon} name="About" link="/about" />
          <Navlist Icon={PhoneIcon} name="Contact" link="/contact" />
          <Navlist Icon={LocationMarkerIcon} name="Location" link="/location" />
          <Navlist Icon={CalendarIcon} name="Events" link="/gallery" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
