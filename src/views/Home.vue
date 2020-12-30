<template>
  <div class="container mx-auto">
    <hw-table></hw-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HwTable from "@/components/HwTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    HwTable
  }
});
</script>
