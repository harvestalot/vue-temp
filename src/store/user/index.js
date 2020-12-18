const status= {
  token: localStorage.getItem('token') || '',
  username: localStorage.getItem('username') || '',
  roles: localStorage.getItem('username') || [],
}

const mutations = {
  set_token(state, token){
    state.token = token;
    localStorage.setItem('token', token);
  },
  set_username(state, payload){
    const { username, roles } = payload;
    state.username = username;
    state.roles = roles;
    localStorage.setItem('username', username);
    localStorage.setItem('roles', roles);
  }
}

const actions = {
  login(context){
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(context)
        context.commit('set_token', "ddsd09090dd");
        context.dispatch('getUserInfo', 'ddsd09090dd').then(()=>{
          resolve('延时三秒成功登录');
        });
      }, 1000)
    })
  },
  getUserInfo({ state, commit }, payload){
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(state)
        console.log(payload)
        commit('set_username', { id: 1, username:'成功者', roles: ['admin'] });
        resolve()
      }, 2000)
    })
  }
}

export default {
  namespaced: 'user',
  status,
  mutations,
  actions,
}