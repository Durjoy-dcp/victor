import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ITasks } from "../../model/ITasks";
import { DeleteTask } from "../DeleteTask/DeleteTask";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import toast from "react-hot-toast";
import CompletedSingleTask from "../CompletedSingleTask/CompletedSingleTask";
import { Button } from "flowbite-react";
import { AuthContext } from "../../Context/AuthProvider";

const CompletedTask: React.FC = () => {
  const { user } = useContext(AuthContext);
  // const [mytasks, setMyTasks] = useState<ITasks[]>([] as ITasks[]);
  const navigate = useNavigate();
  const uri = `http://localhost:5000/completed?user=${user?.email}`;
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
  const handleToDelete = (id: string): void => {
    DeleteTask(id, refetch);
  };
  const handleToNotCompleted = (id: string): void => {
    fetch(`http://localhost:5000/notcompleted?id=${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Marked as Not Completed");
          navigate("/mytask");
        }
      });
  };

  const handleToAddComment = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ): void => {
    e.preventDefault();
    const comment: string = e.currentTarget.comment.value;
    const data = { comment };
    fetch(`http://localhost:5000/comment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Comment updated");
          refetch();
        }
      })
      .catch((er) => {});
  };
  return (
    <div>
      <div className="container mx-auto m-2">
        <h1 className="text-3xl font-bold m-2">Completed Tasks</h1>
        <hr />
        <div className="grid md:grid-cols-3 grid-cols-1 m-2">
          {mytasks.map((mytask: ITasks) => (
            <CompletedSingleTask
              key={mytask._id}
              mytask={mytask}
              handleToAddComment={handleToAddComment}
            >
              <div className="flex flex-wrap justify-center items-center">
                <button
                  className="m-3"
                  onClick={() => handleToDelete(mytask._id)}
                >
                  <RiDeleteBin5Line className="text-2xl text-gray-400 hover:text-gray-600" />
                </button>
                <Button
                  size="xs"
                  onClick={() => handleToNotCompleted(mytask._id)}
                >
                  NOT COMPLETED
                </Button>
              </div>
            </CompletedSingleTask>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
