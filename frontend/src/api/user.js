import BaseAPI from "./base";

class UserAPI extends BaseAPI {
  constructor() {
    super("/users");
  }
}

export default new UserAPI();
