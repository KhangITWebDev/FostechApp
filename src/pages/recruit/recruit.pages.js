import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNewsListAction } from "../../store/actions/news.action";
import { API_URL } from "../../store/constants/conFig";

class Recruit extends Component {
  state = {
    news: "",
    recruit: [
      {
        id: 1,
        title: "Lập Trình Viên NodeJS Developer",
        image: "../assets/img/recruitment/nodejs.jpg",
        author: "Khang",
        date: "14-04-2022",
        person: 2,
      },
      {
        id: 2,
        title: "Lập Trình Viên ReactJS Developer",
        image: "../assets/img/recruitment/iconReact.jpg",
        author: "Khang",
        date: "14-04-2022",
        person: 1,
      },
      {
        id: 3,
        title: "Lập Trình Viên Mobile React Native",
        image: "../assets/img/recruitment/iconReactNative.jpg",
        author: "Khang",
        date: "14-04-2022",
        person: 2,
      },
      {
        id: 4,
        title: "Chuyên Viên Triển Khai Phần Mềm Quản Lý Doanh Nghiệp",
        image: "../assets/img/recruitment/deployment.jpg",
        author: "Khang",
        date: "14-04-2022",
        person: 1,
      },
    ],
  };
  async componentWillMount() {
    await this.props.dispatch(getNewsListAction());
    this.setState({
      news: this.props.news,
    });
  }

  findString(sub, str, n) {
    let count = 0;
    for (let i = 0; i < str.length; ++i) {
      if (str.substring(i, i + sub.length) == sub) {
        count += 1;
        if (count == n) {
          count = i;
          break;
        }
      }
    }
    return count;
  }

  showNews = (news) => {
    let result = "";
    // if (news.length > 0) {
    //   result = news.map((newsItem, index) => {
    //     const mt = newsItem.content;
    //     const a = this.findString("<p>", mt, 1);
    //     const b = this.findString("</p>", mt, 2);
    //     const my = mt.slice(a, b + 4);
    //     return (
    //       <article className="entry" key={index}>
    //         <div className="row">
    //           <div className="col-md-4">
    //             <div
    //               className="entry-img"
    //               style={{ height: "100%", margin: 0 }}
    //             >
    //               <img
    //                 src={`${API_URL}${newsItem.picture}`}
    //                 className="img-fluid"
    //               />
    //             </div>
    //           </div>
    //           <div className="col-md-8">
    //             <h2 className="entry-title">
    //               <Link to={`/newsDetail/${newsItem._id}`}>
    //                 {newsItem.title}
    //               </Link>
    //             </h2>
    //             {/* <div className="entry-meta">
    //               <ul>
    //                 <li className="d-flex align-items-center">
    //                   <i className="bi bi-person" /> <a>John Doe</a>
    //                 </li>
    //                 <li className="d-flex align-items-center">
    //                   <i className="bi bi-clock" />
    //                   <a>
    //                     <time dateTime="2020-01-01">{newsItem.date_created.slice(0, 10)}</time>
    //                   </a>
    //                 </li>
    //                 <li className="d-flex align-items-center">
    //                   <i className="bi bi-chat-dots" /> <a>12 Comments</a>
    //                 </li>
    //               </ul>
    //             </div> */}
    //             <div className="entry-content mt-auto">
    //               <span dangerouslySetInnerHTML={{ __html: my }}></span>
    //               <div className="read-more">
    //                 <Link to={`/newsDetail/${newsItem._id}`}>Read More</Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </article>
    //     );
    //   });
    // }
    result = (
      <article className="entry recruit-left">
        {news.map((item, index) => (
          <div className="row recruit-left-item" key={index}>
            <div className="col-md-4">
              <div className="entry-img" style={{ height: "100%", margin: 0 }}>
                <Link to={`/recruit/${item.id}`}>
                  <img src={item.image} className="img-fluid" />
                </Link>
              </div>
            </div>
            <div className="col-md-8 recruit-left-info">
              <h2 className="entry-title recruit-left-item-title">
                <Link to={`/recruit/${item.id}`}>{item.title}</Link>
              </h2>
              <div className="entry-meta recruit-left-item-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person" /> <a>Mr. {item.author}</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock" />
                    <a>{item.date}</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="recruit-left-item-desc">
                  <strong>Số lượng</strong>: {item.person} người
                </p>
                <p className="recruit-left-item-desc">
                  <strong>Thời gian</strong>: Full Time
                </p>
              </div>
              <div className="entry-content mt-auto">
                {/* <span dangerouslySetInnerHTML={{ __html: my }}></span> */}
                <div className="read-more">
                  <Link to={`/recruit/${item.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    );
    return result;
  };

  render() {
    const { recruit } = this.state;
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
                Làm việc trong môi trường chuyên nghiệp
              </h2>
              <a className="btn-sz">
                <i className="fas fa-chevron-circle-down" />
              </a>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="blog" className="blog">
            <div className="container recruit-container" data-aos="fade-up">
              {this.showNews(recruit)}
              <img
                src="../assets/img/recruitment/img1.jpg"
                alt=""
                className="recruit-right"
              />
              {/* <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <a>1</a>
                  </li>
                  <li className="active">
                    <a>2</a>
                  </li>
                  <li>
                    <a>3</a>
                  </li>
                </ul>
              </div> */}
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

export default connect(mapStateToProps)(Recruit);
