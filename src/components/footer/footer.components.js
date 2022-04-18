import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 footer-contact">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.858678194892!2d106.69817454876235!3d10.745373258595857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa06fd21ae5%3A0xa9eedd30917d900a!2zMSDEkMaw4budbmcgRDQsIEtodSBkw6JuIGPGsCBIaW0gTGFtLCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAw!5e0!3m2!1svi!2s!4v1641805873277!5m2!1svi!2s"
                  width="350px"
                  height="400px"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  loading="lazy"
                />
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="row footer-contact">
                  <h3>
                    Thông tin liên hệ<span>.</span>
                  </h3>
                  <p>
                    <strong>Địa chỉ:</strong> 1-3 Đường D4 KDC Him Lam Kênh Tẻ,
                    Phường Tân Hưng, Quận 7, HCM, Việt Nam
                    <br />
                    <div style={{ display: "flex" }}>
                      <strong style={{ marginRight: 5 }}>Số điện thoại:</strong>{" "}
                      <Link
                        to={"#"}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location = "tel:+84 914 43 31 13";
                        }}
                      >
                        <p className="text-white">+84 914 43 31 13</p>
                      </Link>
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                      <strong style={{ marginRight: 5 }}>Email: </strong>
                      <Link
                        to={"#"}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location = "mailto:yourmail@domain.com";
                        }}
                      >
                        <p className="text-white">info@fostech.vn</p>
                      </Link>
                    </div>
                    <br />
                  </p>
                </div>
                <div className="row footer-links">
                  <div className="col-lg-3 col-md-3">
                    <h4>Liên kết hữu ích</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link to="/product">Sản phẩm</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link to="/services">Dịch vụ</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link to="/contact">Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <h4>Sản phẩm</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <Link to="/product">Business Platform</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link to="/product">ERP Solutions</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link to="/product">Mobile App</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link to="/product">Website</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <h4>Dịch vụ</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link
                          to="#"
                          onClick={(e) => {
                            window.open(
                              "/#/services",
                              "_blank",
                              "noopener,noreferrer"
                            );
                            e.preventDefault();
                          }}
                        >
                          Tư vấn
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link
                          to="#"
                          onClick={(e) => {
                            window.open(
                              "/#/services",
                              "_blank",
                              "noopener,noreferrer"
                            );
                            e.preventDefault();
                          }}
                        >
                          Đào tạo & Triển khai
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link
                          to="#"
                          onClick={(e) => {
                            window.open(
                              "/#/services",
                              "_blank",
                              "noopener,noreferrer"
                            );
                            e.preventDefault();
                          }}
                        >
                          Bảo hành & Nâng cấp hệ thống
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link
                          to="#"
                          onClick={(e) => {
                            window.open(
                              "/#/services",
                              "_blank",
                              "noopener,noreferrer"
                            );
                            e.preventDefault();
                          }}
                        >
                          Clooud Service
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                        <Link
                          to="#"
                          onClick={(e) => {
                            window.open(
                              "/#/services",
                              "_blank",
                              "noopener,noreferrer"
                            );
                            e.preventDefault();
                          }}
                        >
                          IT system & IT Helpdesk
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Bản quyền{" "}
              <strong>
                <span>FosTech</span>
              </strong>
              . Tất cả đã đăng ký bản quyền
            </div>
            <div className="credits"></div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a className="twitter cursor">
              <i className="bx bxl-twitter" />
            </a>
            <a className="facebook cursor">
              <i className="bx bxl-facebook" />
            </a>
            <a className="instagram cursor">
              <i className="bx bxl-instagram" />
            </a>
            <a className="google-plus cursor">
              <i className="bx bxl-skype" />
            </a>
            <a className="linkedin cursor">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
