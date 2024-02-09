import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && email !== "") {
            axios.post('https://65c5d46ae5b94dfca2e06084.mockapi.io/crud', {
                name: name,
                email: email,
               
            })
            .then(() => navigate("/read") )
        }
      
    }

    
  return (
    <>
      <div className="container">
      <div className="d-flex justify-content-between my-5">
                  <h2>Create Operation</h2>
                  <Link to="/read">
                      <button type="button" class="btn btn-primary">All Post</button>
                      </Link>
                  </div>

        <form className="w-50">
          <div className="mb-3">
            <label className="form-label">Name</label>
                      <input type="text" className="form-control" onChange={ (e) => setName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control"  onChange={ (e) => setEmail(e.target.value)} required/>
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
