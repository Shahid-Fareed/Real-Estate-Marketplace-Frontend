import requests from "../httpService";

const propertyByCity = {
  getResidentalProperyFilter(body: any) {
    return requests.post (`/properties/TenResidentalProperties`, body);
  },
  getRentalProperyFilter(body: any) {
    return requests.post (`/properties/TenRentalProperties`, body);
  },
};

export default propertyByCity;
