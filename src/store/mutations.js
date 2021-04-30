// https://vuex.vuejs.org/en/mutations.html

export default {
  auth_request (state) {
    state.authStatus = 'loading'
  },
  auth_success (state, { token, user }) {
    state.authStatus = 'success'
    state.token = token
    state.user = user
    state.authorized = true
  },
  auth_error (state) {
    state.authStatus = 'error'
  },
  logout (state) {
    state.authStatus = ''
    state.token = ''
    state.user = {}
    state.authorized = false
  },
  setTableList (state, tableList) {
    state.tableList = tableList
  },
  SET_BAR_IMAGE (state, payload) {
    state.barImage = payload
  },
  SET_DRAWER (state, payload) {
    state.drawer = payload
  },
}
