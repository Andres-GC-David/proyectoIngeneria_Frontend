<template>

<header class="text-white body-font border-b border-gray-200 bg-zinc-900">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-zinc-900">
     <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img class="w-12 h-12 p-2 rounded-full"  src="../../../assets/Uber_Logo_White_RGB.png">


      <span class="ml-3 text-xl">Uver</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
   <a class="mr-5 hover:text-white">Inicio</a> 
    </nav>

    <!-- Finaliza Navbar -->
  
  </div>
</header>


<!-- Main container -->
<div class="bg-white">
  <!-- Flex container for centering items -->
  <div class="flex h-screen flex-col items-center justify-center">
    <!-- Container for login form -->
    <div class="max-h-auto mx-auto max-w-xl">
      <!-- Login title and description -->
      <div class="mb-8 space-y-3">
      <router-view to="/directions"><p class="text-xl font-semibold text-center">Login</p> </router-view> 
        <p class="text-gray-500">Ingrese su teléfono y le enviaremos un código a su bandeja de entrada. <br />No hay necesidad de contraseñas, ¡como por arte de magia!</p>
      </div>
      <!-- Login form -->
      <form class="w-full">
        <div class="mb-10 space-y-3">
          <div class="space-y-1">
            <div class="space-y-2">
              <!-- Email label and input field -->
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="phone_number">Número de Telefono</label>
              <input class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="número de telefono" name="email" />
            </div>
          </div>
          <!-- Login button -->
          <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">Iniciar Sesion</button>
        </div>
      </form>
      <!-- Signup link -->
      <router-link to="/formDriver">  <div class="text-center"> Aun no tienes cuenta? <a class="text-blue-500" href="/signup">Registrase</a> </div> </router-link>
    </div>
  </div>
</div>
</template>