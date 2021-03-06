import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import ShowBlog from "../../components/blog/showBlog.component";

class Services extends Component {
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
            backgroundImage:
              "url(../assets/img/taras-shypka-iFSvn82XfGo-unsplash.jpg)",
          }}
        >
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row txt-al">
              <h1>D???CH V???</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                Gi???i ph??p ????n gi???n & ph?? h???p
              </h2>
              <a className="btn-sz">
                <i className="fas fa-chevron-circle-down" />
              </a>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="intro" className="tabs">
            <div className="container" data-aos="fade-up">
              <ul className="nav nav-tabs row d-flex">
                <li className="nav-item item-sub-menu">
                  <a
                    className="nav-link active show mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                  >
                    <i class="fal fa-atlas"></i>
                    <h4 className="d-none d-lg-block res-text">T?? v???n</h4>
                  </a>
                </li>
                <li className="nav-item item-sub-menu">
                  <a
                    className="nav-link mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                  >
                    <i className="fal fa-mobile"></i>
                    <h4 className="d-none d-lg-block res-text">
                      ????o t???o & Tri???n khai
                    </h4>
                  </a>
                </li>
                <li className="nav-item item-sub-menu">
                  <a
                    className="nav-link mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <i className="fal fa-browser"></i>
                    <h4 className="d-none d-lg-block res-text">
                      B???o h??nh & N??ng c???p h??? th???ng
                    </h4>
                  </a>
                </li>
                <li className="nav-item item-sub-menu">
                  <a
                    className="nav-link mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                  >
                    <i className="fal fa-cloud"></i>
                    <h4 className="d-none d-lg-block res-text">
                      Clooud Service
                    </h4>
                  </a>
                </li>
                <li className="nav-item item-sub-menu">
                  <a
                    className="nav-link mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-5"
                  >
                    <i className="fal fa-desktop"></i>
                    <h4 className="d-none d-lg-block res-text">
                      IT System & IT Helpdesk
                    </h4>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div
                      className="order-2 order-lg-1 mt-3 mt-lg-0"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3 style={{ marginBottom: 20 }}>T?? v???n</h3>
                      <p>
                        Ph???n m???m t???t v?? ?????i ng?? chuy??n vi??n gi???i v??? chuy??n m??n
                        nghi???p v???, nhi???t t??nh, n??ng ?????ng s???n s??ng t?? v???n cho
                        kh??ch h??ng l?? nh???ng g?? FOSTECH ???? v?? ??ang c??? g???ng ho??n
                        thi???n.
                      </p>
                      <p>
                        Vi???c t?? v???n d???a tr??n nhu c???u, kh??c v???ng, xu h?????ng th???
                        tr?????ng v?? ng??nh ngh??? m?? doanh nghi???p ??ang h?????ng ?????n ?????
                        ?????i ng?? FOSTECH ??ang ra h?????ng gi???i quy???t.
                      </p>
                      <p>
                        Vi???c kh???o s??t, ????o t???o ???????c ?????i ng?? nh??n vi??n ch?? tr???ng
                        ????? ?????m b???o y??u c???u c???a doanh nghi???p ???????c l???ng nghe h???t,
                        ph?? h???p v???i nhu c???u th??? tr?????ng v?? ????p ???ng ???????c mong mu???n
                        c???a doanh nghi???p.
                      </p>
                      <div className="img-service-tab1">
                        <img
                          src="assets/img/tranning.webp"
                          alt="Tranning Image"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3 style={{ marginBottom: 20 }}>
                        ????o t???o v?? Tri???n khai
                      </h3>
                      <p>
                        FOSTECH c??? c??n b?????c?? n??ng l???c v?? tr??nh ???????(ph?? h???p)???????n
                        v?? l??m vi???c tr???c ti???p v???i kh??ch h??ng. C??c b?????c c?? b???n
                        nh?? sau:
                      </p>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            N???m b???t ???????c lo???i h??nh doanh nghi???p v?? c??c h??nh th???c
                            kinh doanh
                          </b>
                          <br />
                          <p>
                            - M???i doanh nghi???p kh??c nhau v??? lo???i h??nh hay h??nh
                            th???c s??? c?? c??ch khai th??c v?? tri???n khai kh??c nhau.
                            Vi???c bi???t r?? v??? doanh nghi???p s??? t???o ti???n ????? cho vi???c
                            t?? v???n b??m s??t ???????c th???c t??? v?? nhu c???u c???a doanh
                            nghi???p. T??? ???? ????a ra nh??n nh???n, nghi??n c???u, ????nh gi??
                            v??? kh??? n??ng ???ng d???ng v??o doanh nghi???p ?????t ???????c hi???u
                            qu??? t???t nh???t.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Ghi nh???n c??c s???n ph???m c???n tri???n khai v?? chi ti???t l???
                            tr??nh tri???n khai
                          </b>
                          <br />
                          <p>
                            - X??y d???ng c??c b?????c tri???n khai, c??c ph??n h??? c???n
                            tri???n khai theo th??? t??? nh?? n??o ????? qu?? tr??nh tri???n
                            khai v??o th???c t??? cho kh??ch h??ng tr??? n??n nhanh ch??ng,
                            hi???u qu??? l?? ??i???u quan tr???ng.
                            <br />- Th???ng nh???t l??? tr??nh tri???n khai v?? x??c ?????nh
                            t??nh kh??? thi cho doanh nghi???p.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Thu th???p th??ng tin theo qu?? tr??nh ???? thi???t l???p</b>
                          <br />
                          <p>
                            - Khai th??c th??ng tin theo c??c ph??n h??? chi ti???t
                            trong l??? tr??nh tri???n khai.
                            <br />- N???m b???t ???????c th??ng tin t???ng qu??t, chi ti???t
                            v?? t??nh li??n k???t gi???a xu h?????ng th??? tr?????ng ??? hi???n t???i
                            v?? t????ng lai ????? ti???p nh???n th??ng tin.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Ph??n t??ch c??c y??u c???u t??? doanh nghi???p v?? nh???n ?????nh
                            v???n ?????
                          </b>
                          <br />
                          <p>
                            - Ph??n t??ch m???c ????? ph???c t???p v?? t??nh kh??? thi c???a y??u
                            c???u khai ???ng d???ng v??o th???c t???, v??o ph???n m???m.
                            <br />- ????a ra gi???i ph??p t???i ??u ????? gi???i quy???t ???????c
                            y??u c???u c???a kh??ch h??ng tr??n s???n ph???m nh??ng v???n ?????m
                            b???o ???????c thao t??c nhanh g???n, th??n thi???n cho doanh
                            nghi???p.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Th???ng nh???t ph????ng ??n, gi???i ph??p x??? l?? c??c y??u c???u ????
                            ti???p nh???n
                          </b>
                          <br />
                          <p>
                            - Sau khi ph??n t??ch t??nh kh??? thi v?? h?????ng x??? l??,
                            ti???n h??nh th??ng b??o v???i doanh nghi???p v??? h?????ng gi???i
                            quy???t v?? th??ng tin n??ng c???p.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            N??ng c???p, ch???nh s???a, ki???m tra v?? b??n giao cho doanh
                            nghi???p
                          </b>
                          <br />
                          <p>
                            - Qu?? tr??nh n??ng c???p s??? ??i li???n v???i qu?? tr??nh ki???m
                            tra ????? ?????m b???o y??u c???u lu??n ???????c b??m s??t.
                            <br /> - H?????ng d???n kh??ch h??ng ????? ???ng d???ng ???????c y??u
                            c???u v??o s??? d???ng.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Ghi nh???n ?? ki???n ????ng g??p, ph???n h???i v?? n??ng c???p th??m
                            (n???u c??)
                          </b>
                          <br />
                          <p>
                            - Ghi nh???n ph???n h???i c???a doanh nghi???p (n???u doanh
                            nghi???p c???n thay ?????i ti???n h??nh t?? v???n v?? ghi nh???n
                            n??ng c???p th??m).
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="assets/img/deployment.webp"
                        alt="Tranning Image"
                        class="img-fluid"
                        style={{ height: 470, objectFit: "fill" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div
                    className="row"
                    // style={{ flexDirection: "column-reverse" }}
                  >
                    <div
                      className="order-2 order-lg-1 mt-3 mt-lg-0"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3 style={{ marginBottom: 20 }}>
                        B???o h??nh v?? N??ng c???p h??? th???ng
                      </h3>
                      <p>
                        ???????c thi???t k??? v???i xu h?????ng m???, s???n ph???m c???a FOSTECH d???
                        d??ng trong vi???c khai b??o b??? sung c??c t??nh n??ng chi ti???t
                        c??ng nh?? c??c thao t??c chuy??n s??u tr??n ph???n m???m??nh???m tr???
                        gi??p n??ng cao hi???u su???t cho doanh nghi???p.
                      </p>
                      <p>
                        S???n ph???m ???????c thi???t k??? theo y??u c???u c???a doanh nghi???p t???
                        ???? trong qu?? tr??nh tri???n khai, vi???c n??ng c???p v?? m??? r???ng
                        ph???n m???m cho doanh nghi???p s??? ???????c FOSTECH ghi nh???n v??
                        n??ng c???p li??n t???c.
                      </p>
                      <div className="img-service-tab1">
                        <img
                          src="assets/img/upgrade.webp"
                          alt
                          className="img-fluid"
                          style={{ objectFit: "cover", height: "470px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3 style={{ marginBottom: 20 }}>Cloud Service</h3>
                      <p>
                        Trong qu?? tr??nh doanh nghi???p s??? d???ng, trong th???i gian
                        b???o h??nh / b???o tr?? c??c v???n ????? l???i ph??t sinh s??? ???????c c???p
                        nh???t v?? s???a l???i ????? ?????m b???o cho vi???c v???n h??nh s???n ph???m
                        ???????c ?????m b???o.
                      </p>
                      <p>
                        FOSTECH c?? th??? c??? c??n b??? ?????n tr???c ti???p, th??ng qua ??i???n
                        tho???i, e-mail, FAX ho???c c??c ch????ng tr??nh truy c???p tr???c
                        tuy???n qua Internet s??? h?????ng d???n cho c??n b??? s??? d???ng c??ch
                        th???c kh???c ph???c, gi???i quy???t s??? c??? ho???c l???i c???a ph???n m???m.
                        T??y theo m???c ????? v?? ??i???u kho???n h???p ?????ng, FOSTECH s??? ti???n
                        h??nh b??o tr??. Th??ng th?????ng c??c y??u c???u b???o h??nh c???a
                        kh??ch h??ng ???????c x??? l?? t??y thu???c m???c ????? ph???c t???p m?? l???i
                        g??y ra v?? x??? l?? nhanh nh???t cho doanh nghi???p.
                      </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="assets/img/system.jpg"
                        alt
                        className="img-fluid"
                        style={{ objectFit: "cover", height: "470px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3 style={{ marginBottom: 20 }}>
                        IT System v?? IT Helpdesk
                      </h3>
                      <b>
                        FOSTECH cung c???p c??c gi???i ph??p & d???ch v??? c??ng ngh??? th??ng
                        tin (CNTT)
                      </b>
                      <ul>
                        <li>
                          - B???o tr?? h??? th???ng m???ng v?? m??y t??nh doanh nghi???p
                        </li>
                        <li>
                          - T??ch h???p h??? th???ng CNTT - Gi???i ph??p h??? t???ng CNTT{" "}
                        </li>
                        <li>- Gi???i ph??p h??? th???ng m??y ch??? - l??u tr???</li>
                        <li>- D???ch v??? h??? tr??? k??? thu???t CNTT </li>
                        <li>- Tri???n khai v?? gi???i ph??p v??? CCTV </li>
                        <li>- Tri???n khai v?? gi???i ph??p v??? h??? th???ng t???ng ????i </li>
                        <li>- Cung c???p thi???t b??? CNTT </li>
                        <li>- Cung c???p ph???n m???m b???n quy???n</li>
                      </ul>
                      <b>Ch??ng t??i s???:</b>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Ki???m tra, anti-virus</b>
                          <br />
                          <p>
                            - Ki???m tra tr???ng th??i PC-Workstation.(CPU, RAM,
                            HDDs) C??i ?????t l???i h??? ??i???u h??nh, ???ng d???ng theo y??u
                            c???u. Monitor c???nh b??o h?? ph???n c???ng, fix l???i ph???n m???m
                            tr??n m??y t??nh.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>B???o tr?? / s???a ch???a thi???t b???</b>
                          <br />
                          <p>
                            - Qu?? tr??nh x??c ?????nh l???i, FOSTECH ch??? ?????ng ????? xu???t
                            v?? li??n h??? nh?? cung c???p ph???n c???ng ho???c ph???n m???m, chi
                            ph?? th???a thu???n v???i ????n v??? th??? 3.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>H??? tr??? t???i ch??? / x??? l?? t??? xa</b>
                          <br />
                          <p>
                            - To??n b??? c??c l???i s??? ???????c h??? tr??? t??? xa, tr?????ng h???p
                            kh??ng th??? x??? l?? t??? xa ??? FOSTECH s??? d??ng ch????ng tr??nh
                            truy c???p tr???c tuy???n qua Internet ho???c ?????n tr???c ti???p
                            kh??ch h??ng ????? x??? l??.??
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Cam k???t b???o m???t th??ng tin</b>
                          <br />
                          <p>
                            - Cam k???t b???o m???t h??? th???ng, d??? li???u c???a kh??ch h??ng
                            tuy???t ?????i.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>H??? tr??? nhanh ch??ng v?? k???p th???i</b>
                          <br />
                          <p>
                            - ?????i ng?? nh??n vi??n k??? thu???t ????ng ?????o, lu??n ph???c v???
                            nhanh nh???t.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="assets/img/tabs-1.jpg"
                        alt="Tranning Image"
                        class="img-fluid"
                        style={{ height: 470, objectFit: "fill" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
          <section id="whatwedo" className="services section-bg ">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>CH??NG TA L??M G??</h2>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-6">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i
                      className="fal fa-user-graduate"
                      style={{ marginTop: 15 }}
                    ></i>
                    <p>T?? v???n ??? ????o t???o</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="fal fa-tools" style={{ marginTop: 15 }}></i>
                    <p>Tri???n khai ??? C??i ?????t</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <i
                      className="fal fa-lightbulb"
                      style={{ marginTop: 15 }}
                    ></i>
                    <p>N??ng c???p ??? m??? r???ng ph???n m???m</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <i
                      className="fal fa-user-headset"
                      style={{ marginTop: 15 }}
                    ></i>
                    <p>B???o h??nh, h??? tr???</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <i className="fal fa-atlas" style={{ marginTop: 15 }}></i>
                    <p>IT system</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ShowBlog />
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    service: state.service.serviceList,
  };
};
export default connect(mapStateToProps)(Services);
