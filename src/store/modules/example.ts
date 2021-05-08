import { ExampleTypes } from "@/types";
export default {
  namespaced: true,
  state: {
    trends: [],
    malls: [1,2],
  },
  mutations: {
    SET_TRENDS(state: ExampleState, trends: string[]): void {
      state.trends = trends;
    },
  },
};

interface ExampleState {
  trends?: string[];
  mall?: ExampleTypes;
}
