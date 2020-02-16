import axios from "axios";

class BaseAPI {
  constructor(path) {
    this.path = path;
  }

  METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
  };

  async makeRequest(path, method, data, headers = {}) {
    try {
      if (!["POST", "PUT", "PATCH"].includes(method)) {
        data = undefined;
      }

      const options = { url: path, method, data, headers };

      console.log(options);

      const response = await axios(options);

      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }

      throw error;
    }
  }

  async create(data) {
    const path = this.path;

    return this.makeRequest(path, this.METHODS.POST, data);
  }
}

export default BaseAPI;
