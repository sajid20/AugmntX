import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    if (!email || !password) {
      console.error("Email and password are required.");
      return;
    }

    try {
      const response = await fetch("https://augmntx.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Login successful
        console.log("Login successful!");
      } else {
        // Handle login error
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}
              <div>
                <h3>Sign in to Start your Session</h3>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <!-- Password input --> */}
              <div className="form-group">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="form-group btn btn-primary btn-block"
              >
                Continue
              </button>
              <div className="divider text-center my-4"></div>
              <div>
                <h6>Forgor Password?</h6>
              </div>
            </form>
          </div>
          <div className="parent-container">
            <div>
              <h5>
                Dont have an account? <Link to="/hire">Sign Up</Link>
              </h5>
              <h5>Please Contact us if you require any assistance</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
