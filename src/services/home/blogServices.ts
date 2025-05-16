import requests from "../httpService";

const Blog = {
  getblogs(body: any) {
    return requests.get(`/news/`, body);
  },
  getblogsDetail(id: any, body: any) {
    return requests.get(`/news/detail/${id}`, body);
  },
};

export default Blog;
