export default {
  namespace: true,
  state: {
    adminInfo: null
  },
  mutations: {
    SET_ADMIN(state: adminState, admin: any) {
      state.adminInfo = admin;
    }
  }
};

interface adminState {
  adminInfo: any;
}
