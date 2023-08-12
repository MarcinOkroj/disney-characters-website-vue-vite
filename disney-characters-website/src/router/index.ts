import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Favourites from '../components/Favourites.vue';


const routes = [
    {path: '/', name: 'Home', component: Dashboard},
    {path: '/favourite', name: 'My favourite', component: Favourites},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router