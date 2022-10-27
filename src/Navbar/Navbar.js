import { useState } from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import Main from "../layout/Main";
import "./Navbar.css";
import {FcManager } from "react-icons/fc";

function BasicExample() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const [toggle, setToggle] =useState(false)
  

  const handleToggle =(event)=>{
    setToggle(event?.target?.checked)
    const toggle1 =event?.target?.checked
    console.log(toggle1)
    if(toggle1){
      document.body.style.backgroundColor = "#808080"
    }else
    {
      document.body.style.backgroundColor = "#FFF0F5"
    }


  }

  return (
    <div>
      <Navbar  bg="dark gradient"  expand="lg">
        <Container >
          <Navbar.Brand className="text-success fs-2 font-weight-bold ">
            <Link className="text-decoration-none" to="/course">
              Learn at Home
            </Link>
          </Navbar.Brand>

          <Nav.Link
            className="text-info fs-2 font-weight-bold me-4 d-flex justify-content-center"
            href="#home"
          >
            {user?.photoURL ? (
              <Image
                style={{ height: "40px" }}
                roundedCircle
                src={user?.photoURL}
              ></Image>
            ) : (
              <FcManager /> 
            )}
          </Nav.Link>

          <Nav.Link
            className="text-info fs-6 font-weight-bold me-4"
            href="#home"
          >
            {user?.uid ? (
              <Link className="text-danger text-decoration-none">
                {" "}
                <span className="text-light">{user?.displayName}</span>
                <Button
                  onClick={handleLogOut}
                  className="btn btn-link text-warning"
                >
                  {" "}
                  Log Out
                </Button>
              </Link>
            ) : (
              <>
                <Button
                  variant="info"
                  className="text-info fs-5 font-weight-bold  me-4"
                  href="#home"
                >
                  <Link
                    to="/mylogin"
                    className="text-danger text-decoration-none "
                  >
                    {" "}
                    <span className="text-light">Login</span>
                  </Link>
                </Button>

                <Button
                  variant="info"
                  className="text-info fs-5 font-weight-bold  me-4 "
                  href="#home"
                >
                  <Link
                    to="/register"
                    className="text-danger text-decoration-none"
                  >
                    {" "}
                    <span className="text-light">Register</span>
                  </Link>
                </Button>
              </>
            )}
          </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-1">
              <Nav.Link className="text-info fs-5 font-weight-bold" href="/">
                Home
              </Nav.Link>

              <Nav.Link
                className="text-info fs-5 font-weight-bold"
                href="/course"
              >
                <Link className="text-danger text-decoration-none" to="/course">
                  Courses
                </Link>
              </Nav.Link>

              <Nav.Link
                className="text-info fs-5 font-weight-bold"
                
              >
                <Link className="text-decoration-none" to="/blog"> Blog </Link>
              
              </Nav.Link>
              <Nav.Link
                className="text-info fs-5 font-weight-bold"
               
              >
              <Link to='/faq'>  FAQ</Link>
              </Nav.Link>
             <div className="d-flex align-items-center">
             <label class="switch">
                <input onClick={handleToggle}  type="checkbox" />
                <span class="slider round"></span>
              </label>
             </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Main></Main>
    </div>
  );
}

export default BasicExample;
