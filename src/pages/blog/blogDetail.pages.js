import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBlog from "../../components/blog/searchBlog.component";
import { getBlogListAction } from "../../store/actions/blog.action";
import { API_URL } from "../../store/constants/conFig";
import withRouter from "../../utils/withRouter";

class BlogDetail extends Component {
  state = {
    blogItem: "",
    idBlog: "",
  };
  async componentWillMount() {
    await this.props.dispatch(getBlogListAction());
    const { _id } = this.props.params;
    for (let i = 0; i < this.props.blog.length; i++) {
      if (this.props.blog[i]._id === _id) {
        this.setState({
          blogItem: this.props.blog[i],
          idBlog: this.props.params._id,
        });
        window.scrollTo(0, 500);
        break;
      }
    }
  }
  componentDidUpdate() {
    if (this.state.idBlog !== this.props.params._id) {
      const { _id } = this.props.params;
      for (let i = 0; i < this.props.blog.length; i++) {
        if (this.props.blog[i]._id === _id) {
          this.setState({
            blogItem: this.props.blog[i],
            idBlog: this.props.params._id,
          });
          window.scrollTo(0, 500);
          break;
        }
      }
    }
  }
  render() {
    const { blogItem } = this.state;
    const mt = blogItem.content;
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
              <h2 style={{ color: "rgb(190 185 185)" }}>Đừng nói, hãy làm</h2>
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
                <div className="col-lg-8 entries">
                  <article className="entry entry-single">
                    <div className="entry-img" style={{ textAlign: "center" }}>
                      <img
                        src={`${API_URL}${blogItem.picture}?access_token=e8ba858476afc6a0f6c1d3d686e275a8`}
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="entry-title">
                      <a>{blogItem.title}</a>
                    </h2>
                    <div className="entry-meta">
                      <ul>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-person" />{" "}
                          <a>{blogItem.name_user_created}</a>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-clock" />
                          <a>
                            <time dateTime="2020-01-01">
                              {blogItem.date_created
                                ? blogItem.date_created.slice(0, 10)
                                : ""}
                            </time>
                          </a>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-chat-dots" /> <a>12 Comments</a>
                        </li>
                      </ul>
                    </div>
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
                          <a>Business</a>
                        </li>
                      </ul>
                      <i className="bi bi-tags" />
                      <ul className="tags">
                        <li>
                          <a>Creative</a>
                        </li>
                        <li>
                          <a>Tips</a>
                        </li>
                        <li>
                          <a>Marketing</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  {/* End blog entry */}
                </div>
                <SearchBlog />
              </div>
            </div>
          </section>

          {/* End Blog Single Section */}
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
export default connect(mapStateToProps)(withRouter(BlogDetail));
