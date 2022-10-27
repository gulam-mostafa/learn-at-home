import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import "./Topics.css";
const ref = React.createRef();

const Topics = () => {
  const courses = useLoaderData();

  return (
    <div ref={ref} className=" px-3 bg-light rounded">
      <div className="px-4">
        <h1 className="text-center ">
          Course Name: <span className="text-warning"> {courses.title}</span>{" "}
        </h1>
        <p className="">{courses.details}</p>
        <p>Total sold: {courses.total_sold}</p>
        <p>Course Price: {courses.price} $ Only</p>
        <p>Course Rating: {courses.rating.number}</p>
        <p>Course Quality: {courses.rating.badge}</p>

        <Link className="me-4" to={`/checkout/${courses._id}`}>
          <Button variant="primary">Buy Now</Button>
        </Link>
        <Link type="button" class="btn btn-success" to="/course">
          Back
        </Link>
      </div>

      <div className="custom-vh ">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button className="bg-warning my-5 " onClick={toPdf}>
              Download Pdf
            </Button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Topics;
