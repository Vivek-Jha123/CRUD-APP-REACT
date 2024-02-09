import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {

    const [apiData, setApiData] = useState([])
    useEffect(() => {
        getData();
       
  },[])
  
    function getData() {
        axios.get('https://65c5d46ae5b94dfca2e06084.mockapi.io/crud')
        .then((res) => {
      
           
            setApiData(res.data)
        })
    }
   
    const removeRow = (id) => {
        axios.delete(`https://65c5d46ae5b94dfca2e06084.mockapi.io/crud/${id}`)
        .then(() => getData())
   
    }

    const handleEdit = (id,name,email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

  
  return (
    <>
          <div className="container">
              <div className="d-flex justify-content-between my-5">
                  <h2>Read Operation</h2>
                  <Link to="/">
                      <button type="button" className="btn btn-primary">CreatePost</button>
                      </Link>
                  </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
                  </thead>
                
                  <tbody>
                     
                      {apiData.map((item) => (
                           <tr key={item.id}>
                              <th scope="row">{ item.id}</th>
                              <td>{ item.name}</td>
                           <td>{ item.email}</td>
                              <td>
                                  <Link to="/update">
                             <button type="button" className="btn btn-secondary" onClick={() => handleEdit(item.id,item.name,item.email)}>
                               Edit
                                      </button>
                                      </Link>
                           </td>
                           <td>
                             <button type="button" className="btn btn-danger" onClick={() => removeRow(item.id)}>
                               Delete
                             </button>
                           </td>
                         </tr>
                      ))}
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;
