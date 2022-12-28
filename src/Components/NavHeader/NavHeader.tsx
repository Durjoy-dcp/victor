import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const NavHeader: React.FC = () => {
  return (
    <div>
      {/* <img
              src="https://i.ibb.co/N9FpBb8/2129902a6b939c745ff7b78166bcec5f-removebg-preview.png"
              className="h-6 mr-3 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Victor
            </span> */}
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <div className="">
            {" "}
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
          <Navbar.Collapse>
            <Link to="/addtask">Add task</Link>

            <Link to="/mytask">My task</Link>

            <Link to="/completedtask">Completed Task</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavHeader;
