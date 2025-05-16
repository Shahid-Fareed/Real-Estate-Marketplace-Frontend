import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const checkAuth: string =
  secureLocalStorage.getItem("adminInfo") === undefined ||
  secureLocalStorage.getItem("adminInfo") === null
    ? ""
    : `${
        JSON.parse(secureLocalStorage.getItem("adminInfo") as string)
          ?.authToken ?? ""
      }`;

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authToken: checkAuth,
  },
});

const responseBody = (response: any) => response.data;

const requests = {
  get: (url: any, body: any) => instance.get(url, body).then(responseBody),

  post: (url: any, body: any) => instance.post(url, body).then(responseBody),

  put: (url: any, body: any, headers: any) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url: any, body: any) => instance.patch(url, body).then(responseBody),

  delete: (url: any) => instance.delete(url).then(responseBody),
};

export default requests;
