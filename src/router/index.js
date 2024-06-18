import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/modules/landing/pages/HomePage.vue";

export const router = createRouter({
    history: createWebHashHistory( import.meta.env.BASE_URL ),
    routes: [
        {
        path:'/',
        name:'home',
        component:HomePage
    },
    {
        path:'/login',
        name:'login',
        component: () => import('@/modules/landing/pages/Login.vue'),
    
    },
    {
        path:'/menu',
        name:'menu',
        component: () => import('@/modules/landing/pages/MenuView.vue'),
    
    },
{
    path:'/location',
    name:'location',
    component:()=> import ('@/modules/landing/pages/LocationView.vue')

},

{
    path: '/map',
    name: 'map',
    component: () => import ('@/modules/landing/pages/MapView.vue')
  
},

    {
        path:'/formDriver',
        name:'formDriver',
        component: () => import ('@/modules/landing/pages/FormClient.vue'),
    
    },
    {
        path:'/directions',
        name:'directions',
        component: () => import ('@/modules/landing/pages/DirectionsView.vue'),
    
    },
    {
        path:'/trip',
        name:'trip',
        component: () => import ('@/modules/landing/pages/TripView.vue'),
    
    },

    {
        path:'/searchingDriver',
        name:'searchingDriver',
        component: () => import ('@/modules/landing/pages/SearchingDriverView.vue'),
    
    },


    ]
})

export default router;