import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBlogListAction } from "../../store/actions/blog.action";
import { API_URL } from "../../store/constants/conFig";
import withRouter from "../../utils/withRouter";

class SearchBlog extends Component {
  state = {
    blog: "",
    nameCatelogy: "",
    searchBlog: "",
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
  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
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
                <a>{blogItem.title}</a>
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
          <div class="alert alert-info">
            <strong>Info!</strong> Không tìm thấy sản phẩm.
          </div>
        );
      }
    } else {
      result = (
        <div class="alert alert-info">
          <strong>Info!</strong> Không tìm thấy sản phẩm.
        </div>
      );
    }
    return <>{result}</>;
  };
  showBlogRecent = (blog) => {
    let result = "";
    if (blog.length > 0) {
      result = blog.map((blogItem, index) => {
        if (index < 5) {
          return (
            <div className="post-item clearfix" key={index}>
              <img
                src={`${API_URL}${blogItem.picture}?access_token=e8ba858476afc6a0f6c1d3d686e275a8`}
              />
              <h4>
                <Link to={`/blogDetail/${blogItem._id}`}>{blogItem.title}</Link>
              </h4>
              <time dateTime="2020-01-01">
                {blogItem.date_created.slice(0, 10)}
              </time>
            </div>
          );
        }
      });
    }
    return result;
  };
  showCatelogy = (catelogy) => {
    if (this.state.blog.length > 0) {
      for (let i = 0; i < this.state.blog.length; i++) {
        if (this.state.blog[i].category === catelogy) {
          return this.state.blog[i].ten_nblog;
        }
      }
    }
  };
  render() {
    let { blog, searchBlog } = this.state;
    let listCategory = [];
    let chooseCategory;
    if (blog.length > 0) {
      let temp = 0;
      for (let i = 0; i < blog.length; i++) {
        listCategory[temp] = blog[i].category;
        temp = temp + 1;
      }
      listCategory = Array.from(new Set(listCategory));
      chooseCategory = listCategory.map((catelogy, index) => {
        return (
          <li key={index}>
            <Link to={`/blogCatelogy/${catelogy}`}>
              {this.showCatelogy(catelogy)}
            </Link>
          </li>
        );
      });
    }
    return (
      <div className="col-lg-4">
        <div className="sidebar">
          <h3 className="sidebar-title">Tìm kiếm</h3>
          <div className="sidebar-item search-form">
            <form>
              <input type="text" name="searchBlog" onChange={this.onChange} />
              {searchBlog === "" ? (
                <Link
                  to="/blog"
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    padding: "11px 15px",
                    margin: "-1px",
                    background: "#e03a3c",
                    color: "#fff",
                    borderRadius: "0 4px 4px 0",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    border: 0,
                    transition: "0.3s",
                    lineHeight: "0",
                  }}
                >
                  <i className="bi bi-search" />
                </Link>
              ) : (
                <Link
                  to={`/blogCatelogy/${searchBlog}`}
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    padding: "11px 15px",
                    margin: "-1px",
                    background: "#e03a3c",
                    color: "#fff",
                    borderRadius: "0 4px 4px 0",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    border: 0,
                    transition: "0.3s",
                    lineHeight: "0",
                  }}
                >
                  <i className="bi bi-search" />
                </Link>
              )}
            </form>
          </div>
          <h3 className="sidebar-title">Thể loại</h3>
          <div className="sidebar-item categories">
            <ul>{chooseCategory}</ul>
          </div>
          <h3 className="sidebar-title">Bài viết gần đây</h3>
          <div className="sidebar-item recent-posts">
            {this.showBlogRecent(blog)}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    blog: state.blog.blogList,
  };
};
export default connect(mapStateToProps)(withRouter(SearchBlog));
