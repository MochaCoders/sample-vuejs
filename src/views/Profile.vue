<template>
  <div class="p-5 xl:px-0">
    <div class="grid grid-cols-1 gap-10 m-auto lg:grid-cols-1">
      <div class="w-3/4 p-5 m-auto sm:w-3/5 lg:w-2/5">
        <h1>Student Information Section</h1>
        <h1>Welcome {{ authUser.name }}</h1>
        <StudentForm />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StudentForm from "@/components/StudentForm";

export default {
  name: "Profile",
  components: {
    StudentForm,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    updateUser() {
      this.$store.dispatch("auth/getAuthUser");
    },
  },
};
</script>
