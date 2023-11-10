import { useState } from "react";
import React from "react";
import "./Login.css";
import "./Hire.css";

function Hire() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [org_name, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("")

  async function signup() {
    let item = { first_name, last_name, org_name, email, tel };

    let result = await fetch("https://augmntx.com/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
  }

  return (
    <div className="container pt-md-2 pb-md-8">
      <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
        <h2 className="hire">Hire the best dedicated developers</h2>
        <div>
          <p className="hire-p">
            Hire pre-vetted developers with strong technical and communication
            skills at unbeatable prices.
            <br></br>
            If you decide to stop within one week, you pay nothing.
          </p>
        </div>
         {/* Form */}
        <div className="row gx-4">
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="org_first_name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                name="org_first_name"
                class="form-control"
                placeholder="Jane"
                required=""
                value={first_name}
              />
              <label>Name *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="org_last_name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                name="org_last_name"
                class="form-control"
                placeholder="Jane"
                required=""
                value={last_name}
              />
              <label>Job Title *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="reg_name"
                type="text"
                onChange={(e) => setOrgName(e.target.value)}
                name="reg_name"
                class="form-control"
                placeholder="Company"
                required=""
                value= {org_name}
              />
              <label>Company Name *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="reg_email"
                type="email"
                onChange = {(e) => setEmail(e.target.value)}
                name="oreg_email"
                class="form-control"
                placeholder="email@domain.com"
                required=""
                value= {email}
              />
              <label>Work Email *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="reg_tel"
                type="text"
                onChange = {(e) => setTel(e.target.value)}
                name="reg_tel"
                class="form-control"
                placeholder="9876543210"
                required=""
                value={tel}
              />
              <label>Phone *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-select-wrapper mb-4" id="email_input">
            <select class="form-select" aria-label="Default select example" name="reg_mode" required=""> 
            <option value="">How did you hear about us? *</option> 
            <option value="Email">Email</option> 
            <option value="Search engine">Search engine</option> 
            <option value="Social media">Social media</option> 
            <option value="Others">Others</option> </select>
            </div>
          </div>
          {/* Submitt */}
          <div className="col-12 text-center mt-3 mb-3">
            <input
              type="button"
              onClick={signup}
              className="btn btn-primary rounded-pill btn-send mb-3"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hire;
