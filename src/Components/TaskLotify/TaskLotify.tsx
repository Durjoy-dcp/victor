import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
const TaskLotify: React.FC = () => {
  const container = useRef<any>(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/task.json"), // the path to the animation json
    });

    return () => instance.destroy();
  }, []);
  return <div ref={container}></div>;
};

export default TaskLotify;
