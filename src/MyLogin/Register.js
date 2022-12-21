import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

import { FaGithub } from "react-icons/fa";

function BasicExample() {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogin, updateUserProfile } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProbider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    providerLogin(githubProbider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error, error.message));
  };
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handleAccept = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Form className="vh-100" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>photoURL</Form.Label>
        <Form.Control
          type="text"
          name="photoURL"
          placeholder="Enter photoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleAccept}
          type="checkbox"
          label={
            <>
              {" "}
              Accept <Link to="/terms">Terms and Conditons</Link>
            </>
          }
        />
      </Form.Group>
      <Button
        className="me-3"
        variant="primary"
        type="submit"
        disabled={!accepted}
      >
        Register
      </Button>
      <h6>
        <small>
          ALredy register <Link to="/mylogin">Please login</Link>
        </small>
      </h6>
      <Button
        className="me-3"
        onClick={handleGoogleSignIn}
        variant="info"
        type=""
        disabled={!accepted}
      >
        {" "}
        <span className="mr-2 ">
          <FcGoogle />{" "}
        </span>
        Google
      </Button>
      <Button
        onClick={handleGithubSignIn}
        className="btn btn-danger"
        type="button"
        variant="info"
        disabled={!accepted}
      >
        {" "}
        <span>
          <FaGithub />{" "}
        </span>
        Github
      </Button>{" "}
      <h2 className="text-danger">{error} </h2>
    </Form>
  );
}

export default BasicExample;
