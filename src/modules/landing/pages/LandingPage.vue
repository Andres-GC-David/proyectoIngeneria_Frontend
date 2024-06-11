
<template>


<header class="text-white body-font border-b border-gray-200 bg-zinc-900">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-zinc-900">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
      <img class="w-12 h-12 p-2 rounded-full"  src="../../../assets/Uber_Logo_White_RGB.png">


      <span class="ml-3 text-xl">Uver</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white">Inicio</a>
      
    </nav>

    <!-- Finaliza Navbar -->
     <router-link to="/directions"> <button class="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">Iniciar Sesion 
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> </router-link> 
  </div>
</header>

<!-- Finaliza Header -->
<section class="text-white body-font bg-zinc-900 ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Conduce cuando quieras 
        <br class="hidden lg:inline-block">y genera las ganancias que necesites
      </h1>
      <p class="mb-8 leading-relaxed">Genera ganancias en tu propio tiempo con entregas, viajes o ambos. Puedes usar tu propio auto u optar por un vehículo de renta a través de la app de Uber.</p>
      <div class="flex justify-center">
        <router-link to="/login"> <button class="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Iniciar Sesion</button> </router-link>
        <router-link to="/formDriver"> <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Registrarse</button> </router-link>


      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="../../../assets/Uber_Logo_White_RGB.png">
    </div>
  </div>
</section>


<!-- Aqui empieza el footer -->
<footer class="text-gray-700 body-font bg-gray-300">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Login</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">FAQS</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">About Us</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

  <div class="border-t border-gray-200">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div class="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
        <input class="sm:w-64 w-40 bg-zinc-200 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-gray-500 text-base py-2 px-4" placeholder="Report a problem" type="text">
        <button class="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded">Send</button>
        <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden">waistcoat green juice
        </p>
      </div>
     
    </div>
  </div>
 
</footer>


</template>