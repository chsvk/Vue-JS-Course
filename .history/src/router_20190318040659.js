import VueRouter from "vue-router";
import Login from '@/components/Login'
import Register from '@/components/Register'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            props: true
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            props: false
        }
    ]
})