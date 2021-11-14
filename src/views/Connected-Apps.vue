<template>
  <div class="grid grid-flow-col xl:grid-cols-12 xl:w-full sm:grid-cols-12">
    <div class="col-span-12 col-start-3">
      <h1 class="text-lg">Connected Applications</h1>
    </div>
    <div
      class="grid grid-cols-3 col-span-8 col-start-3 pt-10 pb-10 pl-5 pr-5 border-gray-100 rounded-md shadow-md  border-md"
    >
      <div>
        <h1>Google Classroom</h1>
        <h4>Email</h4>
      </div>
      <div class="w-2/4">
        <BaseBtn type="submit" text="Change/Update" class="minerva-button" />
      </div>
      <div class="w-3/4">
        <BaseBtn
          type="submit"
          text="Delete My Account"
          class="minerva-delete"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-3 col-span-8 col-start-3 pt-10 pb-10 pl-5 pr-5 border-gray-100 rounded-md shadow-md  border-md"
    >
      <div>
        <h1>Moodle</h1>
        <h4>Email</h4>
      </div>
      <div class="w-2/4">
        <BaseBtn type="submit" text="Change/Update" class="minerva-button" />
      </div>
      <div class="w-3/4">
        <BaseBtn
          type="submit"
          text="Delete My Account"
          class="w-2/4 minerva-delete"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-3 col-span-8 col-start-3 pt-10 pb-10 pl-5 pr-5 border-gray-100 rounded-md shadow-md  border-md"
    >
      <div>
        <h1>Blackboard Collaborate</h1>
        <h4>Email</h4>
      </div>
      <div class="w-2/4">
        <BaseBtn type="submit" text="Change/Update" class="minerva-button" />
      </div>
      <div class="w-3/4">
        <BaseBtn
          type="submit"
          text="Delete My Account"
          class="minerva-delete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseBtn from "@/components/BaseBtn";

export default {
  name: "Connected-Apps",
  components: {
    BaseBtn,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {},
};
</script>
<style scoped>
.button {
  background-color: 8717a3;
}
</style>
<style scoped>
.minerva-button {
  background-color: #8717a3;
}

.minerva-delete {
  background-color: #fff;
  color: red;
  border-color: red;
}
</style>
