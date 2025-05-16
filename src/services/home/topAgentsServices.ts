import requests from "../httpService";

const TopAgents = {
    getAgents(body: any) {
      return requests.get(`/users/topTenagencies`, body);
    },
  };
  
  export default TopAgents;