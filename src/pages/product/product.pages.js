import React, { Component } from "react";
import { connect } from "react-redux";
import ShowBlog from "../../components/blog/showBlog.component";

class Product extends Component {
  render() {
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
              <h1>Sản phẩm</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                The quality of our product is confirmed
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
                <li className="nav-item col-3">
                  <a
                    className="nav-link active show mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                  >
                    <i className="fal fa-mitten"></i>
                    <h4 className="d-none d-lg-block res-text">
                      Business Platform
                    </h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                  >
                    <i class="fal fa-anchor"></i>
                    <h4 className="d-none d-lg-block  res-text">
                      ERP Solutions
                    </h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                  >
                    <i className="fal fa-mobile"></i>
                    <h4 className="d-none d-lg-block res-text">
                      Mobile App & Website
                    </h4>
                  </a>
                </li>
                <li className="nav-item col-3">
                  <a
                    className="nav-link mh-150"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <i className="fal fa-desktop"></i>
                    <h4 className="d-none d-lg-block res-text">Saas</h4>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane" id="tab-1">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3>ERP Solutions.</h3>
                      <p>
                        Hệ thống được xây dựng theo góc độ quản trị tổng thể
                        doanh nghiệp, giải quyết bài toán quản trị đa ngành
                        nghề. Bên cạnh đó, phần mềm thiết kế theo yêu cầu của
                        doanh nghiệp tạo điều kiện cho doanh nghiệp, đơn vị hoạt
                        động quản lý và điều hành cải thiện và nâng cao hiệu quả
                        sản xuất kinh doanh.
                      </p>
                      <p>
                        Phần mềm được thiết kế theo từng phân hệ với mục đích dễ
                        dàng trong quản lý, phân quyền và thực hiện thao tác.
                      </p>
                      <i
                        class="fal fa-list-alt"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <b>Phân hệ gồm:</b>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý quan hệ khách hàng (CRM)
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý bán lẻ (Fos Retail)
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý bán hàng
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý mua hàng
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý hàng tồn kho (hàng hóa, vật tư)
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý TSCĐ, CCDC
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý sản xuất
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý nhân sự, chấm công
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý tài chính – kế toán
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Quản lý doanh nghiệp
                        </li>
                      </ul>
                      <i
                        class="fal fa-list-alt"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <b>
                        Doanh nghiệp sẽ nhận được lợi ích khi sử dụng hệ thống
                        quản lý tổng thể doanh nghiệp (ERP)
                      </b>
                      <br />
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Quản trị toàn diện trên cùng 1 hệ thống</b>
                          <p>
                            - Phầm mềm cho phép quản trị mô hình của tập đoàn,
                            đa công ty, đa chi nhánh. <br />- Hệ thống phần mềm
                            thiết kế mở, linh động nên dễ mở rộng phạm vi quản
                            lý, mở rộng theo quy mô phát triển của doanh nghiệp.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Chi phí quản lý doanh nghiệp giảm dần</b>
                          <p>
                            - Nhờ tính năng liên kết dữ liệu giữa các phòng ban
                            thông qua quy trình được thiết kế theo yêu cầu của
                            doanh nghiệp, hiệu quả năng suất của nhân viên được
                            khai thác tối đa từ đó giảm bớt số lượng nhân viên
                            cần có của phòng ban.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Quản trị thông tin hiệu quả</b>
                          <p>
                            - Dữ liệu được đồng bộ với nhau giữa các bộ phận. Từ
                            đó ban quản trị chủ động và nhanh chóng theo dõi
                            được tình hình sức khỏe công ty mỗi ngày thông qua
                            hàng loạt các báo cáo, biểu đồ, phân tích mà hệ
                            thống cung cấp. Phê duyệt chứng từ từ xa.
                            <br />- Thông qua các lệnh duyệt được gửi tự động từ
                            hệ thống đến mail người duyệt. Hệ thống cho phép
                            nhiều cấp quản lý duyệt trên cùng 1 phiếu. Từ đó
                            giảm thiểu quá trình trình ký bằng thao tác thủ
                            công, quy trình cũng trở nên nhanh chóng, nhanh gọn
                            hơn.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col-lg-6 order-1 order-lg-2 text-center"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <img
                        src="assets/img/tabs-1.jpg"
                        alt
                        className="img-fluid"
                        style={{ objectFit: "cover", height: "470px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3>Mobile App</h3>
                      <p>
                        Đối với các doanh nghiệp thương mại hay vừa sản xuất vừa
                        thương mại, App là phương tiện giúp tương tác cao hơn
                        với KH, đáp ứng mong muốn sở hữu một không gian tương
                        tác độc lập, mang dấu ấn của riêng doanh nghiệp.
                      </p>
                      <i
                        class="fal fa-list-alt"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <b>
                        Những lợi ích khi bạn sử dụng App do FOSTECH sản xuất
                      </b>
                      <br />
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Mang tính cá nhân hóa của chính doanh nghiệp</b>
                          <br />
                          <p>
                            - Mỗi App được thiết kế sẽ mang đậm phong cách và
                            văn hóa của doanh nghiệp đó. <br />
                            - Được thiết kế dựa trên yêu cầu của chính doanh
                            nghiệp.
                            <br />- Dữ liệu được liên kết với hệ thống quản lý
                            bán lẻ của FOSTECH tạo sự đồng nhất về dữ liệu giữa
                            các bộ phận.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Giao diện được thiết kế ưa nhìn, bắt mắt và gây
                            thiện cảm với khách hàng trong quá trình trải nghiệm
                          </b>
                          <br />
                          <p>
                            - Thiết kế được khai thác tối đa sự cân đối và hài
                            hòa giữa bố cục, màu sắc, các điểm chạm chức năng.
                            <br />- Giao diện được thiết kế đáp ứng được xu
                            hướng thị trường và khách hàng.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Tốc độ xử lý nhanh chóng</b>
                          <br />
                          <p>
                            - Thao tác êm ái và tốc độ xử lý dữ liệu nhanh
                            chóng.
                            <br />
                            - Gửi thông báo tin tức, chương trình khuyến mãi,
                            giao dịch phát sinh, … đến khách hàng cũng trở nên
                            dễ dàng thông qua SMS, email, App,…
                            <br />- Thời gian nâng cấp nhanh chóng, nhanh gọn.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Giảm chi phí quảng cáo dài hạn cho doanh nghiệp</b>
                          <br />
                          <p>
                            - Tệp khách hàng của doanh nghiệp được mở rộng nhờ
                            vào sự tương tác, giới thiệu từ khách hàng hay các
                            chương trình khuyến mãi được chạy trên App,… Giảm
                            chi phí quảng cáo trên các phương tiện truyền thông
                            khác.
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Cải thiện năng suất do chính khách hàng chủ động sử
                            dụng dịch vụ
                          </b>
                          <br />
                          <p>
                            - Sau khi xây được thói quen dùng App cho khách
                            hàng, khách hàng sẽ tự là người chủ động sử dụng
                            dịch vụ của doanh nghiệp tại App, thông qua việc đặt
                            hàng, thanh toán khi đến sử dụng dịch vụ, giao hàng
                            tận nơi,…
                          </p>
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Mang tính cạnh tranh cao trên thị trường</b>
                          <br />
                          <p>
                            - Hiện nay, việc phát triển doanh nghiệp bên cạnh
                            phát triển các phương tiện tăng độ nhận diện thương
                            hiệu, mở rộng không gian tương tác với người dùng
                            được thị trường tích cực khai thác. Nắm bắt xu hướng
                            phát triển doanh nghiệp, việc doanh nghiệp sở hữu
                            một App mang tính cá nhân hóa của doanh nghiệp sẽ
                            tăng được thị phần khách hàng, tăng mức độ nhận diện
                            với khách hàng và tăng sức cạnh tranh trên thị
                            trường.
                          </p>
                        </li>
                      </ul>
                      <h3>WEBSITE</h3>
                      <p>
                        Được thiết kế chuẩn SEO, SOCIAL, CRO nhằm giúp doanh
                        nghiệp tăng sự tương tác với khách hàng và mở rộng sự
                        nhận diện thương hiệu, doanh nghiệp tăng được doanh thu,
                        tiết kiệm chi phí quảng cáo.
                      </p>
                      <i
                        class="fal fa-list-alt"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <b>
                        Website được thiết kế với các yếu tố giúp tăng tương tác
                        với khách hàng
                      </b>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Tương thích với hầu hết các trình duyệt web hiện nay
                          </b>
                          <br />- Tương thích trên nhiều trình duyệt như Safari,
                          Google Chrome, Mozilla Firefox, Microsoft Edge,…
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Tương thích với mọi thiết bị di động hiện nay</b>
                          <br />- Tương thích trên nhiều dòng thiết bị như máy
                          tính bàn, máy tính xách tay, máy tính cầm tay, điện
                          thoại di động,…
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Tốc độ tải trang nhanh chóng</b>
                          <br /> - Tốc độ xử lý trang hay nâng cấp nhanh chóng,
                          trơn tru trong quá trình trải nghiệm.
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Bố cục được xây dựng dựa trên yêu cầu của doanh
                            nghiệp (nội dung và giao diện)
                          </b>
                          <br />- Nội dung và giao diện được xây dựng mang đậm
                          dấu ấn của doanh nghiệp, khách hàng phát hoạ được
                          doanh nghiệp rõ nét hơn thông qua Website.
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Thiết kế UX-UI hiện đại, thân thiện, dễ nhìn với
                            người dùng
                          </b>
                          <br />- Thiết kế bắt mắt và đáp ứng được thị yếu và
                          tạo ra trải nghiệm khách hàng tốt hơn.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="assets/img/tabs-2.jpg"
                        alt
                        className="img-fluid"
                        style={{ objectFit: "cover", height: "470px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3>WEBSITE CLIENT</h3>
                      <p>
                        Được thiết kế chuẩn SEO, SOCIAL, CRO nhằm giúp doanh
                        nghiệp tăng sự tương tác với khách hàng và mở rộng sự
                        nhận diện thương hiệu, doanh nghiệp tăng được doanh thu,
                        tiết kiệm chi phí quảng cáo.
                      </p>
                      <i
                        class="fal fa-list-alt"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <b>
                        Website được thiết kế với các yếu tố giúp tăng tương tác
                        với khách hàng
                      </b>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Tương thích với hầu hết các trình duyệt web hiện nay
                          </b>
                          <br />- Tương thích trên nhiều trình duyệt như Safari,
                          Google Chrome, Mozilla Firefox, Microsoft Edge,…
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Tương thích với mọi thiết bị di động hiện nay</b>
                          <br />- Tương thích trên nhiều dòng thiết bị như máy
                          tính bàn, máy tính xách tay, máy tính cầm tay, điện
                          thoại di động,…
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>Tốc độ tải trang nhanh chóng</b>
                          <br /> - Tốc độ xử lý trang hay nâng cấp nhanh chóng,
                          trơn tru trong quá trình trải nghiệm.
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Bố cục được xây dựng dựa trên yêu cầu của doanh
                            nghiệp (nội dung và giao diện)
                          </b>
                          <br />- Nội dung và giao diện được xây dựng mang đậm
                          dấu ấn của doanh nghiệp, khách hàng phát hoạ được
                          doanh nghiệp rõ nét hơn thông qua Website.
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          <b>
                            Thiết kế UX-UI hiện đại, thân thiện, dễ nhìn với
                            người dùng
                          </b>
                          <br />- Thiết kế bắt mắt và đáp ứng được thị yếu và
                          tạo ra trải nghiệm khách hàng tốt hơn.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="assets/img/tabs-3.jpg"
                        alt
                        className="img-fluid"
                        style={{ objectFit: "cover", height: "470px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane active show" id="tab-4">
                  <div className="row">
                    <div
                      className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                      style={{ overflowY: "scroll", height: "470px" }}
                    >
                      <h3>Business Platform</h3>
                      <p>
                        Platform – cơ sở nền tảng cho việc phát triển các ứng
                        dụng, quy trình, công nghệ lại với nhau, từ đó tạo thành
                        một môi trường kết nối đặt biệt.
                      </p>
                      <i
                        class="fal fa-list-alt"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <b>FOSTECH cung cấp sản phẩm</b>
                      <ul>
                        <li>
                          <i className="ri-check-double-line" />
                          Platform phần cứng
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Platform phần mềm
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Social Platform
                        </li>
                        <li>
                          <i className="ri-check-double-line" />
                          Business Service Platform
                        </li>
                      </ul>
                      <p>
                        Platform giúp việc vận hành, theo dõi và quản trị toàn
                        bộ hoạt động của các bộ phận trở nên dễ dàng trên một
                        nền tảng duy nhất. quản lý doanh nghiệp mọi lúc, mọi nơi
                        trên tất cả hệ điều hành và thiết bị có kết nối internet
                        như <b>laptop, điện thoại, tablet,…</b> Đồng bộ dữ liệu
                        từ các ứng dụng, phần mềm trở nên dễ dàng và bảo mật
                        hơn.
                      </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="assets/img/tabs-4.jpg"
                        alt
                        className="img-fluid"
                        style={{ objectFit: "cover", height: "470px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Về chúng tôi</h2>
              </div>
              <div className="row no-gutters">
                <div className="col-xl-12 d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <i className="far fa-thumbs-up" />
                        <h4>ĐAM MÊ CỰC ĐỘ</h4>
                        <p>
                          Mỗi thành viên trong nhóm của chúng tôi đều nhận thức
                          được hệ thống phần mềm tạo nên khối óc và bàn tay
                        </p>
                      </div>
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={200}
                      >
                        <i className="fas fa-user-plus" />
                        <h4>THAM GIA VÀO NHÓM CHÚNG TÔI</h4>
                        <p>
                          FOS là tâm huyết của những người đam mê công nghệ và
                          quản trị hệ thống. Với đội ngũ kỹ sư giàu kinh nghiệm
                          trong lĩnh vực CNTT và tư vấn triển khai các giải pháp
                          công nghệ thông tin, chúng tôi mong muốn tạo ra các
                          giải pháp sáng tạo cho hệ thống quản lý phần mềm của
                          mình
                        </p>
                      </div>
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <i className="far fa-handshake" />
                        <h4>SỨ MỆNH</h4>
                        <p>
                          Trở thành đối tác cung cấp giải pháp phần mềm tin cậy
                          và đồng hành cùng khách hàng trong quá trình phát
                          triển của doanh nghiệp.
                          <br />
                          Xây dựng FOS trở thành ngôi nhà thứ hai của mỗi thành
                          viên để họ được công nhận khả năng sáng tạo.
                        </p>
                      </div>
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={400}
                      >
                        <i className="far fa-eye" />
                        <h4>TẦM NHÌN</h4>
                        <p>
                          Đến năm 2020 trở thành doanh nghiệp hàng đầu Việt Nam
                          cung cấp các giải pháp phần mềm chuyên nghiệp, tin cậy
                          và hiệu quả.
                          <br />
                          Đến năm 2020 trở thành doanh nghiệp hàng đầu Việt Nam
                          cung cấp các giải pháp phần mềm chuyên nghiệp, tin cậy
                          và hiệu quả.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Đối tác của chúng tôi</h2>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-6">
                  <div className="count-box">
                    <img src="./assets/img/logo/azshop.JPG" />
                    <p>
                      Tư vấn, xây dựng hệ thống ERP cho AZSHOP, các doanh nghiệp
                      kinh doanh trong lĩnh vực thương mại và dịch vụ sử dụng hệ
                      thống ERP để quản lý hoạt động của công ty chuyên bán hàng
                      đa kênh.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6">
                  <div className="count-box">
                    <img src="./assets/img/logo/bauervn.JPG" />
                    <p>
                      Tư vấn, xây dựng hệ thống ERP cho các doanh nghiệp kinh
                      doanh trong lĩnh vực xây dựng sử dụng hệ thống ERP để quản
                      lý hoạt động của doanh nghiệp và quản lý các dự án xây
                      dựng.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6">
                  <div className="count-box">
                    <img src="./assets/img/logo/haglgr.JPG" />
                    <p>
                      Tư vấn, xây dựng hệ thống ERP cho AZSHOP, các doanh nghiệp
                      kinh doanh trong lĩnh vực thương mại và dịch vụ sử dụng hệ
                      thống ERP để quản lý hoạt động của công ty chuyên bán hàng
                      đa kênh.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6">
                  <div className="count-box">
                    <img src="./assets/img/logo/thinhphu.JPG" />
                    <p>
                      Tư vấn, xây dựng hệ thống ERP cho các doanh nghiệp kinh
                      doanh trong lĩnh vực xây dựng sử dụng hệ thống ERP để quản
                      lý hoạt động của doanh nghiệp và quản lý các dự án xây
                      dựng.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6">
                  <div className="count-box">
                    <img src="./assets/img/logo/vinpeal.JPG" />
                    <p>
                      Tư vấn và triển khai hệ thống ERP cho các doanh nghiệp
                      quản lý khu vui chơi, giải trí, khách sạn
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6">
                  <div className="count-box">
                    <img src="./assets/img/logo/quang.JPG" />
                    <p>
                      Tư vấn, xây dựng hệ thống ERP cho các doanh nghiệp kinh
                      doanh trong lĩnh vực sản xuất, chế biến thực phẩm. Ứng
                      dụng ERP để giải quyết việc quản lý doanh nghiệp và quản
                      lý sản xuất.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section id="whatwedo" className="services section-bg ">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>CHÚNG TA LÀM GÌ</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
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
                <div className="col-md-4 mt-4 mt-md-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="fal fa-tools" style={{ marginTop: 15 }}></i>
                    <p>Triển khai – Cài đặt</p>
                  </div>
                </div>
                <div className="col-md-4 mt-4 mt-md-0">
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
                <div className="col-md-4 mt-4 mt-md-0">
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
                <div className="col-md-4 mt-4 mt-md-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <i class="fal fa-atlas" style={{ marginTop: 15 }}></i>
                    <p>IT system</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <ShowBlog /> */}
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
export default connect(mapStateToProps)(Product);
