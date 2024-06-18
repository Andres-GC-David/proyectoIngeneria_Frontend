<template>
  <div class="min-h-screen p-6 bg-zinc-950 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-white">Formulario Ingreso Uber</h2>
        <p class="text-gray-500 mb-6">Bienvenido a Uver.</p>

        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Detalles del Conductor</p>
              <p>Por favor llene todos los campos</p>
            </div>

            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="first_name">Nombre</label>
                  <input type="text" name="first_name" id="first_name" v-model="nombre" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Ejemplo: Jeam" />
                </div>

                <div class="md:col-span-5">
                  <label for="last_name">Apellidos</label>
                  <input type="text" name="last_name" id="last_name" v-model="apellido" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Ejemplo: Carlo Cardenas Vargas" />
                </div>

                <div class="md:col-span-5">
                  <label for="user_type">Tipo de Usuario</label>
                  <select name="user_type" id="user_type" v-model="idTipoUsuario" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                    <option value="1">Cliente</option>
                    <option value="2">Chofer</option>
                  </select>
                </div>

                <div v-if="idTipoUsuario == 1" class="md:col-span-5">
                  <label for="fecha_nacimiento">Fecha de Nacimiento</label>
                  <input type="date" name="fecha_nacimiento" id="fecha_nacimiento" v-model="fechaDeNacimiento" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                </div>

                <div v-if="idTipoUsuario == 2" class="md:col-span-5">



                  <label for="vehiculo">ID Vehículo</label>
                  <input type="text" name="vehiculo" id="vehiculo" v-model="idVehiculo" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Ejemplo: 1234" />
                </div>

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button @click="submitForm" class="bg-zinc-950 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded">Login</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      idTipoUsuario: 1,
      fechaDeNacimiento: '',
      idVehiculo: ''
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async submitForm() {
      try {
        // Crear el usuario primero
        const userResponse = await axios.post('http://localhost:8000/api/usuario', {
          nombre: this.nombre,
          apellido: this.apellido,
          idTipoUsuario: this.idTipoUsuario
        });

        console.log('Usuario creado:', userResponse.data);

        if (userResponse.data && userResponse.data.idUsuario) {
          const idUsuario = userResponse.data.idUsuario;

          if (this.idTipoUsuario == 1) {
            // Crear el cliente usando el idUsuario
            const clientResponse = await axios.post('http://localhost:8000/api/cliente', {
              fechaDeNacimiento: this.fechaDeNacimiento,
              idUsuario: idUsuario
            });
            console.log('Cliente creado:', clientResponse.data);
          } else if (this.idTipoUsuario == 2) {
            // Crear el chofer usando el idUsuario
            const driverResponse = await axios.post('http://localhost:8000/api/chofer', {
              idUsuario: idUsuario,
              idVehiculo: this.idVehiculo
            });
            console.log('Chofer creado:', driverResponse.data);
          }

          // Guardar el nombre del usuario en localStorage
          localStorage.setItem('lastUserName', `${this.nombre} ${this.apellido}`);
          // Redirigir al menú
          this.router.push('/menu');
        } else {
          console.error('Error en la creación del usuario:', userResponse.data);
          alert('Hubo un error al crear el usuario');
        }

      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        alert('Hubo un error al crear el usuario');
      }
    }
  }
}
</script>

<style>
/* Tus estilos aquí */
</style>
