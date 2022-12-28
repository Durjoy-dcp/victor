import React, { useEffect, useState } from "react";
import { ITasks } from "../../model/ITasks";
import SingleTask from "../SingleTask/SingleTask";

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
          {mytasks.map((mytask, idx) => (
            <SingleTask key={mytask._id}></SingleTask>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTask;
