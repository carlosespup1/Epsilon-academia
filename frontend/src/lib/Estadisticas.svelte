<script>
	let cursos = 0;
	let estudiantes = 0;
	let profesores = 0;
	let planes = 0;
</script>

<div class="bg-white py-6 sm:py-8 lg:py-12">
	<div class="max-w-screen-lg px-4 md:px-8 mx-auto">
		<!-- texto -->
		<div class="mb-8 md:mb-12">
			<h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
				¡Tranforma tu futuro con nosotros!
			</h2>

			<p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
				En busca de fomentar la educación de calidad, contamos con un gran cantidad de cursos
                y de planes de suscripción para que puedas seguir aprendiendo.
			</p>
		</div>
		<!-- Fin texto-->

		<div class="grid grid-cols-2 md:grid-cols-4 bg-purple-700 rounded-lg gap-6 md:gap-8 p-6 md:p-8">
			<div class="flex flex-col items-center">
				<div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">{cursos}</div>
				<div class="text-indigo-200 text-sm sm:text-base">Cursos</div>
			</div>

			<div class="flex flex-col items-center">
				<div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">{estudiantes}+</div>
				<div class="text-indigo-200 text-sm sm:text-base">Estudiantes</div>
			</div>

			<div class="flex flex-col items-center">
				<div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">{profesores}+</div>
				<div class="text-indigo-200 text-sm sm:text-base">profesores</div>
			</div>

			<div class="flex flex-col items-center">
				<div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">2 planes</div>
				<div class="text-indigo-200 text-sm sm:text-base">suscripcion</div>
			</div>
		</div>
	</div>
</div>
