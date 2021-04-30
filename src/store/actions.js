// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'

// The login action passes vuex commit helper that we will use to trigger mutations.
export default {
  login ({ commit }, userData) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios
        .post('/auth', {
          username: userData.username,
          password: userData.password,
        })
        .then(response => {
          const token = response.data.access_token
          const user = response.data.user
          localStorage.setItem('token', token)
          localStorage.setItem('authorized', true)
          axios.defaults.headers.common.Authorization = 'Bearer ' + token
          commit('auth_success', { token, user })
          resolve(response)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('authorized')
      delete axios.defaults.headers.common.Authorization
      resolve()
    })
  },
  refreshtoken ({ commit }) {
    axios.get('/refresh')
      .then(response => {
        const token = response.data.access_token
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = 'Bearer ' + token
        commit('auth_success', { token })
      })
      .catch(_error => {
        commit('logout')
        localStorage.removeItem('token')
      })
  },
  getTableList ({ commit }, tableName) {
    this.$http.get(`/${tableName}`)
      .then(response => {
        const tableList = response.data.Keys
        commit('setTableList', { tableList })
      })
      .catch(_error => {})
  },
  updateTableItem ({ commit }, tableData) {
    return new Promise((resolve, reject) => {
      const httpmethod = tableData.method
      axios({ url: `/${tableData.endpoint}`, method: httpmethod, data: tableData.tableItem })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // autoRefreshToken ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setInterval(function () {
  //       // code goes here that will be run every 20 minutes.
  //       axios.get('/refresh')
  //         .then(response => {
  //           const token = response.data.access_token
  //           localStorage.setItem('token', token)
  //           axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  //           commit('auth_success', { token })
  //           resolve(response)
  //         })
  //         .catch(error => {
  //           console.log('refresh token error')
  //           console.log(error)
  //           reject(error)
  //         })
  //     }, 1200000)
  //   }
  //   )
  // },
}
