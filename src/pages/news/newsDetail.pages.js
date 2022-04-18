import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsListAction } from "../../store/actions/news.action";
import { API_URL } from "../../store/constants/conFig";
import withRouter from "../../utils/withRouter";

class NewsDetail extends Component {
  state = {
    newsItem: "",
  };
  async componentWillMount() {
    await this.props.dispatch(getNewsListAction());
    const { _id } = this.props.params;
    for (let i = 0; i < this.props.news.length; i++) {
      if (this.props.news[i]._id === _id) {
        this.setState({
          newsItem: this.props.news[i],
        });
        window.scrollTo(0, 500);
        break;
      }
    }
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
    console.log(count);
    return count;
  }

  render() {
    const { newsItem } = this.state;
    const mt = newsItem.content;
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
          {/* ======= Blog Single Section ======= */}
          <section id="blog" className="blog">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-12 entries">
                  <article className="entry entry-single">
                    <div className="entry-img">
                      <img
                        src={`${API_URL}${newsItem.picture}`}
                        className="img-fluid"
                        style={{ width: "100%", transform: "translateY(-25%)" }}
                      />
                    </div>
                    <h2 className="entry-title">
                      <a>{newsItem.title}</a>
                    </h2>
                    <div className="entry-content">
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
export default connect(mapStateToProps)(withRouter(NewsDetail));
