import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { MdFileUpload } from "react-icons/md";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

interface Iimage {
  img: string;
  user: string | null;
}

const ImageUpload: React.FC = () => {
  const container = useRef<any>(null);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const imageHostKey = process.env.REACT_APP_imgbb;
  const [selectedImage, setSelectedImage] = useState<any>();
  // This function will be triggered when the file field change
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img-upload.json"), // the path to the animation json
    });

    return () => instance.destroy();
  }, []);

  const handleToUploadImage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const img = e.currentTarget.img.files[0];
    console.log(img);
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success && user?.email) {
          const imgdata: Iimage = {
            img: imageData.data.url,
            user: user?.email,
          };
          console.log(imgdata);
          fetch(`https://victor-server-2.vercel.app/insertpic`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(imgdata),
          }).then((res) => {
            setLoading(false);

            navigate("/mymedia");
          });
        }
      });
  };
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="">
      <div className="text-center">
        <div ref={container} className="w-1/2 mx-auto"></div>
        <h3 className="text-2xl font-bold p-2">
          UPLOAD IMAGES TO CREATE <br /> MEMORIES EVERYDAY
        </h3>
      </div>
      <div className=" max-w-sm mx-auto ">
        <div className=" border shadow-lg rounded-lg p-2   ">
          <h3 className="text-2xl p-3">Image Upload here</h3>
          <div></div>
          <form className="p-2 self-end" onSubmit={handleToUploadImage}>
            {selectedImage && (
              <div>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  className="max-w-xs mx-auto p-2"
                  alt="Thumb"
                />
              </div>
            )}
            <div className="mx-auto">
              <input
                className="file-input file-input-bordered mb-5 file-input-sm rounded-lg "
                name="img"
                accept="image/*"
                type="file"
                onChange={imageChange}
              />
            </div>
            <div className=" flex justify-center">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  flex items-center justify-center ">
                UPLOAD <MdFileUpload className="" type="submit" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
