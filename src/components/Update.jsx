import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Update = () => {
    
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();

    useEffect(() => {

        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
       
        axios.put(`https://65c5d46ae5b94dfca2e06084.mockapi.io/crud/${id}`, {
            name: name,
            email: email,
               
        })
            .then(() => navigate("/read"))
    }
      
  

    return (
        <>
            <div className='container my-5'>
                <h2>Update Operation</h2>
                <form className="w-50">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary"
                        onClick={handleUpdate}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>

    )

}
export default Update;