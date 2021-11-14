<template>
<div class="max-w-sm col-span-2">
        <a href="/"
          ><div><img class="m-auto jc-image" src="../images/jc.png" alt="" /></div
        ></a>
        <a-menu
          :default-selected-keys="['1']"
          :open-keys.sync="openKeys"
          mode="inline"
          @click="handleClick"
        >
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title"><a-icon type="home" />Browse</span>
            <a-menu-item key="1"> My Files </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="5">
            <router-link to="/to-do">To Do List</router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <router-link to="/courses"
              >Courses/Subjects
            </router-link></a-menu-item
          >
          <a-menu-item key="7"> Quizzes </a-menu-item>
          <a-menu-item key="8"> Activities </a-menu-item>
          <a-menu-item key="9"> Assessment </a-menu-item>
        </a-menu>
      </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SideNav",

   computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
      ModalText: "No Chats Started",
      visible: false,
      confirmLoading: false,
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
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      console.log("Clicked cancel button");
      this.visible = false;
    },
  },
}
</script>

<style scoped>
.jc-image {
  /* position: absolute;
  left: 80px; */
  width: 60px;
  height: 65px;
}
</style>
