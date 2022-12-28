import React, { useEffect, useState } from "react";
import { ITasks } from "../../model/ITasks";
import SingleTask from "../SingleTask/SingleTask";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
const MyTask: React.FC = () => {
  const [mytasks, setMyTasks] = useState<ITasks[]>([] as ITasks[]);
  useEffect(() => {
    fetch("http://localhost:5000/mytasks")
      .then((res) => res.json())
      .then((data) => setMyTasks(data));
  }, []);
  console.log(mytasks);
  return (
    <div>
      <h1>My tasks</h1>
      <div className="container mx-auto m-2">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {mytasks.map((mytask) => (
            <SingleTask key={mytask._id} mytask={mytask}>
              <div className="flex flex-wrap justify-center items-center">
                <button className="m-3">
                  <BiMessageSquareEdit className="text-2xl text-gray-400 hover:text-gray-600" />
                </button>

                <button className="m-3">
                  <RiDeleteBin5Line className="text-2xl text-gray-400 hover:text-gray-600" />
                </button>
                <button className="m-3">
                  <GrCompliance className="text-xl text-red-100 hover:text-gray-600" />
                </button>
              </div>
            </SingleTask>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTask;
