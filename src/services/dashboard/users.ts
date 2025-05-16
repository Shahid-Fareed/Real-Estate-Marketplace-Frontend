import requests from "../httpService";

const Users = {
  subUsers(body: any, id: number) {
    return requests.get(`/users/${id}`, body);
  },
  subUsersStatusChange(body: any, id: any) {
    return requests.get(`/users/updateStatus/${id}`, body);
  },
  getUserProfileDetail(body: any, id: any) {
    return requests.get(`/users/detail/${id}`, body);
  },
  updateUserProfileDetail(body: any, id: any) {
    return requests.post(`/users/update/${id}`, body);
  },
  createUser(body: any) {
    return requests.post(`/users/create`, body);
  },
  deleteUser(body: any, id: number) {
    return requests.get(`/users/delete/${id}`, body);
  },

};

export default Users;
