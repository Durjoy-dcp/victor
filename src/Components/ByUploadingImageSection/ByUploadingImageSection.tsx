import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
const ByUploadingImageSection: React.FC = () => {
  const container = useRef<any>(null);
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
  return (
    <div className="my-3  text-center md:text-start ">
      <div className="md:flex  block items-center">
        <div ref={container}></div>
        <div>
          <h1 className="text-4xl font-bold">Create beautiful memories</h1>
          <p className="text-gray-500">
            Upload daily images to create memories{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ByUploadingImageSection;
