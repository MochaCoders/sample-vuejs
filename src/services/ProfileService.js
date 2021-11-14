import * as API from "@/services/API";

export default {
  getStudent(userId) {
    return API.apiClient.get(`/profile/${userId}`);
  },
  updateStudent(payload) {
    return API.apiClient.post("/profile", payload);
  },
};
