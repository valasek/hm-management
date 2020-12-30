<template>
  <div class="mt-8">
    <div v-if="loading">
      Loading...
      <p v-if="error">{{ error }}</p>
    </div>
    <table v-else class="table-fixed divide-y w-full">
      <thead class="bg-gray-300">
        <tr>
          <th class="w-1/4">ID</th>
          <th class="w-1/4">Zařízení</th>
          <th class="w-1/4">Primariát</th>
          <th class="w-1/4">Uživatel</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="item in items" :key="item.id" class="text-center">
          <td
            class="hover:underline cursor-pointer text-green-500"
            @click="showDetail(item.id)"
          >
            # {{ item.id }}
          </td>
          <td>{{ item.type }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.user }}</td>
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
import { defineComponent, ref } from "vue";
import HwDetail from "./HwDetail.vue";

export default defineComponent({
  name: "HwTable",
  components: { HwDetail },
  props: {},
  setup() {
    const showModal = ref(false);
    const selectedHW = ref("");
    const loading = ref(false);
    const error = ref(null);
    const items = ref([
      {
        id: 1234,
        type: "Notebook",
        department: "DeOps",
        user: "Stanislav Valasek"
      },
      {
        id: 1235,
        type: "Notebook",
        department: "DeOps",
        user: "Stanislav Valasek"
      }
    ]);
    function showDetail(id: string) {
      selectedHW.value = id;
      showModal.value = true;
    }
    // call API
    async function getItems() {
      console.log("getItems");
      try {
        // items.value = await getAllHW();
        await new Promise(r => setTimeout(r, 2000));
        loading.value = false;
      } catch (err) {
        error.value = err;
      }
    }

    return {
      showModal,
      selectedHW,
      items,
      showDetail,
      loading,
      error,
      getItems
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
