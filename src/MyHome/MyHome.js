import React from "react";
import lottie from "lottie-web";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./MyHome.css";

const MyHome = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./move.json"),
    });
  }, []);

  return (
    <div>
      <div className=" d-md-flex d-lg-flex d-xl-flex justify-content-around ">
        <div className="w-1000. textside mt-5 ">
          <h1 className="text-center ">
            Achieve Your Skill from{" "}
            <span className="text-warning">Your Home</span>
          </h1>
          <p className="mt-5 ">
            The biggest advantage of an online course is that your classroom and
            instructor (theoretically) are available 24 hours a day, seven days
            a week. Your only excuse for missing class is not getting online!
            Otherwise, everything is available to you. You can get
            announcements, access notes, review assignments, take practice
            quizzes, discuss questions, chat with fellow students and study any
            time you want. Other than certain due dates, you make your own
            schedule for completing the requirements of the course.
            <br /> <br /> <br />
            <Link to="/course">
              <Button>Lets start </Button>
            </Link>
          </p>
        </div>

        <div className=" w-14 animation custom-vh1">
          <div className="container " ref={container}></div>
        </div>
      </div>
      <div className="custom-vh1"></div>
    </div>
  );
};

export default MyHome;
