<template>
  <div class="min-h-screen p-6 bg-zinc-950 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto text-center">
          <h1 class="text-4xl font-semibold mb-4 text-white">¡Bienvenido a Uver!</h1>
          <p class="text-xl text-gray-400 mb-8">Hola, {{ lastUserName }}. ¿Dónde vamos hoy?</p>

          <form action="#" @submit.prevent="handleSubmit">
              <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
                  <div class="bg-white px-4 py-5 sm:p-6">
                      <div>
                          <GMapAutocomplete
                              placeholder="My destination"
                              @place_changed="handleLocationChanged"
                              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none">
                          </GMapAutocomplete>
                      </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                          @click.prevent="handleSelectLocation"
                          type="button"
                          class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                          Find A Ride
                      </button>
                  </div>
              </div>
          </form>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useLocationStore } from '@/stores/location';
import { useRouter } from 'vue-router';

const location = useLocationStore();
const router = useRouter();
const lastUserName = ref('');

onMounted(() => {
  lastUserName.value = localStorage.getItem('lastUserName') || 'Usuario';
});

const handleLocationChanged = (e) => {
  console.log('handleLocationChanged', e);
  location.$patch({
      destination: {
          name: e.name,
          address: e.formatted_address,
          geometry: {
              lat: e.geometry.location.lat(),
              lng: e.geometry.location.lng()
          }
      }
  });
};

const handleSelectLocation = () => {
  if (location.destination.name !== '') {
      router.push({
          name: 'map'
      });
  }
};
</script>
