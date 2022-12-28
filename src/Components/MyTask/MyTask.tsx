import React, { useEffect, useState } from "react";
import { ITasks } from "../../model/ITasks";

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
      <h1>My task page </h1>
    </div>
  );
};

export default MyTask;
