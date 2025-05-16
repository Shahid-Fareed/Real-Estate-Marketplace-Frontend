import requests from "../httpService";

const TopSocities = {
  getSocities(body: any) {
    return requests.get(`/topsocities/topTenSocity`, body);
  },
};

export default TopSocities;
