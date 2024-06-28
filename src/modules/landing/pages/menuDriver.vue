<template>
    <div class="min-h-screen p-6 bg-zinc-950 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto text-center">
            <h1 class="text-4xl font-semibold mb-4 text-white">¡Bienvenido a Uver!</h1>
            <p class="text-xl text-gray-400 mb-8">Hola,{{ lastUserName }} Quieres empezar a manejar?</p>
  
                <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left d-flex justify-center">
                    <div class=" bg px-4">
                        <div>
                           
                        </div>
                    </div>
                    <div class="bg-gray-50 py-3 text-right sm:px-6 flex justify-center rounded-full">
                        
                        <router-link to="/searchingClient"> <button
                            
                            type="button"
                            class=" flex justify-center items-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">
                            Find A Ride
                        </button> </router-link> 
                    </div> 
                </div>
        </div>
    </div>
  </template>
  
  