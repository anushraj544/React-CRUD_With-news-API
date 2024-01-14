import React, { useEffect, useState } from "react";
import Layout from "../Labels/Layout";
import axios from "axios";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Users() {
  const [udata, setUdata] = useState([]);

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:3004/users`);

      // console.log(res.data);

      setUdata(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  //Delete function

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3004/users/${id}`);
    getData();
  }
  //update button function

  function setToLocalStorage(id,name,email,mobile,password)
  {
             localStorage.setItem("id",id);
             localStorage.setItem("name",name);
             localStorage.setItem("email",email);
             localStorage.setItem("mobile",mobile);
             localStorage.setItem("password",password);
  }

  return (
    <Layout>
      <h2 className="App mt-3 mb-3">Users</h2>

      <table className="table table-success table-striped mt-5 mb-5">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {udata.map((val, i) => {
            return (
              <tr>
                <th scope="row">{(i = i + 1)}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.mobile}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => {
                      if (window.confirm("Are sure want to delete")) {
                        handleDelete(val.id);
                      }
                    }}
                  >
                    Delete
                  </Button>
                  &nbsp;
                  {/* <Button color="success" onClick={()=>setToLocalStorage(val.id,val.name,val.email,val.mobile,val.password)}><Link to='/update'></Link>Update</Button> */}
                  <Link to='/update' className="btn btn-success " onClick={()=>setToLocalStorage(val.id,val.name,val.email,val.mobile,val.password)}>Update</Link>

                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}

export default Users;
