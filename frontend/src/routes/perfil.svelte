<script>
    import Navbarestudiante from "$lib/Navbarestudiante.svelte";
    import Footer from "$lib/Footer.svelte";

    import { valorPublico } from "../stores/UsuarioAuth.js"; // token del usuario
    import { informacion } from "../stores/UsuarioAuth.js";
    import axios from "axios"; // id del usuario en curso

    let usuario = {
        nombre: '',
        email: '',
        ocupacion: '',
        registro: '',
        estado: false,
        suscripcion: '',
        descSuscription: '',
        tiempoSuscription: '',
        fotografia: ''
    }

    const estudiante = async () => {
        try {
            let usuarioRes = await axios.get('http://localhost:1337/api/users/'+informacion+'?populate=%2A');
            // cargar la info del usuario
            usuario.nombre = usuarioRes.data.username;
            usuario.email = usuarioRes.data.email;
            usuario.ocupacion = usuarioRes.data.Ocupacion;
            usuario.fotografia = "http://localhost:1337"+usuarioRes.data.fotografia.formats.thumbnail.url;
            usuario.registro = usuarioRes.data.createdAt.split('T')[0];
            usuario.estado = usuarioRes.data.confirmed ? 'Activo' : 'Inactivo';
            usuario.suscripcion = usuarioRes.data.suscripcion.Titulo;
            usuario.descSuscription = usuarioRes.data.suscripcion.Descripcion;
            usuario.tiempoSuscription = usuarioRes.data.suscripcion.publishedAt.split('T')[0];
        } catch (error) {
            console.log(error);
        }
    };

    estudiante();
</script>

{#if valorPublico === "null" || valorPublico === 0 || valorPublico === "0"}
    <div class="flex">
        <h1>Error, algo ha salido mal.</h1>
        <h2>Por favor iniciar sesión nuevamente</h2>
    </div>
{:else}
    <Navbarestudiante />
    <div class="text-center">
        <img
                src={usuario.fotografia}
                class="rounded-full w-32 mb-4 mx-auto"
                alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">{usuario.nombre}</h5>
        <p class="text-gray-500">{usuario.ocupacion}</p>
    </div>
    <div class="flex flex-wrap justify-center">
        <div class="w-2/3 bg-purple-700 rounded mt-8 py-4">
            <p class="text-center text-white text-3xl font-light">Información</p>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">Email:</span> {usuario.email}</p>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">Estado:</span> {usuario.estado}</p>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">Registrado desde:</span> {usuario.registro}</p>
        </div>

        <div class="w-2/3 bg-purple-700 rounded mt-8 py-4">
            <p class="text-center text-white text-3xl font-light">Suscripción</p>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">Plan:</span> {usuario.suscripcion}</p>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">Descripción:</span> {usuario.descSuscription}</p>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">Estado:</span> {usuario.estado}</p>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">Activa desde:</span> {usuario.tiempoSuscription}</p>
            <hr>
            <p class="text-white text-xl ml-3 my-2"><span class="font-light text-2xl">¿Deseas adquirir un nuevo plan?</span></p>
            <button class="bg-purple-500 hover:bg-purple-400 ml-3 text-white font-bold py-2 px-4 rounded-full">
                <a href="adquirir-plan" class="text-white">
                    Planes disponibles
                </a> </button>
        </div>
    </div>
    <Footer />
{/if}