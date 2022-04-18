import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNewsListAction } from "../../store/actions/news.action";
import { API_URL } from "../../store/constants/conFig";

class News extends Component {
  state = {
    news: [],
  };
  async componentWillMount() {
    await this.props.dispatch(getNewsListAction());
    this.setState({
      news: this.props.news.filter((x) => x.newsfeed === true),
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
    // const newslist = news.filter(x => x.newsfeed === true)
    console.log(news.filter((x) => x.newsfeed === true));
    if (news.length > 0) {
      result = news.map((newsItem, index) => {
        const mt = newsItem.content;
        const a = this.findString("<p>", mt, 1);
        const b = this.findString("</p>", mt, 2);
        const my = mt.slice(a, b + 4);
        return (
          <article className="entry" key={index}>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="entry-img"
                  style={{ height: "100%", margin: 0 }}
                >
                  <img
                    src={`${API_URL}${newsItem.picture}`}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <h2 className="entry-title">
                  <Link to={`/newsDetail/${newsItem._id}`}>
                    {newsItem.title}
                  </Link>
                </h2>
                {/* <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person" /> <a>John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock" />
                      <a>
                        <time dateTime="2020-01-01">{newsItem.date_created.slice(0, 10)}</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots" /> <a>12 Comments</a>
                    </li>
                  </ul>
                </div> */}
                <div className="entry-content">
                  <span dangerouslySetInnerHTML={{ __html: my }}></span>
                  <div className="read-more">
                    <Link to={`/newsDetail/${newsItem._id}`}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      });
    }
    return result;
  };

  render() {
    const { news } = this.state;
    return (
      <div>
        <section
          id="hero"
          className="d-flex align-items-center"
          style={{
            backgroundImage:
              "url(../assets/img/filip-mishevski-c5QdMcuFlgY-unsplash.jpg)",
          }}
        >
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row txt-al">
              <h1>Tin tức</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                Luôn đổi mới và sáng tạo
              </h2>
              <a className="btn-sz">
                <i className="fas fa-chevron-circle-down" />
              </a>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="blog" className="blog">
            <div className="container" data-aos="fade-up">
              {this.showNews(news)}
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

export default connect(mapStateToProps)(News);
