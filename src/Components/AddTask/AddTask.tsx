import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ImageUpload from "../ImageUpload/ImageUpload";
import Spinner from "../Spinner/Spinner";

const AddTask: React.FC = () => {
  const { user } = useContext(AuthContext);
  const current = new Date();
  const navigate = useNavigate();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [loading, setLoading] = useState<boolean>(false);
  const { dark } = useContext(AuthContext);
  const handleToSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const title: string = event.currentTarget.task_title.value;
    const details: string = event.currentTarget.task_details.value;

    const data = {
      title,
      details,
      date: date,
      isComplete: false,
      user: user?.email,
      comment: "",
    };
    setLoading(true);

    fetch("https://victor-server-2.vercel.app/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Task added");
          setLoading(false);
          navigate("/mytask");
        } else {
          setLoading(false);
          toast.error("Sorry! faced challenges ");
        }
      })
      .catch((er) => {
        setLoading(false);
        toast.error("Sorry! faced challenges on server");
      });

    // console.log(title, details);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="p-2">
          <h1 className="text-3xl font-bold m-2 text-center">Add Your Task</h1>
          {/* <hr /> */}
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <form
              className={`${
                dark ? "border rounded-lg" : ""
              } m-6 shadow-lg p-5 `}
              onSubmit={handleToSubmit}
            >
              <div className="grid grid-cols-2 md:gap-6 my-2">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="task_title"
                    id="task_title"
                    maxLength={25}
                    className={`${
                      dark ? "text-gray-400" : ""
                    } block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                    required
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
                  name="task_details"
                  id="task_details"
                  maxLength={50}
                  className={`${
                    dark ? "text-gray-400" : ""
                  } block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
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

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
            </form>
          )}
        </div>
        <div>
          <ImageUpload></ImageUpload>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
