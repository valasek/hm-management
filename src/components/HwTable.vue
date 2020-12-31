<template>
  <div class="mt-8">
    <div v-if="loading">
      Loading...
      <p v-if="error">{{ error }}</p>
    </div>
    <table v-else class="table-fixed divide-y w-full border rounded shadow-2xl">
      <thead class="bg-gray-300">
        <tr class="text-left">
          <th class="w-1/4 text-lg pl-8 pt-2 pb-2">ID</th>
          <th class="w-1/4 text-lg pl-8 pt-2 pb-2">Zařízení</th>
          <th class="w-1/4 text-lg pl-8 pt-2 pb-2">Primariát</th>
          <th class="w-1/4 text-lg pl-8 pt-2 pb-2">Uživatel</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="item in items" :key="item.id" class="text-left">
          <td
            class="hover:underline cursor-pointer text-green-500 pl-8"
            @click="showDetail(item.id)"
          >
            # {{ item.id }}
          </td>
          <td class="pl-8">{{ item.type }}</td>
          <td class="pl-8">{{ item.department }}</td>
          <td class="pl-8">{{ item.user }}</td>
        </tr>
      </tbody>
    </table>
    <hw-detail
      v-if="showModal"
      :hwId="selectedHW"
      @closedetail="showModal = !showModal"
    ></hw-detail>
    <div
      v-if="showModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { key } from "../store";
import HwDetail from "./HwDetail.vue";

export default defineComponent({
  name: "HwTable",
  components: { HwDetail },
  props: {},
  setup() {
    const store = useStore(key);
    const showModal = ref(false);
    const selectedHW = ref("");
    const loading = computed(() => store.state.loading);
    const error = ref(null);

    const items = computed(() => store.state.selectedItems);

    store.dispatch("getAllItems");

    function showDetail(id: string) {
      selectedHW.value = id;
      showModal.value = true;
    }

    return {
      showModal,
      selectedHW,
      items,
      showDetail,
      loading,
      error
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
