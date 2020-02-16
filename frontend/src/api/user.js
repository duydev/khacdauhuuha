import BaseAPI from "./base";

class UserAPI extends BaseAPI {
  constructor() {
    super("api/users");
  }
}

export default new UserAPI();
