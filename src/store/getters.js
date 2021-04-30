// https://vuex.vuejs.org/en/getters.html

// authorized lets you know if the token is true or not
export default {
  authorized: state => !!state.authorized,
  authstatus: state => state.authStatus,
}
