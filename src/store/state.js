// https://vuex.vuejs.org/en/state.html

export default {
  authStatus: '',
  token: localStorage.getItem('token') || '',
  user: {},
  barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
  barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
  drawer: null,
  tableList: [],
}
