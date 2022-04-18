import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <header
          id="header"
          className="fixed-top d-flex align-items-center"
          style={{ padding: "20px", position: "absolute", background: "#fff0" }}
        >
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <NavLink to="/">
                <img
                  style={{ maxHeight: "80px" }}
                  src="./assets/img/logo/LOGOFOS1.png"
                />
              </NavLink>
            </h1>
          </div>
        </header>
        <div style={{ textAlign: "center", height: '790px' }}>
          <img
            src="./assets/img/NotFound1.jpg"
            className="img-fluid"
            style={{ maxWidth: "90%", maxHeight: "100%" }}
          />
        </div>
      </div>
    );
  }
}

export default NotFound;
