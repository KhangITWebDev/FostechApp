import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    turnOn: -1,
    dropdown: -1,
  };
  componentDidMount() {
    console.log(window.location.pathname);
  }
  chargeHeader = () => {
    let css = document.getElementById("header");
    if (window.scrollY !== 0) {
      css.classList.add("header-home");
    } else {
      css.classList.remove("header-home");
    }
  };
  menuMobile = () => {
    const { turnOn } = this.state;
    this.setState({
      turnOn: -turnOn,
    });
  };
  dropdownMenu = () => {
    const { dropdown } = this.state;
    this.setState({
      dropdown: -dropdown,
    });
  };
  offMenuMobile = () => {
    this.setState({
      turnOn: -1,
      dropdown: -1,
    });
  };
  render() {
    const { turnOn, dropdown } = this.state;
    window.addEventListener("scroll", this.chargeHeader);
    return (
      <header
        id="header"
        className="fixed-top d-flex align-items-center"
        style={{ padding: "20px", position: "fixed", background: "#fff0" }}
      >
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <NavLink to="/">
              <img
                style={{ maxHeight: "90px" }}
                src="./assets/img/logo/LOGOFOStrang.png"
              />
            </NavLink>
          </h1>
          <nav
            id="navbar"
            className={
              turnOn === 1
                ? "navbar order-last order-lg-0 navbar-mobile"
                : "navbar order-last order-lg-0"
            }
          >
            <ul>
              <li className="dropdown">
                <a
                  className="nav-link scrollto"
                  style={{ paddingTop: "0px" }}
                  onClick={this.dropdownMenu}
                >
                  <h5
                    style={{
                      marginBottom: 0,
                      paddingTop: turnOn === 1 ? "20px" : "0",
                    }}
                  >
                    Sản phẩm
                    <i
                      className="bi bi-chevron-down"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </h5>
                </a>
                <ul
                  style={{
                    background: turnOn === 1 ? "#fff" : "#000000ab",
                    // boxShadow:
                    //   turnOn === 1
                    //     ? "none"
                    //     : "0px 0px 30px rgba(127, 137, 161, 0.25);",
                  }}
                  className={
                    turnOn === 1 && dropdown === 1 ? "dropdown-active" : ""
                  }
                >
                  <li>
                    <NavLink to="/product">Business Platform</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product">ERP Solutions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product">App - Web</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className="nav-link scrollto"
                  to="/services"
                  style={{ paddingTop: "0px" }}
                  onClick={this.offMenuMobile}
                >
                  <h5 style={{ marginBottom: 0 }}>Dịch vụ</h5>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link scrollto"
                  to="/contact"
                  style={{ paddingTop: "0px" }}
                  onClick={this.offMenuMobile}
                >
                  <h5 style={{ marginBottom: 0 }}>Liên hệ</h5>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link scrollto"
                  to="/blog"
                  style={{ paddingTop: "0px" }}
                  onClick={this.offMenuMobile}
                >
                  <h5 style={{ marginBottom: 0 }}>Blog</h5>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link scrollto"
                  to="/news"
                  style={{ paddingTop: "0px" }}
                  onClick={this.offMenuMobile}
                >
                  <h5 style={{ marginBottom: 0 }}>Tin tức</h5>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link scrollto"
                  to="/recruit"
                  style={{ paddingTop: "0px" }}
                  onClick={this.offMenuMobile}
                >
                  <h5 style={{ marginBottom: 0 }}>Tuyển dụng</h5>
                </NavLink>
              </li>
            </ul>
            <i
              className={
                turnOn === 1
                  ? "bi bi-x mobile-nav-toggle"
                  : "bi bi-list mobile-nav-toggle"
              }
              style={{ color: "#fff" }}
              onClick={() => this.menuMobile()}
            />
          </nav>
        </div>
      </header>
    );
  }
}
export default connect()(Header);
