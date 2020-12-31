import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

type HWList = { id: string; type: string; department: string; user: string };

export interface State {
  items: Array<HWList>;
  selectedItems: Array<HWList>;
  loading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const store = createStore<State>({
  state: {
    items: [],
    selectedItems: [],
    loading: true
  },
  mutations: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    filterItems(state, items) {
      state.selectedItems = items;
    },
    setAllItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    toggleLoading(context) {
      context.commit("toggleLoading");
    },
    filterItems(context, searchInput) {
      if (searchInput === "") {
        context.commit("filterItems", context.state.items);
      } else {
        const items = context.state.items.filter(function(el) {
          return (
            el.user.toLowerCase().includes(searchInput.toLowerCase()) ||
            el.type.toLowerCase().includes(searchInput.toLowerCase()) ||
            el.department.toLowerCase().includes(searchInput.toLowerCase())
          );
        });

        // const items = [
        //   {
        //     id: 1,
        //     type: "Adaptér",
        //     department: "Klinika",
        //     user: "Barbora Korandová"
        //   }
        // ];
        context.commit("filterItems", items);
      }
    },
    async getAllItems(context) {
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
      context.commit("filterItems", items);

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
