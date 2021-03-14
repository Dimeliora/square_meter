import axios from "axios";

class SquareMeterService {
  static BASE_URL = "http://jsproject.webcademy.ru";

  constructor() {
    this.squareMeterService = axios.create({
      baseURL: SquareMeterService.BASE_URL,
    });
    this.squareMeterService.interceptors.response.use(
      (response) => response.data
    );
  }

  getItemsInfo() {
    return this.squareMeterService.get("/itemsinfo");
  }

  getItems(params = {}) {
    return this.squareMeterService.get("/items", { params });
  }

  getSingleItems(id) {
    return this.squareMeterService.get(`/items/${id}`);
  }

  getBids() {
    return this.squareMeterService.get("/bids");
  }

  sendBid(bidData) {
    return this.squareMeterService.post(`/bidnew/`, bidData);
  }
}

export default new SquareMeterService();
