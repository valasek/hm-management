<template>
  <div class="mt-8">
    <div v-if="loading">
      Loading...
      <p v-if="error">{{ error }}</p>
    </div>
    <table v-else class="table-fixed divide-y w-full">
      <thead>
        <tr>
          <th class="w-1/4">ID</th>
          <th class="w-1/4">Zařízení</th>
          <th class="w-1/4">Primariát</th>
          <th class="w-1/4">Uživatel</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" class="text-center">
          <td
            class="hover:underline cursor-pointer text-green-500"
            @click="showDetail(item.id)"
          >
            {{ item.id }}
          </td>
          <td>{{ item.type }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.user }}</td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="showModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative mx-auto w-1/3 max-w-5xl">
        <div class="bg-white w-full rounded shadow-2xl">
          <div class="p-6">
            <div
              class="bg-red rounded-lg border-solid border-2 border-gray-600"
            >
              <div>
                <div
                  class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded-lg text-gray-600 font-bold hover:bg-gray-300"
                >
                  Uživatel
                </div>
                <div class="mx-4 my-4">
                  <div class="my-2 flex items-center">
                    <div class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                        />
                      </svg>
                    </div>
                    <div class="inline-block pl-2">
                      Stanislav Valášek
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-building"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                        />
                        <path
                          d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
                        />
                      </svg>
                    </div>
                    <div class="inline-block pl-2">DevOps</div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold hover:bg-gray-300"
                >
                  Záruka
                </div>
                <div class="mx-4 my-4">
                  <div class="my-2 flex items-center">
                    <div class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-calendar-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                        />
                        <path
                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                        />
                      </svg>
                    </div>
                    <div class="inline-block pl-2">7.12.2020</div>
                  </div>
                  <div class="flex items-center">
                    <div class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-calendar-x"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z"
                        />
                        <path
                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                        />
                      </svg>
                    </div>
                    <div class="inline-block pl-2">7.12.2022</div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold hover:bg-gray-300"
                >
                  Popis HW
                </div>
                <div class="mx-4 my-4">
                  <div class="my-2 flex items-center">
                    <div class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-credit-card-2-front"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </div>
                    <div class="inline-block pl-2">Mobilní telefon</div>
                  </div>
                  <div class="my-2 flex items-center">
                    <div class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                        />
                      </svg>
                    </div>
                    <div class="inline-block ml-2">moto e7</div>
                  </div>
                  <div class="flex items-center">
                    <div class="inline-block">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                        viewBox="0 0 511.626 511.627"
                        style="enable-background: new 0 0 511.626 511.627"
                        xml:space="preserve"
                      >
                        <g>
                          <g>
                            <rect
                              x="134.761"
                              y="54.816"
                              width="17.699"
                              height="401.707"
                            />
                            <rect
                              x="98.786"
                              y="54.816"
                              width="8.848"
                              height="401.707"
                            />
                            <rect
                              x="197.568"
                              y="54.816"
                              width="8.852"
                              height="401.707"
                            />
                            <rect
                              x="179.581"
                              y="54.816"
                              width="8.852"
                              height="401.707"
                            />
                            <rect
                              x="26.84"
                              y="54.816"
                              width="9.136"
                              height="401.707"
                            />
                            <rect
                              x="53.959"
                              y="54.816"
                              width="8.851"
                              height="401.707"
                            />
                            <rect y="54.816" width="17.987" height="401.994" />
                            <rect
                              x="215.557"
                              y="54.816"
                              width="8.852"
                              height="401.707"
                            />
                            <rect
                              x="394.856"
                              y="54.816"
                              width="17.986"
                              height="401.707"
                            />
                            <rect
                              x="439.966"
                              y="54.816"
                              width="26.837"
                              height="401.707"
                            />
                            <rect
                              x="475.653"
                              y="54.816"
                              width="9.134"
                              height="401.707"
                            />
                            <rect
                              x="493.64"
                              y="54.816"
                              width="17.986"
                              height="401.994"
                            />
                            <rect
                              x="332.045"
                              y="54.816"
                              width="17.987"
                              height="401.707"
                            />
                            <rect
                              x="368.019"
                              y="54.816"
                              width="17.987"
                              height="401.707"
                            />
                            <rect
                              x="296.072"
                              y="54.816"
                              width="17.986"
                              height="401.707"
                            />
                            <rect
                              x="251.243"
                              y="54.816"
                              width="17.989"
                              height="401.707"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="inline-block ml-2">ydmt10912m1p</div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold hover:bg-gray-300"
                >
                  Další uživatelův HW
                </div>
                <div class="mx-4 my-4">
                  <div class="my-2 flex items-center">
                    <div class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-credit-card-2-front"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
                        />
                        <path
                          d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </div>
                    <div class="inline-block ml-2">Notebook #000254, Dell</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div>
              <button
                class="justify-self-center rounded bg-gray-500 px-8 mb-6 py-2 text-white"
                @click="showModal = false"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HwTable",
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
      console.log("before", selectedHW.value);
      showModal.value = true;
      selectedHW.value = id;
      console.log("after", selectedHW.value);
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

    return { showModal, items, showDetail, loading, error, getItems };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
