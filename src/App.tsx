import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import AddTask from "./Components/AddTask/AddTask";
import MyTask from "./Components/MyTask/MyTask";
import CompletedTask from "./Components/CompletedTask/CompletedTask";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SingUp/SignUp";
import Home from "./Components/Home/Home";
import Private from "./Private/Private";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addtask",
          element: (
            <Private>
              <AddTask></AddTask>
            </Private>
          ),
        },
        {
          path: "/mytask",
          element: (
            <Private>
              <MyTask></MyTask>
            </Private>
          ),
        },
        {
          path: "/completedtask",
          element: (
            <Private>
              <CompletedTask></CompletedTask>
            </Private>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
