<template>
  <div class="grid grid-cols-3 mt-8">
    <div class="grid justify-center content-center">
      <img src="./assets/logo.png" class="h-8" />
    </div>
    <div class="grid justify-center content-center">
      <h1 class="text-4xl">Správa HW</h1>
    </div>
    <div class="grid justify-center content-center">
      <search class=""></search>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "@/components/Search.vue";

export default defineComponent({
  name: "App",
  components: {
    Search
  }
});
</script>

<style></style>
