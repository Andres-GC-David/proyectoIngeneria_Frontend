import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "@/modules/landing/pages/LandingPage.vue";
import Login from "@/modules/landing/pages/Login.vue";
import DirectionsView from "@/modules/landing/pages/DirectionsView.vue";
import FormDriver from "@/modules/landing/pages/FormDriver.vue";




export const router = createRouter({
    history: createWebHashHistory( import.meta.env.BASE_URL ),
    routes: [
        {
        path:'/',
        name:'landing',
        component:LandingPage
    },
    {
        path:'/login',
        name:'login',
        component: Login,
    
    },
    {
        path:'/formDriver',
        name:'formDriver',
        component: FormDriver,
    
    },
    {
        path:'/directions',
        name:'directions',
        component: DirectionsView,
    
    },

    ]
})

export default router;