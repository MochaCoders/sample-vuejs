<template>
  <div>
    <div :key="tsk.id" v-for="tsk in tasks">
      <Task
        @toggle-reminder="$emit('toggle-reminder', tsk.id)"
        @delete-task="$emit('delete-task', tsk.id)"
        :task="tsk"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>
