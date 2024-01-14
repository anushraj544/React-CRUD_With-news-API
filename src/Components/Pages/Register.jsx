import React, { useState } from "react";
import Layout from "../Labels/Layout";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Register() {
const[data,setData]=useState({

      name:"",
      email:"",
      mobile:"",
      password:""
});

function handleInput(e)
{
     setData({...data,[e.target.name]:e.target.value})
    // console.log(data);
}
async function handleSubmit(e)
{
  e.preventDefault();
  //console.log(data);
  try {
    if(data.name==="")
    {
       toast.error("name is required ?",{autoClose:1000})
    }
    else if(data.email==="")
    {
       toast.error("email is required ?",{autoClose:1000})
    }
    else if(data.mobile==="")
    {
       toast.error("mobile is required ?",{autoClose:1000})
    }
    else if(data.password==="")
    {
       toast.error("password is required ?",{autoClose:1000})
    }
    else{

      await axios.post(`http://localhost:3004/users`,{
       name:data.name,
       email:data.email,
       mobile:data.mobile,
       password:data.password
    }).then(()=>{
      toast.success("Registration successfull",{autoClose:1000})
      
      
    })
    setData({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });

    }

    

    
    
  } catch (error) {
    console.log(error);

  }
}




  return (
    <Layout>
      
      <div className="row container-fluid" >
        <div className="col-md-7">
          <img src="../images/register.png" alt="" style={{marginTop:"120px"}}></img>
        </div>

        <div className="col-md-5 mt-5" style={{backgroundColor:"rgb(159, 183, 206)",border:" 2px solid rgb(0, 51, 153)",padding: "30px",borderRadius:" 50px 20px"}} >
          <h3>Registration</h3>

          <Form className="mt-5 " onSubmit={handleSubmit} >
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInput}
                placeholder="Enter your name ?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                id="exampleEmail"
                placeholder="Enter your Email ?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleMobile">Mobile</Label>
              <Input
                type="number"
                name="mobile"
                value={data.mobile}
                onChange={handleInput}
                id="exampleMobile"
                placeholder="Enter your mob no ? "
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={data.password}
                onChange={handleInput}
                id="examplePassword"
                placeholder="Enter your password ?"
              />
            </FormGroup><br></br>

            <Button color="success" style={{ width: "50%",marginLeft:"140px"}}>
              Submit
            </Button>
            <p style={{marginLeft:"140px"}}>Already Registered ? <Link to='/login'>Login</Link></p>
          </Form>
        </div>
      </div>
      
    </Layout>
  );
}

export default Register;
