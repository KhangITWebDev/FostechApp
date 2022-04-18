import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormContact from "../../components/home/formContact";

class Contact extends Component {
  render() {
    return (
      <div>
        <section
          id="hero"
          className="d-flex align-items-center"
          style={{
            backgroundImage:
              "url(../assets/img/firmbee-com-SpVHcbuKi6E-unsplash.jpg)",
          }}
        >
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row txt-al">
              <h1>LIÊN HỆ</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                Hãy kết nối với chúng tôi để trải nghiệm thêm về sản phẩm và
                dịch vụ
              </h2>
              <a className="btn-sz">
                <i className="fas fa-chevron-circle-down" />
              </a>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <i className="bx bx-map" />
                        <h3>Địa chỉ của chúng tôi</h3>
                        <p>
                          1-3 Đường D4 KDC Him Lam Kênh Tẻ, Phường Tân Hưng,
                          Quận 7, HCM, Việt Nam
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4 mb-3">
                        <i className="bx bx-envelope" />
                        <h3>Email</h3>
                        <Link
                          to={"#"}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location = "mailto:yourmail@domain.com";
                          }}
                        >
                          <p className="text-dark">info@fostech.vn</p>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4 ,b-3">
                        <i className="bx bx-phone-call" />
                        <h3>Gọi cho chúng tôi</h3>
                        <Link
                          to={"#"}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location = "tel:+84 914 43 31 13";
                          }}
                        >
                          <p className="text-dark">+84 914 43 31 13</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <FormContact />
                </div>
              </div>
            </div>
          </section>
        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Contact;
