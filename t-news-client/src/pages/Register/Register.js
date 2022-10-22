import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
          const user = result.user;
          console.log(user);
          form.reset();
          setError(null);
          handleUpdateProfile(name, photoURL);
          handleEmailVerification();
          toast.success('Please verify your email address.')
      })
      .catch((err) => {
        console.error("error", err);
        setError(err.message);
      });
  };

  const handleUpdateProfile = (name, photoUrl) => {
    const profile = { displayName: name, photoURL: photoUrl };
    updateUserProfile(profile).then(()=>{}).catch(error=>console.error('error',error)) 
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
    const handleEmailVerification = () => {
        verifyEmail().then(()=>{}).catch(error=>console.error(error))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo_URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      {error !== null && (
        <Form.Group className="mb-3">
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleAccepted}
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms and condition</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
