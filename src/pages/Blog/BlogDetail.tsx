import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogService from "../../services/home/blogServices";
import HomeHeader from "../../layout/HomeHeader";
import Footer from "../../layout/Footer";
import FooterCredit from "../../layout/FooterCredit";
import Loaders from "../../components/Loaders";
import moment from "moment";

type blogType = {
  title: any;
  id: any;
  image: any;
  short_description: string;
  description: string;
  createdAt: any;
  updatedAt:any;
};

const BlogDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blogDetail, setBlogDetail] = useState<blogType[]>([]);

  const getRecords = () => {
    setLoading(true);
    let body = null;
    BlogService.getblogsDetail(id, body)
      .then((res) => {
        const data = res.data;
        setBlogDetail(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getRecords();
  }, []);
  return (
    <>
      <HomeHeader />
      <section
        className="blog-detail post section p70-0"
        style={{ background: "white" }}
      >
        {loading ? (
          <>
            <Loaders />
          </>
        ) : (
          <>
            {" "}
            {blogDetail ? (
              <>
                {/* Blog Detail Head */}
                <div className="post-head">
                  <div className="container">
                    <ul className="post-list list-unstyled d-flex flex-wrap mb-3">
                      <li>
                        <ClockCircleOutlined />
                        02 min reading in
                      </li>
                    </ul>

                    <h1 className="mb-3">
                      {blogDetail && blogDetail[0]?.title}
                    </h1>
                    {/* <p className="mb-3 pb-1">Without even reducing the 40-hour work week. Time is money, right?</p> */}

                    <div className="post-author d-flex flex-wrap align-items-center pb-0 px-0">
                      {/* <div className="post-author-img">
                        <img
                          src={`${
                            process.env.REACT_APP_BASE_NEWS_IMAGE_URL +
                            blogDetail[0]?.image
                          }`}
                          alt=""
                          width="42"
                          height="42"
                        />
                      </div> */}
                      <div className="post-author-content align-items-center d-flex">
                        <ul className="post-list list-unstyled d-flex flex-wrap align-items-center mb-0">
                          <li>
                            <span className="me-2 inline-block">by</span>
                            <span  className="">
                              <strong>Admin</strong>
                            </span>
                          </li>
                          <li>
                            <CalendarOutlined />
                            Published at {moment(blogDetail[0]?.updatedAt).format('MMMM Do, YYYY')}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog Detail Body */}
                <div className="post-content">
                  {/* <div className="post-banner">
                    <img
                      src={`${
                        process.env.REACT_APP_BASE_NEWS_IMAGE_URL +
                        blogDetail[0]?.image
                      }`}
                      alt=""
                      className="mx-auto d-block w-100"
                    />
                  </div> */}

                  <div className="">
                    <div className="container">
                      {/* <h2>{blogDetail[0]?.title}</h2> */}

                      <p
                        style={{ textAlign: "justify" }}
                        dangerouslySetInnerHTML={{
                          __html: blogDetail[0]?.description,
                        }}
                      ></p>
                      {/* Blog Detail Action */}
                      {/* <div className="blog-detail-actions">
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <h5>Tags:</h5>
                      <ul className="tags list-unstyled d-flex flex-wrap m-0">
                        <li>
                          <Link to="#"># Culture</Link>
                        </li>
  
                        <li>
                          <Link to="#"># Lifestyle</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
  
                    </div>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        )}
      </section>
      <Footer />
      <FooterCredit />
    </>
  );
};

export default BlogDetail;
