import requests from "../httpService";

const dashboardApiServices = {
    dashApi(body: any) {
    return requests.get(`/properties/propertiesCount`, body);
  },
  dashAgencyApi(body: any,id:number) {
    return requests.get(`/properties/agencypropertiesCount/${id}`, body);
  },
  dashUserApi(body: any,id:number) {
    return requests.get(`/properties/userpropertiesCount/${id}`, body);
  },
};

export default dashboardApiServices;
