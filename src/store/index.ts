import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  items: Array<{ id: string; type: string; department: string; user: string }>;
  loading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const store = createStore<State>({
  state: {
    items: [],
    loading: true
  },
  mutations: {
    toggleLoading(state) {
      console.log("toggleLoading");
      state.loading = !state.loading;
    },
    setAllItems(state, items) {
      console.log("setAllItems");
      state.items = items;
    }
  },
  actions: {
    toggleLoading(context) {
      context.commit("toggleLoading");
    },
    async getAllItems(context) {
      console.log("getAllItems");
      await sleep(1500);
      const items = [
        {
          id: 1,
          type: "Adaptér",
          department: "Klinika",
          user: "Barbora Korandová"
        },
        {
          id: 2,
          type: "Notebook",
          department: "Produkt",
          user: "Iva Stiburková"
        },
        {
          id: 1234,
          type: "Monitor",
          department: "Obchod",
          user: "Martin Valasek"
        },
        {
          id: 1235,
          type: "Notebook",
          department: "DeOps",
          user: "Stanislav Valasek"
        },
        {
          id: 11,
          type: "Adaptér",
          department: "Klinika",
          user: "Barbora Korandová"
        },
        {
          id: 21,
          type: "Notebook",
          department: "Produkt",
          user: "Iva Stiburková"
        },
        {
          id: 12341,
          type: "Monitor",
          department: "Obchod",
          user: "Martin Valasek"
        },
        {
          id: 12351,
          type: "Notebook",
          department: "DeOps",
          user: "Stanislav Valasek"
        }
      ];
      context.commit("toggleLoading");
      context.commit("setAllItems", items);

      // try {
      //   // items.value = await getAllHW();
      //   await
      //   loading.value = false;
      // } catch (err) {
      //   error.value = err;
      // }
    }
  },
  modules: {}
});
