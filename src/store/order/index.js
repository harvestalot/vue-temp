
const state = {
  total: 0
}

const mutations = {
  change_name(state, step){
    state.total += step;
  }
}

const actions = {
  change_name({ commit, rootState }, step){
    if(!rootState.total){
      commit('change_name', step);
    }
  }
}

export default {
  namespaced: 'order',
  state,
  mutations,
  actions
};