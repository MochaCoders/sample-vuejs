import * as API from "@/services/API";

export default {
  async fetchTasks() {
    const tasks = await API.apiClient.get(`/tasks`);
    return tasks;
  },
  async fetchTask(task_id) {
    const task = await API.apiClient.get(`/tasks/${task_id}`);
    return task;
  },
  async addTask(payload) {
    const task = await API.apiClient.post("/tasks", payload);
    return task;
  },
  async deleteTask(task_id) {
    const status = API.apiClient.delete(`/tasks/${task_id}`);
    return status;
  },
  async updateTask(task_id, payload) {
    const task = API.apiClient.put(`/tasks/${task_id}`, payload);
    return task;
  },
};
