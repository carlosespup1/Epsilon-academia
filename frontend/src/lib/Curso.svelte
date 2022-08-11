<script lang="ts">
    import { estadoLogin } from '../stores/UsuarioAuth.js';

    export let Titulo: string;
    export let Descripcion: string;
    export let Precio: number;
    export let imagen: string;

    let btnTitulo: string = estadoLogin ? 'Incribirse' : 'Conocer más';

    const redireccionarUsuario = () => {
        window.location.href = '/suscripcion-planes';
    }
</script>

    <div class="max-w-full sm:max-w-xs mx-4 my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{Titulo}</h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{Descripcion}</p>
        </div>

        <img class="object-cover w-full h-48 mt-2" src={imagen} alt={Titulo}/>

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-lg font-bold text-white">${Precio}</h1>
            <button on:click={()=>redireccionarUsuario()} class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">{btnTitulo}</button>
        </div>
    </div>

