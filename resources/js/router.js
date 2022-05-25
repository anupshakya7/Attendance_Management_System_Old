import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import HomePage from './components/MainPages/Dashboard.vue'
import LoginPage from './components/Authentication/NewLogin.vue'
import RegisterPage from './components/Authentication/SignUp.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'HomePage',
        children: [
            {
                path: '/',
                component: () => import('./components/MainPages/DashboardMain.vue'),
            },
            {
                path: '/department',
                component: () => import('./components/MainPages/Department.vue'),
            },

            {
                path: '/employee',
                component: () => import('./components/MainPages/Employee.vue')
            },
            {
                path: '/transaction',
                component: () => import('./components/MainPages/Transaction.vue')
            },

        ]

    },
    {
        path: '/login',
        component: LoginPage,
        name: 'LoginPage'
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'RegisterPage'
    },
    {
        path: '*',
        component: LoginPage,
        name: 'Not Found'

    }
];

export default new Router({
    mode: 'history',
    routes
})
