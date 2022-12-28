import React from "react";
import { ITasks } from "../../model/ITasks";

interface ISingle {
  key: string;
  mytask: ITasks;
  children?: React.ReactNode;
}

const SingleTask: React.FC<ISingle> = ({ mytask, children }) => {
  //   console.log(mytask);
  const { title, details, date } = mytask;
  return (
    <div className="p-2">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p>{date}</p>
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {details}
        </p>

        {children}
      </div>
    </div>
  );
};

export default SingleTask;
