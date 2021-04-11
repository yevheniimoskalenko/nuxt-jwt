export const state = () => ({
  error: null,
  user: null,
});
export const getters = {
  error: (state) => state.error,
  user: (state) => state.user,
};
export const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
};
export const actions = {
  async user({ commit }) {
    const data = await this.$axios.$get('http://localhost:5000/api/verefy', {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    commit('setUser', data);
  },
};
