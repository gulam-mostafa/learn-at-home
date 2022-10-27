import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

// import {  FcGoogle } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function BasicExample() {

  const [error, setError] = useState("");
  console.log(error);

  const navigate = useNavigate();
const location = useLocation()
const from = location.state?.from?.pathname || "/"

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProbider = new GithubAuthProvider()


  const handleGithubSignIn =() =>{
    providerLogin(githubProbider)
    .then((result ) => {const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
    })
    .catch((error) => console.log(error));
  }

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch((error) => console.log(error));
  };
  const { signIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, {replace: true});
      })
      .catch((e) => {
        console.error(e);

        console.error(e.message);

        setError(e.message);
      });
  };
  return (
    <Form className="vh-100" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button className="me-3" variant="primary" type="submit">
        Loogin
      </Button>
       <h6><small>Are you new this website? <Link to='/register'>Please register</Link></small></h6>
      <Button onClick={handleGoogleSignIn} variant="info"> <span className=""><FcGoogle /> </span>
         Google  
      </Button>{" "}
      
      <Button onClick={handleGithubSignIn} variant="info"> <span className=""><FaGithub /> </span>
        Github  
      </Button>{" "}
      
      <br />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
}

export default BasicExample;
