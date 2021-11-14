<template>
<div>
  <div
      class="grid h-full grid-flow-row xl:grid-cols-12 xl:w-full sm:grid-cols-12"
    >
      <SideNav />
<div class="col-span-9 p-5">
  <h1 class="text-lg">Recents</h1>
<h1>Today</h1>
  <a href="https://docs.google.com/document/d/1u5EOXzfToJS4Tj7y4QmsYD-jsZSI4LDNIWMi5Esc-5E/edit">Minerva(Phase 1)</a>

<h1>Yesterday</h1>
  <a href="https://docs.google.com/document/d/1u5EOXzfToJS4Tj7y4QmsYD-jsZSI4LDNIWMi5Esc-5E/edit">Minerva(Phase 1)</a>

<h1>Older</h1>
  <a href="https://docs.google.com/document/d/1u5EOXzfToJS4Tj7y4QmsYD-jsZSI4LDNIWMi5Esc-5E/edit">Minerva(Phase 1)</a>

  </div>
</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import SideNav from "../components/SideNav";


export default {
  name: "Recents",
  components: {
SideNav
  },
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  data() {
    return {
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
.calendar
{
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
 background-color: #A12EBE;
}
.settings {
  position: absolute;
  top: 800px;
}

.background-section {
  background-color: #8717a3;
}
</style>
