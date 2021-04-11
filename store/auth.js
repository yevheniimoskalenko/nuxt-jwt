export const state = () => ({
  token: '',
});
export const getters = {
  isAuthenticated: (state) => state.token,
};
export const mutations = {
  setToken(state, payloda) {
    state.token = payloda;
  },
};
export const actions = {
  async register({ commit }, payload) {
    try {
      await this.$axios.$post('http://localhost:5000/api/reg', payload);
      await localStorage.setItem('token', data.payload);
      commit('setToken', data.token);
    } catch (e) {
      commit('setError', e.response.data, { root: true });
      throw e;
    }
  },
  async login({ commit }, payload) {
    try {
      const data = await this.$axios.$post(
        'http://localhost:5000/api/login',
        payload
      );
      await localStorage.setItem('token', data.payload);
      commit('setToken', data.payload);
    } catch (e) {
      commit('setError', e.response.data, { root: true });
      throw e;
    }
  },
};
