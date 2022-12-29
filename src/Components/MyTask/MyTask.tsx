import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ITasks } from "../../model/ITasks";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DeleteTask } from "../DeleteTask/DeleteTask";
import { AuthContext } from "../../Context/AuthProvider";
import SingleTask from "../SingleTask/SingleTask";

const MyTask: React.FC = () => {
  const { user } = useContext(AuthContext);
  // const [mytasks, setMyTasks] = useState<ITasks[]>([] as ITasks[]);
  const navigate = useNavigate();
  const uri = `http://localhost:5000/mytasks?user=${user?.email}`;
  const {
    data: mytasks = [] as ITasks[],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const res = await fetch(uri, {});
      const data = await res.json();
      return data;
    },
  });
  console.log(mytasks);
  // useEffect(() => {
  //   fetch("http://localhost:5000/mytasks")
  //     .then((res) => res.json())
  //     .then((data) => setMyTasks(data));
  // }, []);

  const handleToUpdate = (
    event: React.FormEvent<HTMLFormElement>,
    id: string
  ): void => {
    event.preventDefault();
    console.log("its calling");
    const title: string = event.currentTarget.task_title.value;
    const details: string = event.currentTarget.task_details.value;
    const data = { title, details };
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Task updated");
          refetch();
        }
      })
      .catch((er) => {});

    console.log(title, details, id);
  };

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
  const handleToDelete = (id: string): void => {
    DeleteTask(id, refetch);
  };

  console.log(mytasks);
  return (
    <div>
      <div className="container mx-auto m-2">
        <h1 className="text-3xl font-bold m-2">My tasks</h1>
        <hr />
        <div className="grid md:grid-cols-3 grid-cols-1">
          {mytasks.map((mytask: ITasks) => (
            <SingleTask
              key={mytask._id}
              mytask={mytask}
              handleToUpdate={handleToUpdate}
            >
              <div className="flex flex-wrap justify-center items-center">
                {/* <button className="m-3">
                  <BiMessageSquareEdit className="text-2xl text-gray-400 hover:text-gray-600" />
                </button> */}

                <button
                  className="m-3"
                  onClick={() => handleToDelete(mytask._id)}
                >
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
