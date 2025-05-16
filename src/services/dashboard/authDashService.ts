import requests from "../httpService";

const Auth = {
  login(body: any) {
    return requests.post(`/users/login`, body);
  },
  signUp(body: any) {
    return requests.post(`/users/create`, body);
  },
  getUserDataByAuth(body: any, type: string) {
    return requests.get(`/authUser?token=${type}`, body);
  },
};

export default Auth;
