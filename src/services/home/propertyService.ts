import requests from "../httpService";

const Properties = {
  getPropertyDetails(body: any, id: number) {
    return requests.get(`/properties/propertyDetail/${id}`, body);
  },
  getPropertyDetailsBySlug(body: any, slug: number) {
    return requests.get(`/properties/propertyDetailSlug/${slug}`, body);
  },
  searchCitites(body: any, words: any) {
    return requests.get(`/properties/search?keyword=${words}`, body);
  },
};

export default Properties;
