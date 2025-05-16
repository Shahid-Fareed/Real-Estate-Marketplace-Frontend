import requests from "../httpService";

const Cities = {
  getAgencyDetail(body: any, id: number) {
    return requests.get(`/users/agencyDetail/${id}`, body);
  },
  getAgencyRecentProperty(body: any, id: number) {
    return requests.get(`/users/agencyTenRecentProperties/${id}`, body);
  },
  getAgencyPropertyCount(body: any, id: number) {
    return requests.get(`/users/agencyPropertiesCount/${id}`, body);
  },
  sendAgencyInquiryForm(body: any) {
    return requests.post(`/inquiry/create`, body);
  },
};

export default Cities;
