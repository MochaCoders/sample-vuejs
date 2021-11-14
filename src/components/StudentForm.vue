<template>
  <div>
    <a-form :layout="'vertical'">
      <a-form-item>
        <a-date-picker
          class="w-full mb-2"
          v-model="student.dob"
          placeholder="Enter your Date of Birth"
          @change="onChange"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          class="mb-2"
          v-model="student.id_number"
          placeholder="Enter your School ID"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          class="mb-2"
          v-model="student.grade_level"
          placeholder="Enter your Grade Level"
        />
      </a-form-item>
    </a-form>
    <a-button key="submit" class="minerva-button" @click="updateStudent"
      >Update My Information</a-button
    >
    <FlashMessage :error="error" />
  </div>
</template>

<script>
import { getError } from "@/utils/helpers";
import { mapGetters } from "vuex";
import ProfileService from "@/services/ProfileService";

export default {
  name: "StudentForm",
  data() {
    return {
      student: {
        id: "",
        id_number: "",
        dob: "",
        is_student: true,
        is_registered: true,
        grade_level: "",
        error: null,
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    onChange(date, dateString) {
      this.student.dob = dateString;
    },
    updateStudent() {
      this.student.email = this.authUser.email;
      this.student.id = this.authUser.id;
      ProfileService.updateStudent(this.student)
        .then(() => this.$router.push("/dashboard"))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>

<style scoped>
.minerva-button {
  background-color: #8717a3;
  color: #fff;
}
</style>
