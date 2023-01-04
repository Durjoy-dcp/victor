import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { ITasks } from "../../model/ITasks";
interface ISingle {
  key: string;
  mytask: ITasks;
  handleToAddComment: any;
  children?: React.ReactNode;
}

const CompletedSingleTask: React.FC<ISingle> = ({
  mytask,
  children,
  handleToAddComment,
}) => {
  const { title, details, date, _id, comment } = mytask;
  const { dark } = useContext(AuthContext);
  return (
    <div className="p-2">
      <div className="max-w-sm p-6  border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between">
          <h5
            className={`${
              dark ? "text-gray-400" : " text-gray-900"
            } mb-2 text-xl font-bold tracking-tight dark:text-white`}
          >
            {title}
          </h5>
          <p>{date}</p>
        </div>

        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
          {details}
        </p>
        <form
          className=""
          onBlur={(e) => handleToAddComment(e, _id)}
          onSubmit={(e) => handleToAddComment(e, _id)}
        >
          <div className="grid grid-cols-2 md:gap-6 my-2">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="comment"
                id="comment"
                maxLength={25}
                className={`${
                  dark ? "text-gray-400" : ""
                } block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                required
                defaultValue={comment}
              />
              <label
                htmlFor="comment"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Comment
              </label>
            </div>
          </div>

          <div className="flex flex-wrap items-center"></div>
        </form>

        {children}
      </div>
    </div>
  );
};

export default CompletedSingleTask;
