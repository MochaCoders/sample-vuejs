<template>
  <div
    class="grid h-full grid-flow-row xl:grid-cols-12 xl:w-full sm:grid-cols-12"
  >
    <SideNav />
    <div class="col-span-9 col-start-4 p-10">
      <h1 class="text-lg">Biochemistry</h1>
      <h3>| Tutor:</h3>

    </div>
    <Editor />
    <div class="col-span-1 col-start-9">
      <a-button @click="clickNotes">Notes</a-button>
    </div>
    <div class="col-span-1 col-start-10">
      <a-button>Calculator</a-button>
    </div>
    <div class="col-span-1 col-start-11">
      <a-button>Dictionary</a-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideNav from "../components/SideNav";
import Editor from "../components/modals/Editor.vue";

export default {
  name: "Subject",
  components: {
    SideNav,
    Editor
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  data() {
    return {
      subject: {
        name: "",
        required: true,
      },
      showNotes: false,
      current: ["mail"],
      openKeys: ["sub1"],
    };
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    },
  },
  methods: {
  clickNotes() {
    this.showNotes = true;
  },
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
  },
};
</script>

<style scoped>
.calendar {
  color: white !important;
}
.dash-main {
  margin-top: 100px;
  background-color: #8717a3;
}

.jc-image {
  width: 50px;
  height: 60px;
}

.sidenav-text {
  color: #8717a3;
}

.main-text {
  position: absolute;
  left: 70px;
  top: 130px;
}

.lesser-text {
  position: absolute;
  left: 70px;
  top: 160px;
}

.title-dashboard {
  background-color: #a12ebe;
}
.settings {
  position: absolute;
  top: 800px;
}

.background-section {
  background-color: #8717a3;
}
</style>
