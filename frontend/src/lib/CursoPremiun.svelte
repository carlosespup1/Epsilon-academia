<script lang="ts">
    import { estadoLogin } from '../stores/UsuarioAuth.js';

    export let Titulo: string;
    export let Descripcion: string;
    export let imagen: string;
    export let legenda: string;

</script>

<div class="max-w-full sm:max-w-xs mx-4 my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{Titulo}</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{Descripcion}</p>
    </div>

    <img class="object-cover w-full h-48 mt-2" src={imagen} alt={Titulo}/>

    <div class="flex items-center justify-center w-full px-4 py-2 bg-gray-900">
        <button class="px-2 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">{legenda}</button>
    </div>
</div>