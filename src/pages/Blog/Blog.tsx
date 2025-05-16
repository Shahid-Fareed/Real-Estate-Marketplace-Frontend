import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlogService from "../../services/home/blogServices";
import HomeHeader from "../../layout/HomeHeader";
import Footer from "../../layout/Footer";
import FooterCredit from "../../layout/FooterCredit";


type blogType = {
  id: number,
  title: number;
  short_description: string;
  createdAt:any;
  image:any;
};

const Blog = () => {
  const navigate = useNavigate();
  const [blogList, setBlogList] = useState<blogType[]>([]);

  const getRecords = () => {
    let body = null;
    BlogService.getblogs(body).then((res) => {
      const data = res.data;
      setBlogList(data);
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getRecords();
  }, [])


  const handelNavigate = (e: any, id: number) => {
    e.preventDefault();
    navigate(`/blog-detail/${id}`)
  }

  return (
    <>
      <HomeHeader />
      <section className="blogs p70-0">
        <div className="container">
          <div className="row">
            {
              blogList.map((blog) => <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
                <div className="card post border-0">
                  {/* Blog Image */}
                  <Link to="#" onClick={(e) => handelNavigate(e, blog.id)} className="post-img">
                    <img  src={`${process.env.REACT_APP_BASE_NEWS_IMAGE_URL +
                          blog.image
                          }`}
                      alt=""
                      width="368"
                      height="238"
                      className="mx-auto d-block w-100"
                    />
                  </Link>
                  {/* Blog Content */}
                  <div className="card-body p-4">
                    <ul className="post-list list-unstyled d-flex flex-wrap mb-3">
                      {/* <li>
                        <CalendarOutlined />
                        Jun 28, 2022
                      </li> */}
                      <li>
                        <ClockCircleOutlined />
                        02 min read
                      </li>
                    </ul>
                    <h4 className="card-title">
                      <Link to="#" onClick={(e) => handelNavigate(e, blog.id)} className="hover-animate">
                        {blog.title}
                      </Link>
                    </h4>
                    <p className="card-text"> {blog.short_description}</p>
                    {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                  </div>

                  {/* Author */}
                  <div className="card-footer post-author d-flex flex-wrap align-items-center bg-white border-0">
                    <div className="post-author-img">
                      <img
                        src="https://tushi-nextjs.vercel.app/_next/image?url=%2Fimages%2Fauthor%2Falexander-hipp.jpg&w=48&q=75"
                        alt=""
                        width="42"
                        height="42"
                      />
                    </div>
                    <div className="post-author-content">
                      <p className="m-0">Written by</p>
                      <Link to="#" className="hover-animate">Admin</Link>
                    </div>
                  </div>
                </div>
              </div>)
            }


          </div>
        </div>
      </section>
      <Footer />
      <FooterCredit />
    </>
  )
}

export default Blog
