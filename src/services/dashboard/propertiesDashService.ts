import requests from "../httpService";

const propertiesDashService = {
  allProperties(body: any) {
    return requests.get(`/properties`, body);
  },
  allPendingVerifiedProperties(body: any) {
    return requests.get(`/properties/properties-to-verify`, body);
  },
  updatePropertyVerify(body: any,pid:number,type:string ) {
    return requests.get(`/properties/adminverifyProperty/${pid}/${type}`, body);
  },
  allUserProperties(body: any, id: number) {
    return requests.get(`/properties/user/${id}`, body);
  },
  allAgencyProperties(body: any, id: number) {
    return requests.get(`/properties/agency/${id}`, body);
  },
  boostProperty(body: any, Uid: number, Pid: number, type: string) {
    return requests.get(
      `/properties/boostProperty/${Uid}/${Pid}/${type}`,
      body
    );
  },
};

export default propertiesDashService;
