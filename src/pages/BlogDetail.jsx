import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FollowUs from "../components/widgets/FollowUs";
import PopularPost from "../components/widgets/PopularPost";
import RecentReviews from "../components/widgets/RecentReviews";
import TrendVideos from "../components/widgets/TrendVideos";

const BlogDetail = () => {
  return (
    <div id="wrapper">
      <Header />

      <section class="section single-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div class="page-wrapper">
                <div class="blog-title-area text-center">
                  <span class="color-orange">
                    <a href="tech-category-01.html" title="">
                      Technology
                    </a>
                  </span>

                  <h3>
                    Top 10 phone applications and 2017 mobile design awards
                  </h3>

                  <div class="blog-meta big-meta">
                    <small>
                      <a href="tech-single.html" title="">
                        21 July, 2017
                      </a>
                    </small>
                    <small>
                      <a href="tech-author.html" title="">
                        by Jessica
                      </a>
                    </small>
                    <small>
                      <a href="#" title="">
                        <i class="fa fa-eye"></i> 2344
                      </a>
                    </small>
                  </div>

                  <div class="post-sharing">
                    <ul class="list-inline">
                      <li>
                        <a href="#" class="fb-button btn btn-primary">
                          <i class="fa fa-facebook"></i>{" "}
                          <span class="down-mobile">Share on Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="tw-button btn btn-primary">
                          <i class="fa fa-twitter"></i>{" "}
                          <span class="down-mobile">Tweet on Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="gp-button btn btn-primary">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="single-post-media">
                  <img
                    src="assets/upload/tech_menu_08.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <div class="blog-content">
                  <div class="pp">
                    <p>
                      In lobortis pharetra mattis. Morbi nec nibh iaculis,{" "}
                      <a href="#">bibendum augue a</a>, ultrices nulla. Nunc
                      velit ante, lacinia id tincidunt eget, faucibus nec nisl.
                      In mauris purus, bibendum et gravida dignissim, venenatis
                      commodo lacus. Duis consectetur quis nisi nec accumsan.
                      Pellentesque enim velit, ut tempor turpis. Mauris felis
                      neque, egestas in lobortis et,iaculis at nunc ac, rhoncus
                      sagittis ipsum.{" "}
                    </p>

                    <h3>
                      <strong>
                        Maecenas non convallis quam, eu sodales justo.
                        Pellentesque quis lectus elit. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                      </strong>
                    </h3>

                    <p>
                      Donec nec metus sed leo sollicitudin ornare sed consequat
                      neque. Aliquam iaculis neque quis dui venenatis, eget
                      posuere felis viverra. Ut sit amet feugiat elit, nec
                      elementum velit. Sed eu nisl convallis, efficitur turpis
                      eu, euismod nunc. Proin neque enim, malesuada non lobortis
                      nec, facilisis et lectus. Ie consectetur. Nam eget neque
                      ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio
                      posuere.{" "}
                    </p>

                    <p>
                      Vivamus non condimentum orci. Pellentesque venenatis nibh
                      sit amet est vehicula lobortis. Cras eget aliquet eros.
                      Nunc lectus elit, suscipit at nunc sed, finibus imperdiet
                      ipsum. Maecenas dapibus neque sodales nulla finibus
                      volutpat. Integer pulvinar massa vitae ultrices posuere.
                      Proin ut tempor turpis. Mauris felis neque, egestas in
                      lobortis et, sodales non ante. Ut vestibulum libero quis
                      luctus tempus. Nullam eget dignissim massa. Vivamus id
                      condimentum orci. Nunc ac sem urna. Aliquam et hendrerit
                      nisl massa nunc.{" "}
                    </p>
                  </div>

                  <img
                    src="assets/upload/tech_menu_09.jpg"
                    alt=""
                    class="img-fluid img-fullwidth"
                  />

                  <div class="pp">
                    <h3>
                      <strong>
                        Nam non velit est. Sed lobortis arcu vitae nunc molestie
                        consectetur. Nam eget neque ac ex fringilla dignissim eu
                        ac est. Nunc et nisl vel odio posuere.{" "}
                      </strong>
                    </h3>

                    <p>
                      Vivamus non condimentum orci. Pellentesque venenatis nibh
                      sit amet est vehicula lobortis. Cras eget aliquet eros.
                      Nunc lectus elit, suscipit at nunc sed, finibus imperdiet
                      ipsum. Maecenas dapibus neque sodales nulla finibus
                      volutpat. Integer pulvinar massa vitae ultrices posuere.
                      Proin ut tempor turpis. Mauris felis neque, egestas in
                      lobortis et, sodales non ante. Ut vestibulum libero quis
                      luctus tempus. Nullam eget dignissim massa. Vivamus id
                      condimentum orci. Nunc ac sem urna. Aliquam et hendrerit
                      nisl massa nunc.{" "}
                    </p>

                    <p>
                      Morbi pharetra porta consequat. Aenean et diam sapien.{" "}
                      <a href="#">Interdum et malesuada</a> fames ac ante ipsum
                      primis in faucibus. Pellentesque dictum ligula iaculis,
                      feugiat metus eu, sollicitudin ex. Quisque eu ullamcorper
                      ligula. In vel ex ac purus finibus viverra. Maecenas
                      pretium lobortis turpis. Fusce lacinia nisi in tortor
                      massa nunc.
                    </p>

                    <ul class="check">
                      <li>
                        Integer sit amet odio ac lectus imperdiet elementum.
                      </li>
                      <li>
                        Praesent vitae lacus sed lacus ullamcorper mollis.
                      </li>
                      <li>
                        Donec vitae metus ac felis vulputate tincidunt non et
                        ex.
                      </li>
                      <li>In dapibus sapien at viverra venenatis.</li>
                      <li>Pellentesque mollis velit id maximus finibus.</li>
                    </ul>

                    <p>
                      Proin ultricies nulla consectetur, sollicitudin dolor at,
                      sollicitudin mauris. Maecenas at nunc nunc. Ut nulla
                      felis, tincidunt et porttitor at, rutrum in dolor. Aenean
                      id tincidunt ligula. Donec vitae placerat odio. Mauris
                      accumsan nibh ut nunc maximus, ac auctor elit vehicula.
                      Cras leo sem, vehicula a ultricies ac, condimentum vitae
                      lectus. Sed ut eros euismod, luctus nisl eu, congue odio.{" "}
                    </p>

                    <p>
                      <img
                        src="assets/upload/tech_menu_10.jpg"
                        class="float-left"
                        width="380"
                        alt=""
                      />
                      Suspendisse ultrices placerat dolor sed efficitur. Morbi
                      in laoreet diam. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                      Mauris ut massa id lectus laoreet porta non in metus.
                      Donec nibh justo, tincidunt non justo ut, tincidunt
                      malesuada turpis. Cras pellentesque sollicitudin ex eget
                      pharetra.rta non in metus. Donec nibh justo, tincidunt non
                      justo ut, tincidunt malesuada turpis. Cras pellentesque
                      sollicitudin ex eget pharetra.
                    </p>

                    <h3>
                      <strong>
                        Nam non velit est. Sed lobortis arcu vitae nunc molestie
                        consectetur. Nam eget neque ac ex fringilla dignissim eu
                        ac est. Nunc et nisl vel odio posuere.{" "}
                      </strong>
                    </h3>

                    <p>
                      Aliquam eget maximus odio. Aliquam varius nisl ut leo
                      fermentum, id fringilla magna tempus. Curabitur quis
                      bibendum lorem, ut suscipit tellus. Morbi id dictum justo,
                      et massa nunc. Mauris laoreet, neque et varius malesuada,
                      justo neque consequat dolor, sit amet semper dui ligula
                      commodo enim. Duis mauris magna, euismod in ante sed,
                      laoreet faucibus elit. Nam euismod vulputate lorem, nec
                      tincidunt lacus volutpat sit amet. In libero eros,
                      dignissim vitae quam sed, maximus consectetur justo. Donec
                      id orci eget odio convallis pellentesque. Quisque urna
                      cras amet.Vivamus non condimentum orci. Pellentesque
                      venenatis nibh sit amet est vehicula lobortis. Cras eget
                      aliquet eros. Nunc lectus elit, suscipit at nunc sed,
                      finibus imperdiet ipsum. Maecenas dapibus neque sodales
                      nulla finibus volutpat. Integer pulvinar massa vitae
                      ultrices posuere. Proin ut tempor turpis. Mauris felis
                      neque, egestas in lobortis et, sodales non ante. Ut
                      vestibulum libero quis luctus tempus. Nullam eget
                      dignissim massa. Vivamus id condimentum orci. Nunc ac sem
                      urna. Aliquam et hendrerit nisl massa nunc.{" "}
                    </p>

                    <p>
                      <img
                        src="assets/upload/tech_menu_11.jpg"
                        class="float-right"
                        width="380"
                        alt=""
                      />
                      Suspendisse ultrices placerat dolor sed efficitur. Morbi
                      in laoreet diam. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                      Mauris ut massa id lectus laoreet porta non in metus.
                      Donec nibh justo, tincidunt non justo ut, tincidunt
                      malesuada turpis. Cras pellentesque sollicitudin ex eget
                      pharetra.rta non in metus. Donec nibh justo, tincidunt non
                      justo ut, tincidunt malesuada turpis. Cras pellentesque
                      sollicitudin ex eget pharetra.
                    </p>

                    <p>
                      Vivamus non condimentum orci. Pellentesque venenatis nibh
                      sit amet est vehicula lobortis. Cras eget aliquet eros.
                      Nunc lectus elit, suscipit at nunc sed, finibus imperdiet
                      ipsum. Maecenas dapibus neque sodales nulla finibus
                      volutpat. Integer pulvinar massa vitae ultrices posuere.
                      Proin ut tempor turpis. Mauris felis neque, egestas in
                      lobortis et, sodales non ante. Ut vestibulum libero quis
                      luctus tempus. Nullam eget dignissim massa. Vivamus id
                      condimentum orci. Nunc ac sem urna. Aliquam et hendrerit
                      nisl massa nunc.{" "}
                    </p>
                  </div>
                </div>

                <div class="blog-title-area">
                  <div class="tag-cloud-single">
                    <span>Tags</span>
                    <small>
                      <a href="#" title="">
                        lifestyle
                      </a>
                    </small>
                    <small>
                      <a href="#" title="">
                        colorful
                      </a>
                    </small>
                    <small>
                      <a href="#" title="">
                        trending
                      </a>
                    </small>
                    <small>
                      <a href="#" title="">
                        another tag
                      </a>
                    </small>
                  </div>

                  <div class="post-sharing">
                    <ul class="list-inline">
                      <li>
                        <a href="#" class="fb-button btn btn-primary">
                          <i class="fa fa-facebook"></i>{" "}
                          <span class="down-mobile">Share on Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="tw-button btn btn-primary">
                          <i class="fa fa-twitter"></i>{" "}
                          <span class="down-mobile">Tweet on Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="gp-button btn btn-primary">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr class="invis1" />

                <div class="custombox prevnextpost clearfix">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="blog-list-widget">
                        <div class="list-group">
                          <a
                            href="tech-single.html"
                            class="list-group-item list-group-item-action flex-column align-items-start"
                          >
                            <div class="w-100 justify-content-between text-right">
                              <img
                                src="assets/upload/tech_menu_19.jpg"
                                alt=""
                                class="img-fluid float-right"
                              />
                              <h5 class="mb-1">
                                5 Beautiful buildings you need to before dying
                              </h5>
                              <small>Prev Post</small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="blog-list-widget">
                        <div class="list-group">
                          <a
                            href="tech-single.html"
                            class="list-group-item list-group-item-action flex-column align-items-start"
                          >
                            <div class="w-100 justify-content-between">
                              <img
                                src="assets/upload/tech_menu_20.jpg"
                                alt=""
                                class="img-fluid float-left"
                              />
                              <h5 class="mb-1">
                                Let's make an introduction to the glorious world
                                of history
                              </h5>
                              <small>Next Post</small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="invis1" />

                <div class="custombox authorbox clearfix">
                  <h4 class="small-title">About author</h4>
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                      <img
                        src="assets/upload/author.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                    </div>

                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                      <h4>
                        <a href="#">Jessica</a>
                      </h4>
                      <p>
                        Quisque sed tristique felis. Lorem{" "}
                        <a href="#">visit my website</a> amet, consectetur
                        adipiscing elit. Phasellus quis mi auctor, tincidunt
                        nisl eget, finibus odio. Duis tempus elit quis risus
                        congue feugiat. Thanks for stop Tech Blog!
                      </p>

                      <div class="topsocial">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Facebook"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Youtube"
                        >
                          <i class="fa fa-youtube"></i>
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Pinterest"
                        >
                          <i class="fa fa-pinterest"></i>
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Twitter"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Instagram"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Website"
                        >
                          <i class="fa fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="invis1" />

                <div class="custombox clearfix">
                  <h4 class="small-title">You may also like</h4>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="blog-box">
                        <div class="post-media">
                          <a href="tech-single.html" title="">
                            <img
                              src="assets/upload/tech_menu_04.jpg"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="hovereffect">
                              <span class=""></span>
                            </div>
                          </a>
                        </div>
                        <div class="blog-meta">
                          <h4>
                            <a href="tech-single.html" title="">
                              We are guests of ABC Design Studio
                            </a>
                          </h4>
                          <small>
                            <a href="blog-category-01.html" title="">
                              Trends
                            </a>
                          </small>
                          <small>
                            <a href="blog-category-01.html" title="">
                              21 July, 2017
                            </a>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="blog-box">
                        <div class="post-media">
                          <a href="tech-single.html" title="">
                            <img
                              src="assets/upload/tech_menu_06.jpg"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="hovereffect">
                              <span class=""></span>
                            </div>
                          </a>
                        </div>
                        <div class="blog-meta">
                          <h4>
                            <a href="tech-single.html" title="">
                              Nostalgia at work with family
                            </a>
                          </h4>
                          <small>
                            <a href="blog-category-01.html" title="">
                              News
                            </a>
                          </small>
                          <small>
                            <a href="blog-category-01.html" title="">
                              20 July, 2017
                            </a>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="invis1" />

                <div class="custombox clearfix">
                  <h4 class="small-title">Leave a Reply</h4>
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="form-wrapper">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your name"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email address"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Website"
                        />
                        <textarea
                          class="form-control"
                          placeholder="Your comment"
                        ></textarea>
                        <button type="submit" class="btn btn-primary">
                          Submit Comment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div class="sidebar">
                <TrendVideos />

                <PopularPost />

                <RecentReviews />

                <FollowUs />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div class="dmtop">Scroll to Top</div>
    </div>
  );
};

export default BlogDetail;
