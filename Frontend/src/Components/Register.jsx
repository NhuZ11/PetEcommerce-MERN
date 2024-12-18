import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [credentials, setCredentials] = useState({ username: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password } = credentials;
        const response = await fetch("http://localhost:8000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
        const json = await response.json();
        console.log('this is response ', json);
        if (json) {
          
            navigate("/login");
            console.log("success");
        } else {
            console.log("failed");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="signup-background">
            <div className="container d-flex justify-content-center mt-5">
                <div className="card p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%', backgroundColor: '#2C2C2C', color: '#E0E0E0' }}>
                    <h2 className="text-center mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control bg-dark text-light border-0"
                                value={credentials.name}
                                onChange={onChange}
                                id="username"
                                name="username"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control bg-dark text-light border-0"
                                value={credentials.email}
                                onChange={onChange}
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control bg-dark text-light border-0"
                                value={credentials.password}
                                onChange={onChange}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                minLength={5}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control bg-dark text-light border-0"
                                value={credentials.cpassword}
                                onChange={onChange}
                                id="cpassword"
                                name="cpassword"
                                placeholder="Confirm your password"
                                minLength={5}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                    <div className="text-center mt-3">
                        <p>Already have an account?</p>
                        <Link className="text-primary" to="/login">Login here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
