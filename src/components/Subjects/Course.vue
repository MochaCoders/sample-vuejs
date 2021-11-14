<template>
  <div class="h-40 p-5 rounded-md shadow-md w-72">
    <label class="mb-5 text-4xl"
      ><a class="minerva_subject" href="/subject">{{
        subject.subject_name
      }}</a></label
    >
    <br />
    <a-popover :title="subject.tutor">
      <template slot="content">
        <p>{{ subject.tutor_email }}</p>
        <p>Status: {{ subject.tutor_status }}</p>
      </template>
      <label class="mb-5 text-base">{{ subject.tutor }}</label>
    </a-popover>
    <a href="">{{ subject.schedule }}</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Course",
  data() {
    return {
      subject: {
        id: "1",
        subject_name: "Physics",
        tutor: "Mr. Phillips",
        tutor_email: "phillips@jc.com",
        tutor_status: "In Office",
        link: "",
        schedule: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
<style scoped>
.minerva_subject {
  color: #8717a3;
}
</style>
