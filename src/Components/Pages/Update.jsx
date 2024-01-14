import React, { useEffect, useState } from 'react'
import Layout from '../Labels/Layout'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Update() {
      
    const[id,setId]=useState("")
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[mobile,setMobile]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate()

     useEffect(()=>{

        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
        setMobile(localStorage.getItem("mobile"))
        setPassword(localStorage.getItem("password"))

     },[])

   async function  handleUpdate(id)
   {
      await axios.put(`http://localhost:3004/users/${id}`,{
        name:name,email:email,mobile:mobile,password:password
      })
      toast.success("Update Successfull !",{autoClose:1000})
      setTimeout(()=>{
        navigate('/users')
      },1500)
   }
    
  return (
    <Layout>
      <div className='row container-fluid'>

        <div className='col-md-7'></div>
        <div className="col-md-5 mt-5" style={{border:" 2px solid black",padding: "10px",borderRadius:" 50px 20px"}} >
            <h2>Update</h2>

            <Form className="mt-5 "  >
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                
                placeholder="Enter your name ?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            
                id="exampleEmail"
                placeholder="Enter your Email ?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleMobile">Mobile</Label>
              <Input
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
                
                id="exampleMobile"
                placeholder="Enter your mob no ? "
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                id="examplePassword"
                placeholder="Enter your new password ?"
              />
            </FormGroup><br></br>

            <Button color="success" style={{ width: "50%",marginLeft:"140px"}} onClick={()=>handleUpdate(id)}>
              Update
            </Button>
            <p style={{marginLeft:"140px"}}>Don't want to update ? Back to&nbsp;<Link to='/users' style={{textDecoration:"none"}}> Users</Link></p>
          </Form>



        </div>




      </div>
        


        
    </Layout>
  )
}

export default Update