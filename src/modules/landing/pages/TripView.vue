<template>
    <div class="min-h-screen p-6 bg-zinc-950 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto text-center">
            <h1 class="text-4xl font-semibold mb-4 text-white">Detalles del Viaje</h1>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="text-gray-600">
                    <p class="font-medium text-lg">Pasajero</p>
                    <p>{{ passengerName }}</p>
                </div>
                <div class="text-gray-600 mt-4">
                    <p class="font-medium text-lg">Destino</p>
                    <p>{{ destinationName }}</p>
                </div>
                <div class="text-gray-600 mt-4">
                    <p class="font-medium text-lg">Punto de Partida</p>
                    <p>{{ originCoords }}</p>
                </div>
                <div class="text-gray-600 mt-4">
                    <p class="font-medium text-lg">Punto de Llegada</p>
                    <p>{{ destinationCoords }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTripStore } from '@/stores/trip';

const tripStore = useTripStore();
const passengerName = ref('');
const destinationName = ref('');
const originCoords = ref('');
const destinationCoords = ref('');

onMounted(() => {
    console.log('Datos del viaje en la tienda en TripView:', tripStore);

    passengerName.value = tripStore.passenger_name;
    destinationName.value = tripStore.destination_name;
    originCoords.value = `${tripStore.origin.lat}, ${tripStore.origin.lng}`;
    destinationCoords.value = `${tripStore.destination.lat}, ${tripStore.destination.lng}`;
});
</script>


