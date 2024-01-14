import React, { useEffect, useState } from "react";
import Layout from "../Labels/Layout";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dataa, setData] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    let res = await axios.get(` http://localhost:3004/users`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleLogin() {
    try {
      const user=dataa.find(user=>email===user.email && password===user.password)
      
      if (user) {
        toast.success("Login Successfull ", { autoClose: 1000 });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(`Please enter valid email id and password `, {
          autoClose: "1000",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="row container-fluid">
        <div className="col-md-8 mt-5 mb-5">
          <img
            src="../images/login.webp"
            alt=""
            style={{ height: "450px", width: "450px", marginLeft: "150px" }}
          ></img>
        </div>
        <div className="col-md-4 mt-5">
          <h2 className="mt-5 mt-5">Login</h2>

          <Form className="mt-5 ">
            <FormGroup>
              <Label for="exampleEmail">Email&nbsp;<span>*</span></Label>
              <Input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="exampleEmail"
                placeholder="Enter your Email ?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password&nbsp;<span>*</span></Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="examplePassword"
                placeholder="Enter your password ?"
              />
            </FormGroup>
            <br></br>

            <Button
              onClick={handleLogin}
              color="primary"
              style={{ width: "50%" }}
            >
              Submit
            </Button>
            <br></br>
            <p>
              If you are not Registered ? <Link to="/register">Register</Link>
            </p>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
