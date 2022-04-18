import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsListAction } from "../../store/actions/news.action";
import withRouter from "../../utils/withRouter";

class RecruitDetail extends Component {
  state = {
    newsItem: "",
  };
  async componentWillMount() {
    await this.props.dispatch(getNewsListAction());
    window.scrollTo(0, 500);
    const { _id } = this.props.params;
    switch (parseInt(_id)) {
      case 1: {
        this.setState({
          newsItem: {
            title: "Lập Trình Viên Nodejs Developer",
          },
        });
        break;
      }
      case 2: {
        this.setState({
          newsItem: {
            title: "Lập Trình Viên Reactjs Developer",
          },
        });
        break;
      }
      case 3: {
        this.setState({
          newsItem: {
            title: "Lập Trình Viên Mobile React Native",
          },
        });
        break;
      }
      case 4: {
        this.setState({
          newsItem: {
            title: "Chuyên Viên Triển Khai Phần Mềm Quản Lý Doanh Nghiệp",
            content:
              "<p><strong>M&Ocirc; TẢ C&Ocirc;NG VIỆC</strong></p><p><strong>C&ocirc;ng Việc Ch&iacute;nh:&nbsp;</strong></p><ul><li>Khảo s&aacute;t nghiệp vụ, quy hoạch thực tế tại kh&aacute;ch h&agrave;ng</li><li>Tư Vấn &amp;&nbsp;triển khai c&aacute;c phần m&ecirc;m quả l&yacute; nghiệp vụ của c&ocirc;ng ty</li><li>Viết t&agrave;i liệu triển khai &amp; phối hợp lập tr&igrave;nh xử l&iacute;</li><li>Trả lời &amp; xử l&yacute; c&aacute;c thắc mắc của kh&aacute;c h&agrave;ng</li></ul><p><strong>Tr&igrave;nh độ tối thiểu:&nbsp;</strong></p><ul><li>Tốt nghiệp đại học/cao đẳng chuy&ecirc;n ngh&agrave;nh: Hệ thống th&ocirc;ng tin, Quản trị kinh doanh, T&agrave;i ch&iacute;nh kế to&aacute;n,..</li><li>Kỷ năng viết &amp; tr&igrave;nh b&agrave;y tốt</li><li>Kỷ băng tư duy logic h&oacute;a vấn đề/ đề t&agrave;i quản l&yacute; doanh nghiệp</li><li>C&oacute; kiến thức tổng quan về kinh tế</li><li>C&oacute; kiến thức tổng quan/chuy&ecirc;n s&acirc;u về t&agrave;i ch&iacute;nh, kế to&aacute;n</li><li>C&oacute; kiến thức về c&ocirc;ng nghệ th&ocirc;ng tin l&agrave; một lợi thế&nbsp;</li><li>Ưu ti&ecirc;n ứng vi&ecirc;n c&oacute; kinh nghiệm quản l&yacute;&nbsp;dự &aacute;n, tư vấn v&agrave; triển khai phần mềm&nbsp;</li></ul><p><strong>Quyển lợi:</strong></p><ul><li>C&oacute; chương tr&igrave;nh ph&aacute;t triển nh&acirc;n sự &amp; đ&agrave;o tạo ri&ecirc;ng theo thế mạnh nh&acirc;n vi&ecirc;n</li><li>Ch&iacute;nh s&aacute;ch &amp; cấp bậc lương theo năng lực sau thời gian thử việc&nbsp;</li><li>Hưởng đầy đủ BHXH, y tế v&agrave; c&aacute;c quyền lợi kh&aacute;c theo Bộ luật Lao động v&agrave; c&ocirc;ng ty&nbsp;</li><li>Thưởng cuối năm, thưởng hiệu suất, thưởng dự &aacute;n, ... theo th&agrave;nh t&iacute;ch c&ocirc;ng việc</li><li>M&ocirc;i trường trẻ trung, năng động, đầy cơ hội ph&aacute;t triển v&agrave; thỏa sức đam m&ecirc; với c&ocirc;ng việc&nbsp;</li><li>Tham gia chương tr&igrave;nh nghỉ m&aacute;t h&agrave;ng năm, team building</li></ul><p><strong>TH&Ocirc;NG TIN LI&Ecirc;N HỆ:</strong></p><ul><li>C&ocirc;ng ty: C&Ocirc;NG TY CỔ PHẦN AURA CAPITAL</li><li>Người li&ecirc;n hệ: P. Nh&acirc;n sự</li><li>Email: hannt@aura.vn - tuyendung@aura.vn</li><li>Số điện thoại: <strong><a href='tel:0931875933'>0931 875 933</a> - <a href='tel:0931875933'>0914&nbsp;433 113</a></strong></li><li>Địa chỉ li&ecirc;n hệ:&nbsp;1-3 Đường D4 KDC Him Lam K&ecirc;nh Tẻ, Phường T&acirc;n Hưng, Quận 7, HCM, Việt Nam</li></ul><p>&nbsp;</p><p>&nbsp;</p>",
          },
        });
        break;
      }
      default: {
        break;
      }
    }
    // for (let i = 0; i < this.props.news.length; i++) {
    //   if (this.props.news[i]._id === _id) {
    //     this.setState({
    //       newsItem: this.props.news[i],
    //     });
    //     window.scrollTo(0, 500);
    //     break;
    //   }
    // }
  }
  findString(sub, str, n) {
    let count = 0;
    for (let i = 0; i < str.length; ++i) {
      if (str.substring(i, i + sub.length) == sub) {
        count += 1;
        if ((count = n)) {
          count = i;
          break;
        }
      }
    }
    console.log(count);
    return count;
  }

