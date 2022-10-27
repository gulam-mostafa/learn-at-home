import React, { useContext, useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import './CheckOut.css'



const CheckOut = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, logOut } = useContext(AuthContext);
  const checkOutData = useLoaderData();
  const { image_url, price, title, rating } = checkOutData;
  console.log(checkOutData);
  return (
    <div className="mb-4 vh-100">
      <h2 className="text-center">
        Name of Course:{" "}
        <span className="text-success">{checkOutData.title}</span>
      </h2>

      <div className="  d-flex  justify-content-center align-items-center ">
        <div className="card" style={{ height: "36rem", width: "28rem" }}>
          <h4 className="text-center mb-3">Please chhek Your Payment </h4>

          {user?.displayName ? (
            <div className="d-flex justify-content-center">
              <h3 className="text-center text-info me-2">
                {user?.displayName}
              </h3>
              <Image
                style={{ height: "3rem", width: "3rem" }}
                roundedCircle
                src={user?.photoURL}
              ></Image>
            </div>
          ) : (
            <div className="text-center ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <button
                class="btn btn-outline-danger m-2 text-center"
                type="button"
              >
                Submit
              </button>
            </div>
          )}

          <div className="d-flex justify-content-center m-5">
            {" "}
            <img
              className="rounded ml-5 "
              style={{ height: "8rem", width: "8rem" }}
              src={image_url}
              alt=""
            />
          </div>

          <h5 className="text-center">Name: {title}</h5>
          <div className="d-flex bg-light mt-4 justify-content-around">
            <h4>Price</h4>
            <h4>{price}$ Only</h4>
          </div>
          <div className="d-flex bg-light mt-4 justify-content-around">
            <h4>Rating </h4>
            <h4>{rating.number}</h4>
          </div>

          <div className="  w-100 d-flex flex-column  mt- justify-content-c align-items-cent">
          <Button onClick={handleShow} type="button" className="bg-danger my-3">
            Pay $ {price}
          </Button>

          
            <Link type="button"  to="/">
              <Button  className="w-100 " type="button">Home</Button>
            </Link>
          </div>
          
        </div>
      </div>

      <>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Done.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We received your order{" "}
            <span className="text-danger fs-3"> {title}</span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default CheckOut;
