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
              <h1>DỊCH VỤ</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                Giải pháp đơn giản & phù hợp
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
                    <h4 className="d-none d-lg-block res-text">Tư vấn</h4>
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
                      Đào tạo & Triển khai
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
                      Bảo hành & Nâng cấp hệ thống
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
                      <h3 style={{ marginBottom: 20 }}>Tư vấn</h3>
                      <p>
                        Phần mềm tốt và đội ngũ chuyên viên giỏi về chuyên môn
                        nghiệp vụ, nhiệt tình, năng động sẵn sàng tư vấn cho
                        khách hàng là những gì FOSTECH đã và đang cố gắng hoàn
                        thiện.
                      </p>
                      <p>
                        Việc tư vấn dựa trên nhu cầu, khác vọng, xu hướng thị
                        trường và ngành nghề mà doanh nghiệp đang hướng đến để
                        đội ngũ FOSTECH đang ra hướng giải quyết.
                      </p>
                      <p>
                        Việc khảo sát, đào tạo được đội ngũ nhân viên chú trọng
                        để đảm bảo yêu cầu của doanh nghiệp được lắng nghe hết,
                        phù hợp với nhu cầu thị trường và đáp ứng được mong muốn
                        của doanh nghiệp.
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
                        Đào tạo và Triển khai
                      </h3>
                      <p>
                        FOSTECH cử cán bộ có năng lực và trình độ (phù hợp) đến
                        và làm việc trực tiếp với khách hàng. Các bước cơ bản
                        như sau:
                      </p>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Nắm bắt được loại hình doanh nghiệp và các hình thức
                            kinh doanh
                          </b>
                          <br />
                          <p>
                            - Mỗi doanh nghiệp khác nhau về loại hình hay hình
                            thức sẽ có cách khai thác và triển khai khác nhau.
                            Việc biết rõ về doanh nghiệp sẽ tạo tiền đề cho việc
                            tư vấn bám sát được thực tế và nhu cầu của doanh
                            nghiệp. Từ đó đưa ra nhìn nhận, nghiên cứu, đánh giá
                            về khả năng ứng dụng vào doanh nghiệp đạt được hiệu
                            quả tốt nhất.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Ghi nhận các sản phẩm cần triển khai và chi tiết lộ
                            trình triển khai
                          </b>
                          <br />
                          <p>
                            - Xây dựng các bước triển khai, các phân hệ cần
                            triển khai theo thứ tự như nào để quá trình triển
                            khai vào thực tế cho khách hàng trở nên nhanh chóng,
                            hiệu quả là điều quan trọng.
                            <br />- Thống nhất lộ trình triển khai và xác định
                            tính khả thi cho doanh nghiệp.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Thu thập thông tin theo quá trình đã thiết lập</b>
                          <br />
                          <p>
                            - Khai thác thông tin theo các phân hệ chi tiết
                            trong lộ trình triển khai.
                            <br />- Nắm bắt được thông tin tổng quát, chi tiết
                            và tính liên kết giữa xu hướng thị trường ở hiện tại
                            và tương lai để tiếp nhận thông tin.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Phân tích các yêu cầu từ doanh nghiệp và nhận định
                            vấn đề
                          </b>
                          <br />
                          <p>
                            - Phân tích mức độ phức tạp và tính khả thi của yêu
                            cầu khai ứng dụng vào thực tế, vào phần mềm.
                            <br />- Đưa ra giải pháp tối ưu để giải quyết được
                            yêu cầu của khách hàng trên sản phẩm nhưng vẫn đảm
                            bảo được thao tác nhanh gọn, thân thiện cho doanh
                            nghiệp.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Thống nhất phương án, giải pháp xử lý các yêu cầu đã
                            tiếp nhận
                          </b>
                          <br />
                          <p>
                            - Sau khi phân tích tính khả thi và hướng xử lý,
                            tiến hành thông báo với doanh nghiệp về hướng giải
                            quyết và thông tin nâng cấp.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Nâng cấp, chỉnh sửa, kiểm tra và bàn giao cho doanh
                            nghiệp
                          </b>
                          <br />
                          <p>
                            - Quá trình nâng cấp sẽ đi liền với quá trình kiểm
                            tra để đảm bảo yêu cầu luôn được bám sát.
                            <br /> - Hướng dẫn khách hàng để ứng dụng được yêu
                            cầu vào sử dụng.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Ghi nhận ý kiến đóng góp, phản hồi và nâng cấp thêm
                            (nếu có)
                          </b>
                          <br />
                          <p>
                            - Ghi nhận phản hồi của doanh nghiệp (nếu doanh
                            nghiệp cần thay đổi tiến hành tư vấn và ghi nhận
                            nâng cấp thêm).
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
                        Bảo hành và Nâng cấp hệ thống
                      </h3>
                      <p>
                        Được thiết kế với xu hướng mở, sản phẩm của FOSTECH dễ
                        dàng trong việc khai báo bổ sung các tính năng chi tiết
                        cũng như các thao tác chuyên sâu trên phần mềm nhằm trợ
                        giúp nâng cao hiệu suất cho doanh nghiệp.
                      </p>
                      <p>
                        Sản phẩm được thiết kế theo yêu cầu của doanh nghiệp từ
                        đó trong quá trình triển khai, việc nâng cấp và mở rộng
                        phần mềm cho doanh nghiệp sẽ được FOSTECH ghi nhận và
                        nâng cấp liên tục.
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
                        Trong quá trình doanh nghiệp sử dụng, trong thời gian
                        bảo hành / bảo trì các vấn đề lỗi phát sinh sẽ được cập
                        nhật và sửa lỗi để đảm bảo cho việc vận hành sản phẩm
                        được đảm bảo.
                      </p>
                      <p>
                        FOSTECH có thể cử cán bộ đến trực tiếp, thông qua điện
                        thoại, e-mail, FAX hoặc các chương trình truy cập trực
                        tuyến qua Internet sẽ hướng dẫn cho cán bộ sử dụng cách
                        thức khắc phục, giải quyết sự cố hoặc lỗi của phần mềm.
                        Tùy theo mức độ và điều khoản hợp đồng, FOSTECH sẽ tiến
                        hành bào trì. Thông thường các yêu cầu bảo hành của
                        khách hàng được xử lý tùy thuộc mức độ phức tạp mà lỗi
                        gây ra và xử lý nhanh nhất cho doanh nghiệp.
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
                        IT System và IT Helpdesk
                      </h3>
                      <b>
                        FOSTECH cung cấp các giải pháp & dịch vụ công nghệ thông
                        tin (CNTT)
                      </b>
                      <ul>
                        <li>
                          - Bảo trì hệ thống mạng và máy tính doanh nghiệp
                        </li>
                        <li>
                          - Tích hợp hệ thống CNTT - Giải pháp hạ tầng CNTT{" "}
                        </li>
                        <li>- Giải pháp hệ thống máy chủ - lưu trữ</li>
                        <li>- Dịch vụ hỗ trợ kỹ thuật CNTT </li>
                        <li>- Triển khai và giải pháp về CCTV </li>
                        <li>- Triển khai và giải pháp về hệ thống tổng đài </li>
                        <li>- Cung cấp thiết bị CNTT </li>
                        <li>- Cung cấp phần mềm bản quyền</li>
                      </ul>
                      <b>Chúng tôi sẽ:</b>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Kiểm tra, anti-virus</b>
                          <br />
                          <p>
                            - Kiểm tra trạng thái PC-Workstation.(CPU, RAM,
                            HDDs) Cài đặt lại hệ điều hành, ứng dụng theo yêu
                            cầu. Monitor cảnh báo hư phần cứng, fix lỗi phần mềm
                            trên máy tính.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Bảo trì / sửa chữa thiết bị</b>
                          <br />
                          <p>
                            - Quá trình xác định lỗi, FOSTECH chủ động đề xuất
                            và liên hệ nhà cung cấp phần cứng hoặc phần mềm, chi
                            phí thỏa thuận với đơn vị thứ 3.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Hỗ trợ tại chỗ / xử lý từ xa</b>
                          <br />
                          <p>
                            - Toàn bộ các lỗi sẽ được hỗ trợ từ xa, trường hợp
                            không thể xử lý từ xa – FOSTECH sẽ dùng chương trình
                            truy cập trực tuyến qua Internet hoặc đến trực tiếp
                            khách hàng để xử lý. 
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Cam kết bảo mật thông tin</b>
                          <br />
                          <p>
                            - Cam kết bảo mật hệ thống, dữ liệu của khách hàng
                            tuyệt đối.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Hỗ trợ nhanh chóng và kịp thời</b>
                          <br />
                          <p>
                            - Đội ngũ nhân viên kỹ thuật đông đảo, luôn phục vụ
                            nhanh nhất.
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
                <h2>CHÚNG TA LÀM GÌ</h2>
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
                    <p>Tư vấn – Đào tạo</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 mt-4 mt-md-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="fal fa-tools" style={{ marginTop: 15 }}></i>
                    <p>Triển khai – Cài đặt</p>
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
                    <p>Nâng cấp – mở rộng phần mềm</p>
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
                    <p>Bảo hành, hỗ trợ</p>
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
