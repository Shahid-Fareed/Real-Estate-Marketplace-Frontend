import requests from "../httpService";

const propertyListing = {
  getFilteredData(body: any) {
    return requests.post (`/properties/alloverfilters`, body);
  }
};

export default propertyListing;
