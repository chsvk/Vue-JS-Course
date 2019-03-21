import VueRouter from "vue-router";
import People from '@/components/People'
import PersonProfile from '@/components/PersonProfile'

export default new VueRouter({
    mode: 'history',
    routes: [
       {
           path: '/',
           component: People
       },
       {
           path: '/person',
           name: 'Person',
           component: PersonProfile
       },
    ]
})