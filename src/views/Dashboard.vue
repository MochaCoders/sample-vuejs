<template>
  <div>
    <div
      class="grid h-full grid-flow-row xl:grid-cols-12 xl:w-full sm:grid-cols-12"
    >
      <SideNav />
      <div class="col-span-9 p-3 rounded-lg shadow-md background-section">
        <div class="grid-cols-1">
          <div class="p-2 mb-5 rounded-lg title-dashboard h-1/4">
            <h1 class="text-lg text-white">Welcome {{ authUser.name }},</h1>
            <h1 class="text-white">
              You have completed 0% of your work since this week. Stay motivated
              and keep going
            </h1>
          </div>
        </div>
        <div class="grid grid-cols-3 grid-rows-1 gap-4">
          <div class=""><ProgressSection /></div>
          <div class=""><RecentsSection /></div>
          <div class="">
            <a-calendar
              class="calendar"
              :fullscreen="false"
              @panelChange="onPanelChange"
            />
          </div>
        </div>
      </div>
      <div
        class="col-span-9 col-start-3 p-5 mt-5 rounded-lg shadow-md h-72 background-section"
      >
        <h1 class="text-white">Subjects</h1>
      </div>
    </div>
    <div class="grid grid-cols-12 p-5">
      <div class="col-start-12">
        <a-button type="primary" @click="showModal">Chat here</a-button>
      </div>
      <a-modal
        title="Chats"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <p>{{ ModalText }}</p>
      </a-modal>
    </div>
  </div>
</template>

<script>
import ProgressSection from "@/components/ProgressSection";
import RecentsSection from "@/components/RecentsSection";
import SideNav from "../components/SideNav";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    ProgressSection,
    RecentsSection,
    SideNav,
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
  top: 600px;
}

.background-section {
  background-color: #8717a3;
}
</style>
