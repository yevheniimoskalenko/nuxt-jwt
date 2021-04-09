export const state = () => ({
  token: ''
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
  login({ commit }, payload) {
    try {
      new Promise(async (resolve, reject) => {
        const data = await this.$axios.$post(
          'http://localhost:5000/api/login',
          payload
        );
        if (data.status === 'ok') {
          await localStorage.setItem('token', data.payload);
          resolve();
        }
        reject();
      });
    } catch (e) {
      console.log(e);
    }
  }
};
