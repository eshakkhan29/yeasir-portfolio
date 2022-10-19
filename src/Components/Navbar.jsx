import Link from "next/link";
import { PhoneIcon } from "./Icons";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="w-52">
        <img className="w-full" src="logo1.png" alt="logo" />
      </div>
      <div className="flex gap-12 py-11 items-center">
        <ul className="flex text-secondary gap-14 border-r">
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#">Home</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#">About</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#">Services</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#">Portfolio</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium pr-14  ">
              <Link href="#">Contact Me</Link>
            </span>
          </li>
        </ul>
        <div className="flex gap-4">
          <PhoneIcon />
          <span className="text-primary">
            <Link href="tel:01947555458">+880 19475-55458</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
