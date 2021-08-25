import Navlist from "./Navlist";
import Image from "next/image";
import logo from "../public/Logo.jpg";
import {
  HomeIcon,
  IdentificationIcon,
  PhoneIcon,
  PhotographIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between pt-2 h-22 items-center bg-gray-200">
        <div className="ml-4 md:ml-6 mt-[3px]">
          <Link href="/">
            <a>
              <Image src={logo} height="60" width="70" />
            </a>
          </Link>
        </div>
        <div className="flex flex-grow justify-end md:space-x-3 md:justify-evenly md:max-w-3xl">
          <Navlist Icon={HomeIcon} name="Home" link="/" />
          <Navlist Icon={IdentificationIcon} name="About" link="/about" />
          <Navlist Icon={PhoneIcon} name="Contact" link="/contact" />
          <Navlist Icon={LocationMarkerIcon} name="Location" link="/location" />
          <Navlist Icon={PhotographIcon} name="Gallery" link="/gallery" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
