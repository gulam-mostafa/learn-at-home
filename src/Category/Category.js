import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Category = () => {
  // console.log(topic)
  const topics = useLoaderData();
  

  return (
    <div className="px-2 card mb-4 pb-5 " >
      <div>
        {topics.map((category) => (
          <div key={category._id}>
            <h2 className="text-center">
              {" "}
              Course Name:{" "}
              <span className="text-primary fs-1 ">{category.title}</span>
            </h2>
            <Card.Img className="" variant="top" src={category.image_url} />
            <p className="px-2 mt-3 text-dark">{category.details}</p>
            <div className="d-flex justify-content-between px-4">
                <p>Total sold: ({category.total_sold})</p>
                <p className=" rounded p-1">Rating : {category.rating.number}</p>
            </div>

            <Link className="text-center "   to={`/checkout/${category._id}`} >    <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Buy Now</button></Link>
          </div>
          
        ))}
      </div>
    

    <Link className="text-start " to='/course'>  <button type="button" class="btn btn-warning btn-lg btn-block px-4 mb-2">Back</button></Link>
    </div>
  );
};

export default Category;
