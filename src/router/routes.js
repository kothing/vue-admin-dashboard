/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import store from '../store'

export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true,
    },
    redirect: {
      path: '/dashboard',
    },
  },
  // This allows you to have pages apart of the app but no rendered inside the dashboard
  {
    path: '/',
    meta: {
      name: '',
      requiresAuth: false,
    },
    component: () => import('@/views/login/Index.vue'),
    // redirect if already signed in
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/dashboard')
      } else {
        next()
      }
    },
    children: [
      {
        path: '',
        component: () => import('@/views/login/LoginForm.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/views/dashboard/Index'),
    children: [
      // Dashboard
      {
        path: '/dashboard',
        meta: {
          name: 'Dashboard',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/Dashboard'),
      },
      // Pages
      {
        path: '/pages/user',
        meta: {
          name: 'User Profile',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/pages/UserProfile'),
      },
      {
        path: '/components/notifications',
        meta: {
          name: 'Notifications',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/component/Notifications'),
      },
      {
        path: '/components/icons',
        meta: {
          name: 'Icons',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/component/Icons'),
      },
      {
        path: '/components/typography',
        meta: {
          name: 'Typography',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/component/Typography'),
      },
      // Tables
      {
        path: '/tables/regular-tables',
        meta: {
          name: 'Regular Tables',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/tables/RegularTables'),
      },
      // Maps
      {
        path: '/maps/google-maps',
        meta: {
          name: 'Google Maps',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/maps/GoogleMaps'),
      },
      // Upgrade
      {
        path: '/upgrade',
        meta: {
          name: 'Upgrade',
          requiresAuth: true,
        },
        component: () => import('@/views/dashboard/Upgrade'),
      },
    ],
  },
]
