import requests from "../httpService";

const OrderServices = {
  createOrder(body: any) {
    return requests.post(`/orders/create`, body);
  },
  allOrders(body: any) {
    return requests.get(`/orders`, body);
  },
  userOrders(body: any, id: number) {
    return requests.get(`/orders/user/${id}`, body);
  },
  updateOrderStatus(body: any, id: number) {
    return requests.post(`/orders/updateStatus/${id}`, body);
  },
  getUserQuota(body: any, id: number) {
    return requests.get(`/orders/userqouta/${id}`, body);
  },
};

export default OrderServices;