  render() {
    const { newsItem } = this.state;
    const mt =
      newsItem.content ||
      "<p><strong>M&Ocirc; TẢ C&Ocirc;NG VIỆC</strong></p><p><strong>C&ocirc;ng Việc Ch&iacute;nh:&nbsp;</strong></p><ul><li>Lập tr&igrave;nh ứng dụng mobile tr&ecirc;n hệ thồng flatform hiện c&oacute; của c&ocirc;ng ty</li><li>Phố hợp bộ phận triển khai tiếp nhận y&ecirc;u cầu lập tr&igrave;nh ứng dụng</li><li>Hỗ trợ bảo tr&igrave;nh &amp; n&acirc;ng cấp&nbsp; ứng dụng mobile kh&aacute;ch h&agrave;ng hiện hữu</li><li>Trả lời &amp; xử l&yacute; c&aacute;c thắc mắc của kh&aacute;c h&agrave;ng</li></ul><p><strong>Tr&igrave;nh độ tối thiểu:&nbsp;</strong></p><ul><li>Tốt nghiệp đại học/cao đẳng chuy&ecirc;n ngh&agrave;nh c&ocirc;ng nghệ th&ocirc;ng tin</li><li>Kiến thức nền tả UX/ UI</li><li>C&oacute; kiến thức về CSDL: MongoDB, Redis,...</li><li>C&oacute; kiến thức về ng&ocirc;n ngữ lập trình NodeJS</li><li>C&oacute; kiến thức về c&aacute;c framework frontend: JS, reactJS(&iacute;t nhất 1 năm kinh nghiệm)</li><li>C&oacute; kiến thức về Javascript, HTML, CSS (&iacute;t nhất 1 năm kinhnghiệm)</li><li>Sử dụng được c&ocirc;ng cụ quản l&yacute; m&atilde; nguồn &amp; dự&nbsp;&aacute;n như Git, Github</li></ul><p><strong>Quyển lợi:</strong></p><ul><li>Lương thỏa thuận</li><li>Lương th&aacute;ng 13 v&agrave; thưởng theo kết quả kinh doanh</li><li>Bảo hiểm x&atilde; hội, y tế v&agrave; c&aacute;c quyền lợi kh&aacute;ctheo luật lao động&nbsp;</li><li>Tham gia chương tr&igrave;nh nghỉ m&aacute;t h&agrave;ng năm, team building</li><li>&nbsp;M&ocirc;i trường trẻ trung, năng động, đầy cơ hội ph&aacute;t triển v&agrave; thỏa sức đam m&ecirc; với c&ocirc;ng việc</li><li>Thưởng n&oacute;ng, thưởng theo dự &aacute;n</li></ul><p><strong>TH&Ocirc;NG TIN LI&Ecirc;N HỆ:</strong></p><ul><li>C&ocirc;ng ty: C&Ocirc;NG TY CỔ PHẦN AURA CAPITAL</li><li>Người li&ecirc;n hệ: P. Nh&acirc;n sự</li><li>Email: hannt@aura.vn - tuyendung@aura.vn</li><li>Số điện thoại: <strong><a href='tel:0931875933'>0931 875 933</a> -<a href='tel:0914433113'>0914&nbsp;433 113</a></strong></li><li>Địa chỉ li&ecirc;n hệ:&nbsp;1-3 Đường D4 KDC Him Lam K&ecirc;nh Tẻ, Phường T&acirc;n Hưng, Quận 7, HCM, Việt Nam</li></ul><p>&nbsp;</p><p>&nbsp;</p>";
    return (
      <div>
        <section
          id="hero"
          className="d-flex align-items-center"
          style={{
            backgroundImage: "url(../assets/img/recruitment/banner.jpg)",
          }}
        >
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row txt-al">
              <h1>Tuyển Dụng</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                Môi trường làm việc năng động và sáng tạo
              </h2>
              <a className="btn-sz">
                <i className="fas fa-chevron-circle-down" />
              </a>
            </div>
          </div>
        </section>
        <main id="main">
          {/* ======= Blog Single Section ======= */}
          <section id="blog" className="blog">
            <div className="container" data-aos="fade-up">
              <div className="row" style={{ width: "80%", margin: "0 auto" }}>
                <div className="col-lg-12 entries">
                  <article className="entry entry-single">
                    {/* <div className="entry-img">
                      <img
                        src={`${API_URL}${newsItem.picture}`}
                        className="img-fluid"
                        style={{ width: "100%", transform: "translateY(-25%)" }}
                      />
                    </div> */}
                    <h2 className="entry-title">
                      {/* <a>{newsItem.title}</a> */}
                    </h2>
                    <div className="entry-content">
                      <h1 className="text-center text-uppercase">
                        {newsItem.title}
                      </h1>
                      <h3>
                        <p>
                          <strong>GIỚI THIỆU CÔNG VIỆC</strong>
                        </p>
                      </h3>
                      <p>Địa điểm: Thành phố Hồ Chí Minh</p>
                      <p>Loại công việc: Full Time</p>
                      <p>Loại hợp đồng: Dài hạn</p>
                      <p>Mã tham khảo công việc: IT0{this.props.params._id}</p>
                      <hr />
                      <p className="text-center">
                        <strong>Vị Trí</strong>
                      </p>

                      <p className="text-center text-uppercase">
                        <strong>{newsItem.title}</strong>
                      </p>
                      <span
                        dangerouslySetInnerHTML={{ __html: mt }}
                        id="newsImage"
                      ></span>
                    </div>
                    <div className="entry-footer">
                      <i className="bi bi-folder" />
                      <ul className="cats">
                        <li>
                          <a href="#">Business</a>
                        </li>
                      </ul>
                      <i className="bi bi-tags" />
                      <ul className="tags">
                        <li>
                          <a href="#">Creative</a>
                        </li>
                        <li>
                          <a href="#">Tips</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news: state.news.newsList,
  };
};
export default connect(mapStateToProps)(withRouter(RecruitDetail));
