import { defineStore } from "pinia";
export const useGlobalStore = defineStore("useGlobalStore", {
  state: () => {
    return {
      minimizedState: false,
    };
  },
  getters: {},
  actions: {
    setMinimized(value) {
      this.minimizedState = value;
    },
  },
});
