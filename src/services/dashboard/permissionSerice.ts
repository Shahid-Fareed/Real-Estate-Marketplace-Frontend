import requests from "../httpService";

const PermissionService = {
  allPermission(body: any, type:string) {
    return requests.get(`/permissions/${type}`, body);
  },
  getRole(body: any,type:string) {
    return requests.get(`/roles/${type}`, body);
  },
  getRoleAgency(body: any,type:string, agencyID:number) {
    return requests.get(`/roles/${type}?id=${agencyID}`, body);
  },
  editRole(body: any,id:number) {
    return requests.post(`/roles/update/${id}`, body);
  },
  createRole(body: any) {
    return requests.post(`/roles/create`, body);
  },
  getDetailRole(body: any , id:number) {
    return requests.get(`roles/detail/${id}`, body);
  },
  deleteRole(body: any, id:number) {
    return requests.get(`roles/delete/${id}`, body);
  },
};

export default PermissionService;
