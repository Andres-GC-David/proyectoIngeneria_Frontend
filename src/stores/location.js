import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

const getUserLocation = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

export const useLocationStore = defineStore('location', () => {
    const destination = reactive({
        name: '',
        address: '',
        geometry: {
            lat: null,
            lng: null
        }
    })

    const current = reactive({
        geometry: {
            lat: null,
            lng: null
        }
    })

    const updateCurrentLocation = async () => {
        try {
            const userLocation = await getUserLocation()
            current.geometry = {
                lat: userLocation.coords.latitude,
                lng: userLocation.coords.longitude
            }
        } catch (error) {
            console.error('Error al obtener la ubicación actual:', error)
        }
    }

    const reset = () => {
        destination.name = ''
        destination.address = ''
        destination.geometry.lat = null
        destination.geometry.lng = null

        current.geometry.lat = null
        current.geometry.lng = null
    }

    return { destination, current, updateCurrentLocation, reset }
})
