import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ShowBlog from "../../components/blog/showBlog.component";
import FormContact from "../../components/home/formContact";

class Home extends Component {
  state = {
    click: false,
    index: 0,
  };
  clickToActive = (i) => {
    this.setState({
      click: true,
      index: i,
    });
  };
  render() {
    const { index } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
      ],
      customPaging: (i) => (
        <div
          style={{
            fontSize: 12,
            color: "#e03a3c",
          }}
        >
          {index === i ? (
            <i
              value={i}
              className="fas fa-circle"
              style={{ display: "block" }}
              onClick={() => this.clickToActive(i)}
            />
          ) : (
            <i
              value={i}
              className="fal fa-circle"
              onClick={() => this.clickToActive(i)}
              style={{ display: "block" }}
            />
          )}
        </div>
      ),
    };
    return (
      <div>
        <section
          id="hero"
          className="d-flex align-items-center"
          style={{
            backgroundImage: "url(../assets/img/bannerHome.jpg)",
          }}
        >
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row txt-al">
              <h1>FOSTECH</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                Simple & Conformity Solution
              </h2>
              <a className="btn-sz">
                <i className="fas fa-chevron-circle-down" />
              </a>
            </div>
          </div>
        </section>
        <main id="main">
          {/* ======= Clients Section ======= */}
          <section id="intro" className="tabs">
            <div className="container" data-aos="fade-up">
              <ul className="nav nav-tabs row d-flex">
                <li className="nav-item col-3">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                  >
                    <i className="ri-body-scan-line" />
                    <h4 className="d-none d-lg-block">CH??NG T??I L?? AI</h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                  >
                    <i className="ri-store-line" />
                    <h4 className="d-none d-lg-block">S??? M???NH</h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <i className="ri-sun-line" />
                    <h4 className="d-none d-lg-block">T???M NH??N</h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                  >
                    <i className="ri-gps-line" />
                    <h4 className="d-none d-lg-block">CHI???N L?????C PH??T TRI???N</h4>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <h3>
                        C??NG TY S???N XU???T, L???P TR??NH, TRI???N KHAI V?? CUNG C???P C??C
                        D???CH V??? H???U M??I.
                      </h3>
                      <p>
                        Fostech hoa??t ??????ng trong li??nh v????c c??ng ngh???? th??ng tin,
                        chuy??n sa??n xu????t ph????n m????m ????ng du??ng doanh nghi????p & di??ch vu??
                        tri????n khai chuy??n nghi????p. <br />
                        Sa??n ph????m chi??nh Fostech cung c????p bao g????m 03 nho??m gia??i
                        pha??p chi??nh ERP, App & Platform doanh nghi????p.
                        <br />
                        Ti??u chi?? di??ch vu?? cu??a chu??ng t??i la?? cung c????p gia??i pha??p phu??
                        h????p va?? ????n gia??n cho hoa??t ??????ng v????n ha??nh ta??i doanh nghi????p.
                      </p>
                      <div className="row" style={{ marginTop: "30px" }}>
                        <div
                          className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                          data-aos="fade-up"
                          data-aos-delay={100}
                        ></div>
                        <div
                          className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ textAlign: "center" }}
                        >
                          <h5>??? Simple & Conformity Solution??? </h5>
                          <h5>- Slogan -</h5>
                          <h5>- FOSTECH -</h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 order-1 order-lg-2 text-center"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <img src="assets/img/tabs-1.jpg" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>S??? M???NH</h3>
                      <p>
                        Y???u t??? con ng?????i l?? n???n t???ng quan trong m?? ch??ng t??i
                        h?????ng ?????n ph??t tri???n nh???m tr??? gi??p c??c doanh nghi???p n??ng
                        cao n??ng l???c qu???n l??, n??ng l???c c???nh tranh v?? qu???n tr??? c??
                        hi???u qu??? ho???t ?????ng s???n xu???t kinh doanh th??ng qua vi???c t??
                        v???n v?? tri???n khai c??c s???n ph???m, d???ch v?????v??o c??ng t??c
                        qu???n tr??? doanh nghi???p.
                      </p>
                      <p>
                        Mang l???i cho nh??n vi??n m???t m??i tr?????ng l??m vi???c t???t nh???t
                        ????? ph??t tri???n t??i n??ng, ngh??? nghi???p, ?????ng th???i c?? ???????c
                        m???t cu???c s???ng ?????y ????? v??? v???t ch???t, phong ph?? v??? tinh
                        th???n.
                      </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img src="assets/img/tabs-2.jpg" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>T???M NH??N</h3>
                      <p>
                        Tr???ng t??m ph??t tri???n kinh doanh theo h?????ng ???Ch???t l?????ng ???
                        Chuy??n nghi???p ??? Ti???p thu???.
                      </p>
                      <p>
                        Ch???t l?????ng s???n ph???m, d???ch v??? ???????c ch?? tr???ng nghi??n c???u,
                        ph??t tri???n song song v???i s??? ph??t tri???n c??ng ngh???, ph??p
                        lu???t ????? mang l???i hi???u qu??? s??? d???ng t???i ??u nh???t cho doanh
                        nghi???p.
                      </p>
                      <p>
                        Chuy??n nghi???p trong qu?? tr??nh cung c???p d???ch v???, vi???c ????o
                        t???o chuy??n m??n, k??? n??ng cho nh??n vi??n ???????c ?????y m???nh v??
                        trao d???i th?????ng xuy??n.
                      </p>
                      <p>
                        Ti???p thu s??? ?????i m???i c??ng ngh???, ?????i m???i th??? tr?????ng v?? ?????i
                        m???i trong t???ng ng??nh ngh???, t???ng doanh nghi???p ???????c xem
                        x??t v?? t??ch h???p trong c??c s???n ph???m.
                      </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img src="assets/img/tabs-3.jpg" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>CHI???N L?????C PH??T TRI???N</h3>
                      <p>
                        Ch???t l?????ng s???n ph???m ??? d???ch v??? l?? tr???ng t??m trong qu??
                        tr??nh x??y d???ng th????ng hi???u.
                      </p>
                      <p>
                        N??ng cao ph??t tri???n ch???t l?????ng s???n ph???m ??? d???ch v??? th??ng
                        qua nghi??n c???u, ??p d???ng c??ng ngh??? hi???n ?????i.
                      </p>
                      <p>
                        X??y d???ng th????ng hi???u b???ng c??ch m??? r???ng m???ng l?????i kh??ch
                        h??ng s??? d???ng v?? lo???i h??nh kinh doanh.
                      </p>
                      <p>
                        Mang l???i ch???t l?????ng chuy??n m??n, k??? n??ng cho nh??n vi??n ?????
                        ????p ???ng ???????c nhu c???u c???a doanh nghi???p.
                      </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img src="assets/img/tabs-4.jpg" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Product */}
          <section
            id="product"
            className="pricing"
            style={{
              backgroundImage: "url(../assets/img/product/Platform.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2 style={{ color: "#fff" }}>S???N PH???M</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div
                    className="box featured"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    style={{ background: "rgb(128 128 128 / 80%)" }}
                  >
                    <h3 style={{ color: "#fff" }}>Business Platform</h3>
                    <img
                      src="../assets/img/product/Web.jpg"
                      style={{
                        width: "100%",
                        height: "565px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="box featured"
                    data-aos="fade-up"
                    data-aos-delay={200}
                    style={{ background: "rgb(128 128 128 / 80%)" }}
                  >
                    <h3 style={{ color: "#fff" }}>ERP Solutions</h3>
                    <img
                      src="../assets/img/product/erp.webp"
                      style={{
                        width: "100%",
                        height: "565px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div
                    className="box featured"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    style={{ background: "rgb(128 128 128 / 80%)" }}
                  >
                    <h3 style={{ color: "#fff" }}>Mobile App & Website</h3>
                    <img
                      src="../assets/img/product/App.jpg"
                      style={{
                        width: "100%",
                        height: "565px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======= Counts Section ======= */}
          <section className="wrapper-counts">
            <div className="container" data-aos="fade-up">
              <Slider {...settings}>
                {/* <div style={{ width: "100px" }}> */}
                <div className="box-counts-image">
                  <img
                    src="./assets/img/aura_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/sxc_tech_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/sonar_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img src="./assets/img/logo6.png" className="img-counts" />
                </div>
                <div className="box-counts-image">
                  <img src="./assets/img/LogoFosX.png" className="img-counts" />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/sxc_tech_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/aura_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/aura_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/sxc_tech_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/sonar_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img src="./assets/img/logo6.png" className="img-counts" />
                </div>
                <div className="box-counts-image">
                  <img src="./assets/img/LogoFosX.png" className="img-counts" />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/sxc_tech_logo.jpg"
                    className="img-counts"
                  />
                </div>
                <div className="box-counts-image">
                  <img
                    src="./assets/img/aura_logo.jpg"
                    className="img-counts"
                  />
                </div>
                {/* </div> */}
              </Slider>
            </div>
          </section>
          {/* ======= Services Section ======= */}
          <section id="whatwedo" className="services section-bg ">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>D???ch V??? C???a Ch??ng T??i</h2>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-6">
                  <Link to="/services">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <i
                        className="fal fa-user-graduate"
                        style={{ marginTop: 15 }}
                      ></i>
                      <p className="text-white">T?? v???n</p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <Link to="/services">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <i className="fal fa-tools" style={{ marginTop: 15 }}></i>
                      <p className="text-white">????o T???o & Tri???n khai</p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <Link to="/services">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i
                        className="fal fa-lightbulb"
                        style={{ marginTop: 15 }}
                      ></i>
                      <p className="text-white">B???o h??nh & N??ng c???p h??? th???ng</p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <Link to="/services">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <i
                        className="fal fa-user-headset"
                        style={{ marginTop: 15 }}
                      ></i>
                      <p className="text-white">Clooud Service</p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <Link to="/services">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <i className="fal fa-atlas" style={{ marginTop: 15 }}></i>
                      <p className="text-white">IT system & IT Helpdesk</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <ShowBlog />
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Li??n h???</h2>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <i className="bx bx-map" />
                        <h3>?????a ch??? c???a ch??ng t??i</h3>
                        <p>
                          1-3 ???????ng D4 KDC Him Lam K??nh T???, Ph?????ng T??n H??ng,
                          Qu???n 7, HCM, Vi???t Nam
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
                      <div className="info-box mt-4 mb-3">
                        <i className="bx bx-phone-call" />
                        <h3>G???i cho ch??ng t??i</h3>
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
      </div>
    );
  }
}
export default Home;
