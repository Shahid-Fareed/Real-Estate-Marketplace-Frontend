import React, { useState, useEffect } from "react";
import TopNews from "../../../services/home/topNewsService";
import Slider from "react-slick";
import SectionHeading from "../../../components/Headings/SectionHeading";
import { useNavigate } from "react-router-dom";

type newsType = {
  id: number,
  short_description: string,
  image: any,
  title: string
}

const NewUpdate = () => {
  const navigate = useNavigate();
  const [allNews, setAllNews] = useState([]);

  const getTopNews = () => {
    let body = null;
    TopNews.getNews(body).then((response) => {
      setAllNews(response.data);
    })
  }

  const handelNavigate = (e: any, id: number) => {
    e.preventDefault();
    navigate(`/blog-detail/${id}`)
  }


  useEffect(() => {
    getTopNews();
  }, []);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          centerMode: false,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  };


  return (
    <section className="residence p70-0">
      <div className="container">
        <SectionHeading f="Latest News & Updates" />

        <div className="residence-carsouel">
          <div className="row residen" id="residen5">
            <Slider {...settings}>
              {
                allNews.map((news: newsType) => (
                  <div 
                    key={news.id} 
                    className="pointer"
                  >
                    <div className="card border-0 rounded-0 bg-transparent">
                      <div className="residen-thumbnail">
                        <img className="img-fluid slick-thumbnail" 
                          src={news.image} 
                          alt={news.title} 
                          width="380"
                          height="380"
                        />
                      </div>

                      <div className="residen-content pt-3" onClick={(e)=>handelNavigate(e,news.id)}>
                        <h5>{news.title}</h5>
                        <p className="mb-0">{news.short_description}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewUpdate;
