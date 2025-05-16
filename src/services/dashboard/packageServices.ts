import requests from "../httpService";

const PackageServices = {
  createPackage(body: any) {
    return requests.post(`/packages/create`, body);
  },
  getAllPackage(body: any) {
    return requests.get(`/packages`, body);
  },
  getPackageByUsertype(body: any, type:string) {
    return requests.get(`/packages/${type}`, body);
  },
  getPackageDetails(body: any, id:number) {
    return requests.get(`/packages/detail/${id}`, body);
  },
    deletePackage(body: any, id:number) {
    return requests.get(`/packages/delete/${id}`, body);
  },
  updatePackageDetails(body: any, id:number) {
    return requests.post(`/packages/update/${id}`, body);
  },
};

export default PackageServices;
