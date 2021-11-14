<template>
  <div class="grid grid-flow-row xl:grid-cols-12 xl:w-full sm:grid-cols-12">
    <SideNav />
    <div class="container col-span-9">
      <Header
        @toggle-add-task="toggleAddTask"
        title="To Do List"
        :showAddTask="showAddTask"
      />
      <!-- <router-view :showAddTask="showAddTask"></router-view> -->
      <Home :showAddTask="showAddTask" />
    </div>
  </div>
</template>

<script>
import Header from "../components/To-Do/To-Do-Header.vue";
import Home from "../views/To-Do-Home.vue";
import SideNav from "../components/SideNav.vue";
//import { mapGetters } from "vuex";

export default {
  name: "To-Do",
  components: {
    Header,
    Home,
    SideNav,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,h1 {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
