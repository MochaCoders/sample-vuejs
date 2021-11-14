import * as API from "@/services/API";

export default {
  getStatus() {
    return API.apiClient.get("/dashboard");
  },
};
