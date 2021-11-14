<template>
  <div class="grid grid-cols-1 m-auto sm:grid-cols-2">
    <div class="sm:w-full sm:h-screen sm:bg-cover image"></div>
    <div class="w-11/12 m-auto mt-10 sm:m-auto sm:w-3/4 lg:w-1/2">
      <img class="m-auto jc-image" src="../images/jc.png" alt="" />
      <h3 class="minerva-trademark">
        Registered to Jamaica College. Powered by Minerva Co. Limited.
      </h3>
      <h2 class="mt-10 text-xl font-bold minerva-color lg:mb-4">Sign In</h2>
      <LoginForm />
      <div class="grid grid-flow-col grid-cols-3 gap-4 m-auto mt-5">
        <div>
          <a @click.prevent="authProvider('google')">
            <img
              class="m-auto signup-icon"
              src="../images/g-classroom.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <img class="m-auto signup-icon" src="../images/moodle.png" alt="" />
        </div>
        <div>
          <img
            class="m-auto signup-icon"
            src="../images/blk-board.png"
            alt=""
          />
        </div>
      </div>
      <p class="mt-5 text-center">
        <router-link
          to="/register"
          class="text-black transition hover:text-purple-800"
          >Register for an account</router-link
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.signup-icon {
  width: 50px;
  height: 40px;
}

.image {
  background-image: url("../images/Minerva.png");
}

.jc-image {
  width: 70px;
  height: 80px;
}

.minerva-logo {
  position: absolute;
  top: 1000px;
  left: 130px;
  width: 50px;
  height: 70px;
}

.minerva-color {
  color: #8717a3;
}

.minerva-trademark {
  position: absolute;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
}

.minerva-text {
  position: absolute;
  top: 1000px;
  left: 200px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 87px;
  color: #ffffff;
}

.left-rectangle {
  float: left;
}

.right-rectangle {
  float: right;
}
</style>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
  methods: {
    authProvider(provider) {
      let self = this;
      this.$auth
        .authenticate(provider)
        .then((response) => {
          self.socialLogin(provider, response);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    socialLogin(provider, response) {
      this.$http
        .post("/social/" + provider, response)
        .then((response) => {
          return response.data.token;
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>
