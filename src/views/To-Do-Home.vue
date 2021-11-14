<template>
  <div>
    <AddTask v-show="showAddTask" @add-task="addTask" />

    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tasks from "../components/To-Do/Tasks";
import AddTask from "../components/To-Do/AddTask.vue";
import TodoService from "@/services/TodoService";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    async addTask(task) {
      const res = await TodoService.addTask({
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: task,
      });
      const response = await res;
      this.tasks = [...this.tasks, response.data];
    },

    async deleteTask(task_id) {
      if (confirm("Are you sure?")) {
        const res = await TodoService.deleteTask(task_id);
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== task_id))
          : alert("Error deleting task");
      }
    },
    async toggleReminder(task_id) {
      const taskToToggle = await TodoService.fetchTask(task_id);
      const updTask = {
        ...taskToToggle.data,
        reminder: !taskToToggle.data.reminder,
      };
      const res = await TodoService.updateTask(task_id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: updTask,
      });

      const response = await res;
      this.tasks = this.tasks.map((task) =>
        task.id === task_id ? { ...task, reminder: response.data.reminder } : task
      );
    },

    async fetchTasks() {
      const res = await TodoService.fetchTasks();
      return res;
    },

    async fetchTask(task_id) {
      const res = await TodoService.fetchTask(task_id);
      return res;
    },
  },
  async created() {
    const res = await this.fetchTasks();
    this.tasks = res.data;
  },
};
</script>
