<script>
    import axios from "axios";
    import Navbarestudiante from "$lib/Navbarestudiante.svelte";
    import Footer from "$lib/Footer.svelte";
    import CursoPremiun from "$lib/CursoPremiun.svelte";

    let informacionCurso = {}

    const getCursos = async () => {
        try {
            const response = await axios.get("http://localhost:1337/api/cursos/");
            return response.data.data;
        } catch (error) {
            return error;
        }
    }
    let cursos = getCursos();
</script>
<Navbarestudiante />
<!-- Barra de busqueda para filtrar cursos -->
<h1 class="text-center text-purple-700 text-xl uppercase font-semibold font-mono pb-3">¡Hecha un vistazo a todo lo que puedes aprender en Epsilon!</h1>
<section class="w-full flex justify-center pb-10">
    <form class="w-full mx-2 sm:w-2/3">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Buscar</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Python, JavaScript..." required="">
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
        </div>
    </form>
</section>
<!-- Fin bloque-->
{#await cursos}
    <p class="text-purple-700 text-center font-bold">Cargando cursos...</p>
{:then respuesta}
    <div class="w-full flex flex-wrap justify-center items-center space-y-5">
        {#each respuesta as curso}
            <CursoPremiun
                    Titulo={curso.attributes.Titulo}
                   Descripcion={curso.attributes.Descripcion}
                   imagen={curso.attributes.imagen}/>
        {/each}
    </div>
{/await}
<Footer />