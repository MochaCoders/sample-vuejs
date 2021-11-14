<template>
    <div class="grid h-full grid-cols-6 p-2 rounded-md background">
        <div class="col-span-5"><h6 class="text-white">Recents</h6></div>
        <div class="col-span-1"><router-link to="/recents" class="space-x-5 text-left text-white">More +</router-link></div> 
    </div>
</template>

<style scoped>
.background{
    background-color: #A12EBE;
}
</style>

<script>
//import { defineComponent } from '@vue/composition-api'
//import { mapGetters } from "vuex";
export default {
  name: "RecentsSection",

}
</script>
