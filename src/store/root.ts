import {ActionTree} from 'vuex';

export interface RootState {
  onGnb: boolean;
  isShowDimmedArea: boolean;
  dimmedAreaSwitch: boolean;
  previousPath: string;
}

export const state = {
  onGnb: false,
  isShowDimmedArea: false,
  dimmedAreaSwitch: false,
  previousPath: ''
};

export const getters = {
  dimmedAreaStatus(state: RootState): boolean {
    return state.isShowDimmedArea;
  },
  dimmedAreaSwitchStatus(state: RootState): boolean {
    return state.dimmedAreaSwitch;
  },
  getPreviousPath(state: RootState): string {
    return state.previousPath;
  }
};
// eslint-disable-next-line
export const actions: ActionTree<RootState, any> = {};

export const mutations = {
  SET_ONGNB(state: RootState, isOpen: boolean): void {
    state.onGnb = isOpen;
  },
  SET_DIMMEDAREA(state: RootState, isShow: boolean): void {
    state.isShowDimmedArea = isShow;
  },
  SET_DIMMEDAREASWITCH(state: RootState, isClose: boolean): void {
    state.dimmedAreaSwitch = isClose;
  },
  SET_PREVIOUS_PATH(state: RootState, prevPath: string): void {
    state.previousPath = prevPath;
  },
};
