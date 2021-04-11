export const state = () => ({
  error: null,
});
export const getters = {
  error: (state) => state.error,
};
export const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
};
export const actions = {};
