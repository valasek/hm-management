<template>
  <form method="GET">
    <div class="shadow relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          class="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        type="search"
        name="q"
        class="py-2 text-sm text-white bg-gray-900 hover:bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder="Hledat..."
        autocomplete="off"
        v-model="searchInput"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { key } from "../store";

export default defineComponent({
  name: "Search",
  props: {},
  setup() {
    const store = useStore(key);
    const searchInput = ref("");

    watchEffect(() => store.dispatch("filterItems", searchInput.value));

    return { searchInput };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
