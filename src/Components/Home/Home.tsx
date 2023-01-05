import React from "react";
import task from "../assets/task.png";
import { motion } from "framer-motion";
import Tpyeanim from "../Typeanim/Typeanim";
import WithVictor from "../WithVictor/WithVictor";
const Home: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-wrap items-center justify-center ">
        <div>
          <div className="flex mx-auto items-center justify-center">
            <img
              src="https://i.ibb.co/N9FpBb8/2129902a6b939c745ff7b78166bcec5f-removebg-preview.png"
              className="mr-3  md:h-40  h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-5xl  md:text-9xl whitespace-nowrap font-semibold dark:text-white">
              Victor
            </span>
          </div>
          {/* <motion.div
            transition={{
              x: {
                duration: 2,
                yoyo: Infinity,
                ease: "easeIn",
              },
            }}
            animate={{ x: ["100px", "0px"] }}
          >
            <p className="text-gray-400 md:text-3xl text-xl text-center my-2 p-2">
              Make the most of your task list with{" "}
              <span className="text-black animate-pulse	"> Victor</span>
            </p>
          </motion.div> */}
          <div className="text-gray-400 md:text-3xl text-xl text-center my-2 p-2">
            <Tpyeanim></Tpyeanim>
          </div>
        </div>

        <div>
          <img src={task} className="w-10/12 mx-auto" alt="" />
        </div>
        <WithVictor></WithVictor>
      </div>
    </div>
  );
};

export default Home;
