
const state = {
  total: 0
}

const mutations = {
  change_name(state, total){
    state.total = total;
  }
}

const actions = {
  change_name({ commit, rootState }, total){
    if(!rootState.total){
      commit('change_name', total);
    }
  }
}

export default {
  namespaced: 'order',
  state,
  mutations,
  actions
};