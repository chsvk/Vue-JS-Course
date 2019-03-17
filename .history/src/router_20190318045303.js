import VueRouter from "vue-router";
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'


export default new VueRouter({
    mode: 'history',
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
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            props: true
        }
    ]
})