import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
const NavHeader: React.FC = () => {
  const { user, logOut, dark, setdark } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleToLogOut = () => {
    logOut();
    navigate("/");
  };
  const handleToTheme = () => {
    setdark(!dark);
    console.log(dark);
  };

  return (
    <div className={`${dark ? "bg-zinc-900" : ""}`}>
      {/* <img
              src="https://i.ibb.co/N9FpBb8/2129902a6b939c745ff7b78166bcec5f-removebg-preview.png"
              className="h-6 mr-3 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Victor
            </span> */}
      <div className="container mx-auto  ">
        <Navbar
          fluid={true}
          rounded={true}
          className={`${dark ? "bg-zinc-900" : ""}`}
        >
          <div className="">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/N9FpBb8/2129902a6b939c745ff7b78166bcec5f-removebg-preview.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Victor
              </span>
            </Link>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="">
            <button
              onClick={handleToTheme}
              className={`${
                dark ? "text-yellow-400" : "text-gray-700"
              } rounded hover:bg-gray-100 text-xl md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-2 p-2 `}
            >
              {dark ? <BsSunFill /> : <BsMoonFill></BsMoonFill>}
            </button>
            {user && user?.email ? (
              <>
                <Link
                  to="/addtask"
                  className={`${
                    dark ? "text-gray-400" : "text-gray-700"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-2 p-2 `}
                >
                  Add task
                </Link>
                <Link
                  to="/mytask"
                  className={`${
                    dark ? "text-gray-400" : "text-gray-700"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-2 p-2 `}
                >
                  My task
                </Link>
                <button></button>{" "}
                <Link
                  to="/completedtask"
                  className={`${
                    dark ? "text-gray-400" : "text-gray-700"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-2 p-2 `}
                >
                  Completed Task
                </Link>
                <Link
                  to="/mymedia"
                  className={`${
                    dark ? "text-gray-400" : "text-gray-700"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-2 p-2 `}
                >
                  My media
                </Link>
                <Button onClick={handleToLogOut} className=" border" size="xs">
                  Logout
                </Button>
                <p className="text-xs  rounded  md:border-0 py-1">
                  {user?.email}
                </p>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`${
                    dark ? "text-gray-400" : "text-gray-700"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-2 p-2 `}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`${
                    dark ? "text-gray-400" : "text-gray-700"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-2 p-2 `}
                >
                  Sign Up
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavHeader;
