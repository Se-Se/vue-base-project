import {ActionTree} from 'vuex';
export interface RootState {
  showLoading: boolean;
}

export const state = {
  showLoading: false
};

export const mutations = {
  SET_SHOW_LOADING(state: RootState, show: boolean): void {
    state.showLoading = show;
  }
};

export const getters = {
  getRootShowLoading(state: RootState): boolean {
    return state.showLoading;
  }
};

export const actions: ActionTree<RootState, any> = {};

