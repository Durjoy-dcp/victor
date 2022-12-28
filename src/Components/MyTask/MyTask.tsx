import React, { useEffect, useState } from "react";
import { ITasks } from "../../model/ITasks";
import SingleTask from "../SingleTask/SingleTask";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const MyTask: React.FC = () => {
  const [mytasks, setMyTasks] = useState<ITasks[]>([] as ITasks[]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/mytasks")
      .then((res) => res.json())
      .then((data) => setMyTasks(data));
  }, []);

  const handleToCompleted = (id: string): void => {
    console.log(id);
    fetch(`http://localhost:5000/completed?id=${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Marked as Completed");
          navigate("/completedtask");
        }
      });
  };

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
                <button
                  className="m-3"
                  onClick={() => handleToCompleted(mytask._id)}
                >
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
