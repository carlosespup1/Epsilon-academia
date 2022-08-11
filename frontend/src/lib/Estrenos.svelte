<script>
    import axios from 'axios';

    let cursosEstreno = [];

    const getCursos = async () => {
        try {
            const response = await axios.get("http://localhost:1337/api/cursos/");
            cursosEstreno = [...response.data.data];
            cursosEstreno.pop();
            cursosEstreno.pop();
            cursosEstreno.pop();
            console.log(cursosEstreno);
            return response.data.data;
        } catch (error) {
            return error;
        }
    }
    let estrenos = getCursos();
</script>

<div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">Nuevos lanzamientos</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {#each cursosEstreno as estreno}
                    <div>
                        <a href="#" class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                            <img src={estreno.attributes.imagen} loading="lazy" alt="Photo by Austin Wade" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div class="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                                <span class="text-gray-500">{estreno.attributes.Descripcion}</span>
                                <span class="text-gray-800 text-lg lg:text-xl font-bold">{estreno.attributes.Titulo}</span>
                            </div>
                        </a>
                    </div>
                {/each}
        </div>
    </div>
</div>