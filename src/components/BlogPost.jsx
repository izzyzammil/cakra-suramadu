import React from "react";
import { dataBlogList } from "../data/PostBlogList";
import { dataPostMasonry } from "../data/PostMasonry";

const BlogPost = ({ type }) => {
  const PostList = () => {
    switch (type) {
      case "masonry":
        return (
          <section className="section first-section">
            <div className="container-fluid">
              <div className="masonry-blog clearfix">
                {dataPostMasonry.map((item, index) => {
                  return (
                    <div className={item.layout} key={index}>
                      <div className="masonry-box post-media">
                        <img src={item.imageUrl} alt="" className="img-fluid" />
                        <div className="shadoweffect">
                          <div className="shadow-desc">
                            <div className="blog-meta">
                              <span className="bg-orange">
                                <a href="tech-category-01.html" title="">
                                  {item.category}
                                </a>
                              </span>
                              <h4>
                                <a href="tech-single.html" title="">
                                  {item.postTitle}
                                </a>
                              </h4>
                              <small>
                                <a href="tech-single.html" title="">
                                  {item.datePost}
                                </a>
                              </small>
                              <small>
                                <a href="tech-author.html" title="">
                                  {item.author}
                                </a>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case "blog-list":
        return (
          <div className="blog-list clearfix">
            {dataBlogList.map((item, index) => {
              return (
                <>
                  <div className="blog-box row" key={index}>
                    <div className="col-md-4">
                      <div className="post-media">
                        <a href="tech-single.html" title="">
                          <img src={item.imgUrl} alt="" className="img-fluid" />
                          <div className="hovereffect"></div>
                        </a>
                      </div>
                    </div>

                    <div className="blog-meta big-meta col-md-8">
                      <h4>
                        <a href="tech-single.html" title="">
                          {item.postTitle}
                        </a>
                      </h4>
                      <p>{item.desc}</p>
                      <small className="firstsmall">
                        <a
                          className="bg-orange"
                          href="tech-category-01.html"
                          title=""
                        >
                          {item.category}
                        </a>
                      </small>
                      <small>
                        <a href="tech-single.html" title="">
                          {item.datePost}
                        </a>
                      </small>
                      <small>
                        <a href="tech-author.html" title="">
                          {item.author}
                        </a>
                      </small>
                      <small>
                        <a href="tech-single.html" title="">
                          <i className="fa fa-eye"></i> {item.views}
                        </a>
                      </small>
                    </div>
                  </div>
                  <hr className="invis" />
                </>
              );
            })}
          </div>
        );

      default:
        break;
    }
  };

  return <div>{PostList()}</div>;
};

export default BlogPost;