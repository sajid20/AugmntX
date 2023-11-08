import { useState } from "react";
import React from "react";
import "./Login.css";
import "./Hire.css";

function Hire() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  async function signup() {
    let item = { first_name, last_name };

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
              <label for="org_first_name">Name *</label>
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
              <label>Last Name *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="org_job_name"
                type="text"
                name="org_job_name"
                class="form-control"
                placeholder="Jane"
                required=""
                value=""
              />
              <label for="org_job_name">Job Title *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="org_org_name"
                type="text"
                name="org_org_name"
                class="form-control"
                placeholder="Jane"
                required=""
                value=""
              />
              <label for="org_name">Organization *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                id="org_webt_name"
                type="text"
                name="org_web_name"
                class="form-control"
                placeholder="Jane"
                required=""
                value=""
              />
              <label for="org_website_name">Website *</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4" id="email_input">
              <input
                style={{ width: "60%", display: "inline-block" }}
                id="form_work_email"
                type="email"
                name="org_email"
                class="form-control"
                placeholder="email@website.com"
                required=""
                value=""
              />
              <label for="form_work_email">Work email *</label>
              <p id="email_domain" style={{ display: "inline", width: "35%" }}>
                @website.com
              </p>
              <i
                id="x_icon"
                class="uil uil-times-circle"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  display: "block",
                }}
                onclick="cancel_autofill()"
              ></i>
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
