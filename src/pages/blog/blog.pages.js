import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchBlog from "../../components/blog/searchBlog.component";
import { getBlogListAction } from "../../store/actions/blog.action";
import { API_URL } from "../../store/constants/conFig";
import withRouter from "../../utils/withRouter";

class Blog extends Component {
  state = {
    blog: "",
    nameCatelogy: "",
  };
  async componentWillMount() {
    await this.props.dispatch(getBlogListAction());
    this.setState({
      blog: this.props.blog,
    });
    // window.scrollTo(0, 500);
  }
  componentDidUpdate() {
    if (this.state.nameCatelogy !== this.props.params.name) {
      this.setState({
        nameCatelogy: this.props.params.name,
      });
      // window.scrollTo(0, 500);
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
    return count;
  }
  showBlog = (blog) => {
    let result = "";
    const { nameCatelogy } = this.state;
    if (blog.length > 0) {
      if (blog.length > 0 && nameCatelogy) {
        blog = blog.filter((blogItem) => {
          return (
            blogItem.category.indexOf(nameCatelogy) !== -1 ||
            blogItem.title.toLowerCase().indexOf(nameCatelogy.toLowerCase()) !==
              -1 ||
            nameCatelogy.toLowerCase().indexOf(blogItem.title.toLowerCase()) !==
              -1
          );
        });
      }
      if (blog.length > 0) {
        result = blog.map((blogItem, index) => {
          const mt = blogItem.content;
          const a = this.findString("<p>", mt, 1);
          const b = this.findString("</p>", mt, 2);
          const my = mt.slice(a, b + 4);
          return (
            <article className="entry" key={index}>
              <div className="entry-img" style={{ textAlign: "center" }}>
                <img
                  src={`${API_URL}${blogItem.picture}?access_token=e8ba858476afc6a0f6c1d3d686e275a8`}
                  className="img-fluid"
                  style={{ marginTop: "10px" }}
                />
              </div>
              <h2 className="entry-title">
                <Link to={`/blogDetail/${blogItem._id}`}>{blogItem.title}</Link>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person" />
                    <a>{blogItem.name_user_created}</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock" />
                    <a>
                      <time dateTime="2020-01-01">
                        {blogItem.date_created.slice(0, 10)}
                      </time>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots" /> <a>12 Comments</a>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                <span dangerouslySetInnerHTML={{ __html: my }}></span>
                <div className="read-more">
                  <Link to={`/blogDetail/${blogItem._id}`}>Read More</Link>
                </div>
              </div>
            </article>
          );
        });
      } else {
        result = (
          <div className="alert alert-info">
            <strong>Info!</strong> Không tìm thấy sản phẩm.
          </div>
        );
      }
    } else {
      result = (
        <div className="alert alert-info">
          <strong>Info!</strong> Không tìm thấy sản phẩm.
        </div>
      );
    }
    return <>{result}</>;
  };
  render() {
    let { blog } = this.state;
    return (
      <div>
        <section
          id="hero"
          className="d-flex align-items-center"
          style={{
            backgroundImage:
              "url(../assets/img/lauren-mancke-aOC7TSLb1o8-unsplash.jpg)",
          }}
        >
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row txt-al">
              <h1>BLOG</h1>
              <h2 style={{ color: "rgb(190 185 185)" }}>
                Nơi chúng tôi kết nối với bạn
              </h2>
              <a className="btn-sz">
                <i className="fas fa-chevron-circle-down" />
              </a>
            </div>
          </div>
        </section>
        <main id="main">
          {/* ======= Blog Section ======= */}
          <section id="blog" className="blog">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-8 entries">
                  {this.showBlog(blog)}
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
                <SearchBlog />
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
    blog: state.blog.blogList,
  };
};
export default connect(mapStateToProps)(withRouter(Blog));
