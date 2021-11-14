<template>
  <form @submit.prevent="registerUser">
    <BaseInput
      type="text"
      name="name"
      v-model="name"
      placeholder="Name"
      class="mb-2"
    />
    <BaseInput
      type="email"
      name="email"
      v-model="email"
      placeholder="Email"
      class="mb-2"
    />
    <BaseInput
      type="password"
      name="password"
      placeholder="Password"
      v-model="password"
      class="mb-2"
    />
    <BaseInput
      type="password"
      name="passwordConfirm"
      placeholder="PasswordConfirm"
      v-model="passwordConfirm"
      class="mb-2"
    />
    <BaseBtn type="submit" text="Register" class="button" />
    <FlashMessage :error="error" />
  </form>
</template>

<script>
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import BaseInput from "@/components/BaseInput";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "RegisterForm",
  components: {
    BaseBtn,
    BaseInput,
    FlashMessage,
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      passwordConfirm: null,
      error: null,
    };
  },
  methods: {
    registerUser() {
      this.error = null;
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm,
      };
      AuthService.registerUser(payload)
        .then(() => this.$router.push({ name: "dashboard" }))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>

<style scoped>
.button {
  background-color: #8717a3;
}
</style>