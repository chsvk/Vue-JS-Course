import VueRouter from "vue-router";
import People from '@/components/People'
import Person from '@/components/Person'


export default new VueRouter({
    mode: 'history',
    routes: [
       {
           path: '/',
           component: People
       },
       {
           path: '/person',
           component: Person
       }
    ]
})