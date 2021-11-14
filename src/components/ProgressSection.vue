<template>
  <div class="h-full p-2 text-white rounded-md background">
    <a-progress :percent="30" />
    <a-progress :percent="30" />
    <a-progress :percent="30" />
  </div>
</template>

<style scoped>
.background {
  background-color: #a12ebe;
}
</style>

<script>
export default {
  name: "ProgressSection",
};
</script>
