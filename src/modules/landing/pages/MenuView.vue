


<template>
<header class="text-white body-font border-b border-gray-200 bg-zinc-900">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-zinc-900">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">


      <span class="ml-3 text-xl">Uver</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white">Inicio</a>
      
    </nav>

    <!-- Finaliza Navbar -->
     
  </div>
</header>

    <div class="pt-16">
        <h1 class="text-3xl font-semibold mb-4 text-center">Uver</h1>
        <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
            <div class="bg-green-200 px-4 py-5 sm:p-6">
                <div class="flex justify-between">
                   <router-link to="/location"> <button
                        @click="handleStartDriving"
                        class="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Start Driving
                    </button></router-link>
                    <router-link to="/location"> <button
                        @click="handleFindARide"
                        class="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Find A Ride
                    </button> </router-link>
                </div>
            </div>
        </div>
    </div>






</template>


<script setup>
import { useRouter } from 'vue-router'
import http from '@/helpers/http'

const router = useRouter()
const handleStartDriving = () => {
    http().get('/api/driver')
        .then((response) => {
            if (response.data.driver) {
                router.push({
                    name: 'standby'
                })
            } else {
                router.push({
                    name: 'driver'
                })
            }
        })
        .catch((error) => {
            console.error(error)
        })
}
const handleFindARide = () => {
    router.push({
        name: 'location'
    })
}
</script>