import requests from "../httpService";

const Auth = {
  login(body: any) {
    return requests.post(`/users/login`, body);
  },
  signUp(body: any) {
    return requests.post(`/users/create`, body);
  },
  restPassword(body: any) {
    return requests.post(`/email/sendforgotpasswordemail`, body);
  },
  verrifyCode(body: any) {
    return requests.post(`/email/verifiCode`, body);
  },
};

export default Auth;
