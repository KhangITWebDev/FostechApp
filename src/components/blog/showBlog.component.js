import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogListAction } from "../../store/actions/blog.action";
import { API_URL } from "../../store/constants/conFig";
import withRouter from "../../utils/withRouter";

class ShowBlog extends Component {
  state = {
    blog: "",
  };
  async componentWillMount() {
    await this.props.dispatch(getBlogListAction());
    this.setState({
      blog: this.props.blog,
    });
  }
  showBlog = (blogs) => {
    let result = "";
    if (blogs.length > 0) {
      result = blogs.map((blog, index) => {
        if (index < 6) {
          return (
            <div
              key={index}
              className="col-md-4 icon-box"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              style={{ marginBottom: "40px" }}
            >
              <Link to={`/blogDetail/${blog._id}`}>
                <div className="row no-gutters">
                  <div className="col-md-3 icon-box" data-aos="fade-up">
                    <img
                      src={`${API_URL}${blog.picture}?access_token=e8ba858476afc6a0f6c1d3d686e275a8`}
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="col-md-7 icon-box"
                    data-aos="fade-up"
                    style={{ color: "#111111" }}
                  >
                    <h4>{blog.title}</h4>
                    <i className="bi bi-clock" />
                    <a>
                      <time dateTime="2020-01-01">
                        {blog.date_created.slice(0, 10)}
                      </time>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      });
    }
    return result;
  };
  render() {
    let { blog } = this.state;
    return (
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Tin tức</h2>
          </div>
          <div className="row no-gutters">
            <div className="col-xl-12 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">{this.showBlog(blog)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    blog: state.blog.blogList,
  };
};
export default connect(mapStateToProps)(withRouter(ShowBlog));
