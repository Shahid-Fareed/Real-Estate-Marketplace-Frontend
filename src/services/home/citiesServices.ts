import requests from "../httpService";

const Cities = {
  getCities(body: any, id:any, typ:any) {
    return requests.get(`/properties/propertiesCites?parent=${id}&typ=${typ}`, body);
  },
  getRentCities(body: any, id:any, typ:any) {
    return requests.get(`/properties/propertiesCites?parent=${id}&typ=${typ}`, body);
  },
};

export default Cities;
