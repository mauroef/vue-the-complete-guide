export default {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
    state.tokenExpiration = payload.tokenExpiration;
  },
  // setLogoutTimer(state, payload) {
  //   state.tokenExpiration = payload;
  // },
  // clearAuthData(state) {
  //   state.token = null;
  //   state.userId = null;
  // },
  // initAuth(state, payload) {
  //   return {
  //     userId: 'abc123',
  //   };
  // }
};
