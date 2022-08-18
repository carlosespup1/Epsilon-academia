<script>
    import axios from "axios";
    import Swal from "sweetalert2";
    import Navbarestudiante from "$lib/Navbarestudiante.svelte";
    import Footer from "$lib/Footer.svelte";

    import { informacion, valorPublico } from "../stores/UsuarioAuth.js"; //informacion estudiante


     const getUserData = async () => {
        const res = await axios.get(`http://localhost:1337/api/users/me?populate=%2A`, {
            headers: {
                Authorization: "Bearer " + valorPublico
            }
        });
        console.log(JSON.stringify(res.data.suscripcion.Titulo));
        return res.data.suscripcion.Titulo;
    }

    const getCursos = async () => {
        try {
            const response = await axios.get("http://localhost:1337/api/cursos/");
            return response.data.data;
        } catch (error) {
            return error;
        }
    }

    // metodo para inscribirse en el curso
    const inscribirse = async (idUsuario, idCurso) => {
        let suscripcionUsuario = await getUserData();
        if(suscripcionUsuario != 'Premiun') {
            Swal.fire({
                title: 'Upps!',
                text: 'Parece que no tienes una suscripción activa',
                icon: 'info',
                footer: '<a href="/adquirir-plan">Ir a adquirir una suscripción</a>',
                confirmButtonText: 'Ok'
            })
        } else {
            try {
                let response = await axios.post(`http://localhost:1337/api/inscripciones/`, {
                    data: {
                        usuarios: idUsuario,
                        cursos: idCurso
                    }
                }).then(res => {
                    console.log(res);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Lo hemos agregado a tu lista de cursos 😎',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }).catch(e => {
                    console.log(e);
                })
            } catch (error) {
                console.log(error);
                return error;
            }
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
            <div class="max-w-full sm:max-w-xs mx-4 my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="px-4 py-2">
                    <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{curso.attributes.Titulo}</h1>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{curso.attributes.Descripcion}</p>
                </div>

                <img class="object-cover w-full h-48 mt-2" src={curso.attributes.imagen} alt={curso.attributes.Titulo}/>

                <div class="flex items-center justify-center w-full px-4 py-2 bg-gray-900">
                        <button on:click|once={()=> inscribirse(informacion, curso.id)} class="px-2 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Inscribirse</button>
                </div>
            </div>
        {/each}
    </div>
{/await}
<Footer />