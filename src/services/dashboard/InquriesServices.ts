import requests from "../httpService";

const InquriesServices = {
  adminInquries(body: any) {
    return requests.get(`/inquiry`, body);
  },
  agencyOrUserInquries(body: any, id: number) {
    return requests.get(`/inquiry/userInquiries/${id}`, body);
  },
};

export default InquriesServices;
