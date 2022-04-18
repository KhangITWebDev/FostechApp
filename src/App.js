import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/footer/footer.components";
import Header from "./components/header/header.components";
import ScrollTo from "./components/scroll/scrollToTop.component";
import Blog from "./pages/blog/blog.pages";
import BlogDetail from "./pages/blog/blogDetail.pages";
import Contact from "./pages/contact/contact.pages";
import Home from "./pages/home/home.pages";
import News from "./pages/news/news.pages";
import NewsDetail from "./pages/news/newsDetail.pages";
import NotFound from "./pages/notFound/notFound.pages";
import Product from "./pages/product/product.pages";
import Recruit from "./pages/recruit/recruit.pages";
import RecruitDetail from "./pages/recruit/recruitDetail.pages";
import Services from "./pages/services/services.pages";

function App() {
  const checkPage = (page, number) => {
    if (number === 1) {
      return (
        <>
          <ScrollToTop
            smooth
            component={
              <i
                className="fas fa-arrow-alt-circle-up"
                style={{ fontSize: "50px", color: "#e03a3c" }}
              ></i>
            }
            style={{
              zIndex: 99,
              backgroundColor: "#ffffff00",
              boxShadow: "0 9px 25px 0 rgb(255 255 255 / 0%)",
            }}
          />
          <Header />
          {page}
          <Footer />
        </>
      );
    } else {
      return <>{page}</>;
    }
  };
  return (
    <div>
      <HashRouter>
        <ScrollTo />
        <Routes>
          <Route exact path="/" element={checkPage(<Home />, 1)} />
          <Route exact path="/contact" element={checkPage(<Contact />, 1)} />
          <Route exact path="/blog" element={checkPage(<Blog />, 1)} />
          <Route
            exact
            path="/blogCatelogy/:name"
            element={checkPage(<Blog />, 1)}
          />
          <Route exact path="/news" element={checkPage(<News />, 1)} />
          <Route exact path="/recruit" element={checkPage(<Recruit />, 1)} />
          <Route exact path="/product" element={checkPage(<Product />, 1)} />
          <Route exact path="/services" element={checkPage(<Services />, 1)} />
          <Route
            exact
            path="/blogDetail/:_id"
            element={checkPage(<BlogDetail />, 1)}
          />
          <Route
            exact
            path="/newsDetail/:_id"
            element={checkPage(<NewsDetail />, 1)}
          />
          <Route
            exact
            path="/recruit/:_id"
            element={checkPage(<RecruitDetail />, 1)}
          />
          <Route exact path="/product" element={checkPage(<Product />, 1)} />
          <Route exact path="*" element={checkPage(<NotFound />, 0)} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
