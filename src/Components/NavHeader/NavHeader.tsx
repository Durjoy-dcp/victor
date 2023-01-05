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
    // <div className={`${dark ? "bg-zinc-900" : ""}`}>
    // {/* <img
    //         src="https://i.ibb.co/N9FpBb8/2129902a6b939c745ff7b78166bcec5f-removebg-preview.png"
    //         className="h-6 mr-3 sm:h-10"
    //         alt="Flowbite Logo"
    //       />
    //       <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //         Victor
    //       </span> */}
    //   <div className="container mx-auto  ">
    //     <Navbar
    //       fluid={true}
    //       rounded={true}
    //       className={`${dark ? "bg-zinc-900" : ""}`}
    //     >
    //       <div className="">
    //         <Link to="/" className="flex items-center">
    //           <img
    //             src="https://i.ibb.co/N9FpBb8/2129902a6b939c745ff7b78166bcec5f-removebg-preview.png"
    //             className="mr-3 h-6 sm:h-9"
    //             alt="Flowbite Logo"
    //           />
    //           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    //             Victor
    //           </span>
    //         </Link>
    //       </div>
    //       <Navbar.Toggle />
    //       <Navbar.Collapse className="">
    //         <button
    //           onClick={handleToTheme}
    //           className={`${
    //             dark ? "text-yellow-400" : "text-gray-700"
    //           } rounded  text-xl md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
    //         >
    //   {dark ? <BsSunFill /> : <BsMoonFill></BsMoonFill>}
    // </button>
    // {user && user?.email ? (
    //   <>
    //     <Link
    //       to="/addtask"
    //       className={`${
    //         dark ? "text-gray-400" : "text-gray-700"
    //       } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
    //     >
    //       Add task
    //     </Link>
    //     <Link
    //       to="/mytask"
    //       className={`${
    //         dark ? "text-gray-400" : "text-gray-700"
    //       } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
    //     >
    //       My task
    //     </Link>
    //     <button></button>{" "}
    //     <Link
    //       to="/completedtask"
    //       className={`${
    //         dark ? "text-gray-400" : "text-gray-700"
    //       } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
    //     >
    //       Completed Task
    //     </Link>
    //     <Link
    //       to="/mymedia"
    //       className={`${
    //         dark ? "text-gray-400" : "text-gray-700"
    //       } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
    //     >
    //       My media
    //     </Link>
    //     <Button onClick={handleToLogOut} className=" border" size="xs">
    //       Logout
    //     </Button>
    //     <p className="text-xs  rounded  md:border-0 py-1">
    //       {user?.email}
    //     </p>
    //   </>
    // ) : (
    //   <>
    //     <Link
    //       to="/login"
    //       className={`${
    //         dark ? "text-gray-400" : "text-gray-700"
    //       } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
    //     >
    //       Login
    //     </Link>
    //     <Link
    //       to="/signup"
    //       className={`${
    //         dark ? "text-gray-400" : "text-gray-700"
    //       } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
    //     >
    //       Sign Up
    //     </Link>
    //   </>
    // )}
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </div>
    // </div>

    // normal flowbite

    <nav
      //  className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
      className={`${dark ? "bg-zinc-900" : ""}`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
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

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* <li>
              <Link
                to=""
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li> */}
            <li>
              <button
                onClick={handleToTheme}
                className={`${
                  dark ? "text-yellow-400" : "text-gray-700"
                } rounded  text-xl  md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  `}
              >
                {dark ? <BsSunFill /> : <BsMoonFill></BsMoonFill>}
              </button>
            </li>
            {user && user?.email ? (
              <>
                <li>
                  {" "}
                  <Link
                    to="/addtask"
                    className={`${
                      dark ? "text-gray-400" : "text-gray-700"
                    } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
                  >
                    Add task
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mytask"
                    className={`${
                      dark ? "text-gray-400" : "text-gray-700"
                    } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
                  >
                    My task
                  </Link>
                </li>
                <li>
                  <Link
                    to="/completedtask"
                    className={`${
                      dark ? "text-gray-400" : "text-gray-700"
                    } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
                  >
                    Completed Task
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mymedia"
                    className={`${
                      dark ? "text-gray-400" : "text-gray-700"
                    } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
                  >
                    My media
                  </Link>
                </li>
                <Button onClick={handleToLogOut} className=" border" size="xs">
                  Logout
                </Button>
                <p className="text-xs  rounded  md:border-0 py-1">
                  {user?.email}
                </p>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className={`${
                      dark ? "text-gray-400" : "text-gray-700"
                    } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3 p-2 `}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className={`${
                      dark ? "text-gray-400" : "text-gray-700"
                    } rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent my-3  p-2 `}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
