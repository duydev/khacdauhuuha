import axios from "axios";

class BaseAPI {
  constructor(path) {
    this.path = path;
  }

  async makeRequest() {
    return null;
  }

  async create(data) {
    return null;
  }
}

export default BaseAPI;
