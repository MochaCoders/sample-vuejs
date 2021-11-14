<template>
  <div id="app">
    <main class="container sm:h-screen sm:min-w-2xl lg:min-w-full">
      <Header/>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Header,//header should be added above main class
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700"); */

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
