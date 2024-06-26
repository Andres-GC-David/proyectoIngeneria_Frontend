<template>
    <div class="pt-16">
        <h1 class="text-3xl font-semibold mb-4 text-center">Here's your trip</h1>
        <div>
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <GMapMap v-if="location.destination.name !== ''" :zoom="11" :center="location.destination.geometry"
                            ref="gMap"
                            style="width: 100%; height: 256px;">
                        </GMapMap>
                    </div>
                    <div class="mt-2">
                        <p class="text-xl">Going to <strong>{{ location.destination.name }}</strong></p>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        @click="handleConfirmTrip"
                        class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                        Let's Go!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLocationStore } from '@/stores/location';
import { useTripStore } from '@/stores/trip';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const location = useLocationStore();
const trip = useTripStore();
const router = useRouter();
const gMap = ref(null);

// Obtener el idCliente desde localStorage o algún lugar seguro
const idCliente = localStorage.getItem('idCliente');
const userId = localStorage.getItem('user_id'); // Recuperar el user_id

const handleConfirmTrip = async () => {
    if (!idCliente) {
        alert('No se encontró el ID del cliente. Asegúrate de haber iniciado sesión.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:8000/api/viajes', {
            idRuta: 1,  // Debe obtener el ID de la ruta de alguna manera
            idEstadoConfirmacion: 1,  // Asumiendo un estado de confirmación por defecto
            puntoDeLlegada: `${location.destination.geometry.lat},${location.destination.geometry.lng}`,
            puntoDePartida: `${location.current.geometry.lat},${location.current.geometry.lng}`,
            idCliente: idCliente,  // Añadir el idCliente aquí
            user_id: userId // Añadir el user_id aquí
        });

        console.log('Viaje creado:', response.data);

        // Verifica que la respuesta contenga el viaje esperado
        if (response.data && response.data.idViaje) {
            const viaje = response.data;

            // Actualiza la tienda de viajes con los datos del viaje
            trip.$patch({
    id: viaje.idViaje,
    user_id: userId,
    origin: {
        lat: location.current.geometry.lat,
        lng: location.current.geometry.lng
    },
    destination: {
        lat: location.destination.geometry.lat,
        lng: location.destination.geometry.lng
    },
    destination_name: location.destination.name,
    passenger_name: localStorage.getItem('lastUserName')  // Recuperar el nombre del pasajero desde localStorage
});


            // Verificar los datos almacenados en la tienda
            console.log('Datos del viaje en la tienda:', trip);

            // Redirigir a la página del viaje o mostrar una confirmación
            router.push({ name: 'trip' });
        } else {
            console.error('Error en la respuesta del viaje:', response.data);
            alert('Error en la respuesta del viaje.');
        }
    } catch (error) {
        if (error.response && error.response.data) {
            console.error('Error al crear el viaje:', error.response.data);
            alert(`Error al crear el viaje: ${JSON.stringify(error.response.data.errors)}`);
        } else {
            console.error('Error al crear el viaje:', error.message);
        }
    }
}

onMounted(async () => {
    // Verifica si el usuario tiene una ubicación establecida
    if (location.destination.name === '') {
        router.push({ name: 'location' });
    }

    // Obtener la ubicación actual del usuario
    await location.updateCurrentLocation();

    // Dibujar una ruta en el mapa
    if (gMap.value) {
        gMap.value.$mapPromise.then((mapObject) => {
            let currentPoint = new google.maps.LatLng(location.current.geometry.lat, location.current.geometry.lng),
                destinationPoint = new google.maps.LatLng(location.destination.geometry.lat, location.destination.geometry.lng),
                directionsService = new google.maps.DirectionsService,
                directionsDisplay = new google.maps.DirectionsRenderer({ map: mapObject });

            directionsService.route({
                origin: currentPoint,
                destination: destinationPoint,
                avoidTolls: false,
                avoidHighways: false,
                travelMode: google.maps.TravelMode.DRIVING
            }, (res, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(res);
                } else {
                    console.error('Directions request returned no results:', status);
                }
            });
        });
    }
});
</script>
