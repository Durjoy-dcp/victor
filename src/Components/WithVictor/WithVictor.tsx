import React from "react";
import TaskLotify from "../TaskLotify/TaskLotify";
import { AiFillCheckCircle } from "react-icons/ai";
const WithVictor: React.FC = () => {
  return (
    <div className="md:flex  flex-row-reverse block items-center justify-between text-center md:text-start">
      <div>
        <TaskLotify></TaskLotify>
      </div>
      <div>
        <h1 className="text-4xl my-3 font-bold">With Victor you can</h1>
        <ul>
          <li className="">
            <AiFillCheckCircle className="inline text-blue-400 mx-3 items-center text-xl"></AiFillCheckCircle>{" "}
            Proper Maintain your time
          </li>
          <li>
            {" "}
            <AiFillCheckCircle className="inline text-blue-400 mx-3 items-center text-xl"></AiFillCheckCircle>{" "}
            You will not forget your task
          </li>
          <li>
            {" "}
            <AiFillCheckCircle className="inline text-blue-400 mx-3 items-center text-xl"></AiFillCheckCircle>{" "}
            Get your task ready on time{" "}
          </li>
          <li>
            {" "}
            <AiFillCheckCircle className="inline text-blue-400 mx-3 items-center text-xl"></AiFillCheckCircle>{" "}
            Add feedback on your note
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WithVictor;
