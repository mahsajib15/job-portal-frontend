import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mb-5 bg-gray-300 fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <h1 className="text-2xl font-bold">
              Proyo<span className="text-red-600">jon</span>
            </h1>
          </div>
        </Link>

        {/* ---------------------search-------------------- */}

        {/* <div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:max-w-4xl mx-auto px-4 py-3">
            <div className="relative sm:w-auto flex border border-black rounded-md overflow-hidden bg-white bg-opacity-75">
              <input
                type="text"
                placeholder="Search a Service"
                className="outline-none border-none w-32 px-4 py-2 bg-transparent"
              />
              <div className="flex items-center border-l px-3">
                <span className="text-gray-500">
                  <MapPinIcon className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  placeholder="District, Upozilla"
                  className="outline-none border-none bg-transparent px-2"
                />
                <button
                  className="bg-gray-300 p-2 rounded-md"
                >
                  <SearchIcon className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/shop"}>
              <li>Shop</li>
            </NavLink>
            <NavLink to={"/skills"}>
              <li>Skills</li>
            </NavLink>
          </ul>
          <div>
            <Link to={"/login"}>
              <Button variant="outline" className="mx-3">
                Login
              </Button>
            </Link>
            <Link to={"/find-job"}>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Find Job
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="p-2">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-bold">Job Portal</h1>
          <button onClick={toggleMobileMenu} className="p-2">
            <X />
          </button>
        </div>
        <ul className="flex flex-col p-4 font-medium">
          <NavLink to={"/"}>
            <li className="py-2" onClick={toggleMobileMenu}>
              Home
            </li>
          </NavLink>
          <NavLink to={"/jobs"}>
            <li className="py-2" onClick={toggleMobileMenu}>
              Jobs
            </li>
          </NavLink>
          <div className="flex flex-col mt-4">
            <Link to={"/login"}>
              <Button variant="outline" className="mb-2 w-full">
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                Sign Up
              </Button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
