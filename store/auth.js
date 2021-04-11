export const state = () => ({
  token: '',
});
export const getters = {};
export const mutations = {};
export const actions = {
  async register({ commit }, payload) {
    try {
      await this.$axios.$post('http://localhost:5000/api/reg', payload);
    } catch (e) {
      console.log(e);
    }
  },
  async login({ commit }, payload) {
    try {
      const data = await this.$axios.$post(
        'http://localhost:5000/api/login',
        payload
      );
      if (data.status === 'success') {
        await localStorage.setItem('token', data.payload);
      }
    } catch (e) {
      commit('setError', e.response.data, { root: true });
      throw e;
    }
  },
};
