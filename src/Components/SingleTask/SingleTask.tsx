import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { ITasks } from "../../model/ITasks";

interface ISingle {
  key: string;
  mytask: ITasks;
  children?: React.ReactNode;
  handleToUpdate: any;
}

const SingleTask: React.FC<ISingle> = ({
  mytask,
  children,
  handleToUpdate,
}) => {
  const { dark } = useContext(AuthContext);
  //   console.log(mytask);
  const { title, details, date, _id } = mytask;
  return (
    <>
      <form
        className=" m-6 border p-2 rounded-lg shadow-lg "
        onSubmit={(e) => handleToUpdate(e, _id)}
      >
        <div className="grid grid-cols-2 md:gap-6 my-2">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="task_title"
              id="task_title"
              maxLength={25}
              className={`${
                dark ? " text-white  text-gray-400" : ""
              } block py-2.5 px-0 w-full  text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
              defaultValue={title}
            />
            <label
              htmlFor="task_title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div>
            <h1 className="text-sm text-gray-500 my-2">{date}</h1>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group my-2">
          <input
            type="text"
            defaultValue={details}
            name="task_details"
            id="task_details"
            maxLength={50}
            className={`${
              dark ? " text-white  text-gray-400" : ""
            } block py-2.5 px-0 w-full  text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor="task_details"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Task Details
          </label>
        </div>
        <div className="flex flex-wrap items-center">
          <Button size="xs" type="submit">
            UPDATE
          </Button>
          {children}
        </div>
      </form>
    </>
  );
};

export default SingleTask;
