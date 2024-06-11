import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ListUser() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const apiUrl = import.meta.env.API_URL || "http://localhost:3000";

    useEffect(() => {
        axios.get(`${apiUrl}/getUser/${id}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">User Information</h1>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <h5 className="card-title">Name: {user.name}</h5>
                    </div>
                    <div className="mb-3">
                        <p className="card-text">Gender: {user.gender}</p>
                    </div>
                    <div className="mb-3">
                        <p className="card-text">School: {user.school}</p>
                    </div>
                    <div className="mb-3">
                        <p className="card-text">Date of Birth: {user.dob ? user.dob : "12/01/2003"}</p>
                    </div>
                    <div className="mb-3">
                        <p className="card-text">Email: {user.email ? user.email : "captainnemot1k60@gmail.com"}</p>
                    </div>
                    <div className="mb-3">
                        <p className="card-text">Phone: {user.phone ? user.phone : "0987654321"}</p>
                    </div>
                    <div className="mb-3">
                        <p className="card-text">Country: {user.country ? user.country : "VN"}</p>
                    </div>
                    {/* Button to navigate back to home */}
                    <Link to="/" className="btn btn-primary">Go back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default ListUser;
