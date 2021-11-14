<template>
  <div class="p-5 xl:px-0">
    <div class="grid grid-cols-1 gap-10 m-auto lg:grid-cols-1">
      <div class="w-3/4 p-5 m-auto sm:w-3/5 lg:w-2/5">
        <h1>Email Section</h1>
        <AuthUserForm />
      </div>
      <div class="w-3/4 p-5 m-auto sm:w-3/5 lg:w-2/5">
        <h1>Password Reset</h1>
        <UpdatePassword />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthUserForm from "@/components/AuthUserForm";
import UpdatePassword from "@/components/UpdatePassword";

export default {
  name: "Account",
  components: {
    AuthUserForm,
    UpdatePassword,
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
