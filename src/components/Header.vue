<template>
  <header v-if="authUser" class="p-5 text-purple-600 bg-white">
    <nav class="container flex items-center justify-between mx-auto">
      <div v-if="authUser" class="flex items-center space-x-2">
        <router-link to="/dashboard">
          <h1>Minerva</h1>
          <span class="sr-only">Dashboard</span>
        </router-link>
        <router-link to="/users" v-if="isAdmin">Users</router-link>
      </div>
      <router-link to="/" v-else>
        <HomeIcon class="w-6 h-6 text-purple-600" />
      </router-link>
      <div class="inline-flex items-center space-x-5" v-if="authUser">
        <a-dropdown>
          <a-avatar
            :size="64"
            style="background-color: #8717a3"
            icon="user"
            @click="(e) => e.preventDefault()"
          />
          <a-menu slot="overlay">
            <a-menu-item key="0" disabled>
              <h3>Account Options</h3>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <router-link to="/user">{{ authUser.name }}</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/profile">Profile Information</router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/reports">Reports</router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/connected-apps"
                >Connected Applications</router-link
              >
            </a-menu-item>
            <a-menu-item key="5">
              <Logout />
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <router-link
        v-else
        to="/login"
        class="inline-flex items-center space-x-2"
      >
        <span>Login</span>
        <LoginIcon class="w-6 h-6 text-purple-600" />
      </router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Logout from "@/components/Logout";
import HomeIcon from "@/components/icons/HomeIcon";
import LoginIcon from "@/components/icons/LoginIcon";

export default {
  name: "Header",
  components: {
    Logout,
    HomeIcon,
    LoginIcon,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  data() {
    return {
      isAdmin: false,
    }
  }
};
</script>
<style scoped>
div.ant-dropdown.ant-dropdown-placement-bottomRight {
  background-color: #8717a3 !important;
}
</style>
