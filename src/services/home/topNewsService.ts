import requests from "../httpService";

const TopNews = {
  getNews(body: any) {
    return requests.get(`/news/latestTenNew`, body);
  },
};

export default TopNews;
