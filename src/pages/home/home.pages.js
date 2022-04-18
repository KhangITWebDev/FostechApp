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
                    <h4 className="d-none d-lg-block">CHÚNG TÔI LÀ AI</h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                  >
                    <i className="ri-store-line" />
                    <h4 className="d-none d-lg-block">SỨ MỆNH</h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <i className="ri-sun-line" />
                    <h4 className="d-none d-lg-block">TẦM NHÌN</h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                  >
                    <i className="ri-gps-line" />
                    <h4 className="d-none d-lg-block">CHIẾN LƯỢC PHÁT TRIỂN</h4>
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
                        CÔNG TY SẢN XUẤT, LẬP TRÌNH, TRIỂN KHAI VÀ CUNG CẤP CÁC
                        DỊCH VỤ HẬU MÃI.
                      </h3>
                      <p>
                        Fostech hoạt động trong lĩnh vực công nghệ thông tin,
                        chuyên sản xuất phần mềm ứng dụng doanh nghiệp & dịch vụ
                        triển khai chuyên nghiệp. <br />
                        Sản phẩm chính Fostech cung cấp bao gồm 03 nhóm giải
                        pháp chính ERP, App & Platform doanh nghiệp.
                        <br />
                        Tiêu chí dịch vụ của chúng tôi là cung cấp giải pháp phù
                        hợp và đơn giản cho hoạt động vận hành tại doanh nghiệp.
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
                          <h5>“ Simple & Conformity Solution” </h5>
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
                      <h3>SỨ MỆNH</h3>
                      <p>
                        Yếu tố con người là nền tảng quan trong mà chúng tôi
                        hướng đến phát triển nhằm trợ giúp các doanh nghiệp nâng
                        cao năng lực quản lý, năng lực cạnh tranh và quản trị có
                        hiệu quả hoạt động sản xuất kinh doanh thông qua việc tư
                        vấn và triển khai các sản phẩm, dịch vụ vào công tác
                        quản trị doanh nghiệp.
                      </p>
                      <p>
                        Mang lại cho nhân viên một môi trường làm việc tốt nhất
                        để phát triển tài năng, nghề nghiệp, đồng thời có được
                        một cuộc sống đầy đủ về vật chất, phong phú về tinh
                        thần.
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
                      <h3>TẦM NHÌN</h3>
                      <p>
                        Trọng tâm phát triển kinh doanh theo hướng “Chất lượng –
                        Chuyên nghiệp – Tiếp thu”.
                      </p>
                      <p>
                        Chất lượng sản phẩm, dịch vụ được chú trọng nghiên cứu,
                        phát triển song song với sự phát triển công nghệ, pháp
                        luật để mang lại hiệu quả sử dụng tối ưu nhất cho doanh
                        nghiệp.
                      </p>
                      <p>
                        Chuyên nghiệp trong quá trình cung cấp dịch vụ, việc đào
                        tạo chuyên môn, kỹ năng cho nhân viên được đẩy mạnh và
                        trao dồi thường xuyên.
                      </p>
                      <p>
                        Tiếp thu sự đổi mới công nghệ, đổi mới thị trường và đổi
                        mới trong từng ngành nghề, từng doanh nghiệp được xem
                        xét và tích hợp trong các sản phẩm.
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
                      <h3>CHIẾN LƯỢC PHÁT TRIỂN</h3>
                      <p>
                        Chất lượng sản phẩm – dịch vụ là trọng tâm trong quá
                        trình xây dựng thương hiệu.
                      </p>
                      <p>
                        Nâng cao phát triển chất lượng sản phẩm – dịch vụ thông
                        qua nghiên cứu, áp dụng công nghệ hiện đại.
                      </p>
                      <p>
                        Xây dựng thương hiệu bằng cách mở rộng mạng lưới khách
                        hàng sử dụng và loại hình kinh doanh.
                      </p>
                      <p>
                        Mang lại chất lượng chuyên môn, kỹ năng cho nhân viên để
                        đáp ứng được nhu cầu của doanh nghiệp.
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
                <h2 style={{ color: "#fff" }}>SẢN PHẨM</h2>
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
                <h2>Dịch Vụ Của Chúng Tôi</h2>
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
                      <p className="text-white">Tư vấn</p>
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
                      <p className="text-white">Đào Tạo & Triển khai</p>
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
                      <p className="text-white">Bảo hành & Nâng cấp hệ thống</p>
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
                <h2>Liên hệ</h2>
              </div>
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
                      <div className="info-box mt-4 mb-3">
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
      </div>
    );
  }
}
export default Home;
