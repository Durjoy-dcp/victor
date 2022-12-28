import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import AddTask from "./Components/AddTask/AddTask";
import MyTask from "./Components/MyTask/MyTask";
import CompletedTask from "./Components/CompletedTask/CompletedTask";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/addtask",
          element: <AddTask></AddTask>,
        },
        {
          path: "/mytask",
          element: <MyTask></MyTask>,
        },
        {
          path: "/completedtask",
          element: <CompletedTask></CompletedTask>,
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
