import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { IPics } from "../../model/IPics";
import Spinner from "../Spinner/Spinner";

const Mymedia: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [picdata, setPicdata] = useState<IPics[]>([] as IPics[]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/mymedia?user=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPicdata(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  console.log(picdata);
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold m-2 p-2">My Media</h1>
      <hr />

      {picdata.length === 0 ? (
        <div>
          <div className=" grid h-screen place-items-center ">
            <div className="text-center">
              <h1 className="md:text-9xl text-7xl font-bold p-2">Empty!!</h1>
              <h1 className="text-2xl font-bold py-3 p-2 ">
                <span className="animate-pulse">Add Photos on</span>
                <Link to="/addtask" className="inline-block">
                  <Button gradientDuoTone="purpleToBlue" className="">
                    Add Photo
                  </Button>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-2">
          <div className="flex flex-wrap gap-6">
            {picdata.map((pic) => (
              <img
                key={pic._id}
                className="max-w-xs max-h-52  p-2 pb-5 shadow-lg"
                src={pic.img}
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mymedia;
