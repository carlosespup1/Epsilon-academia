<script lang="ts">
	let bannerImagen1: string = 'https://images.unsplash.com/photo-1599041125553-a3b967646ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80';
	let bannerImagen2: string = 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80';
</script>

<section class="max-w-screen-2xl px-4 md:px-16 mx-auto">
	<div class="flex flex-wrap justify-between mb-8 md:mb-16">
		<div
			class="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0"
		>
			<h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
				Transformando<br />un mundo mejor<span class="text-purple-800">.</span>
			</h1>

			<p class="max-w-md text-gray-500 xl:text-lg leading-relaxed">
				Aprende las habilidades del futuro desde donde estés y transforma tu futuro con nosotros.
			</p>
			<a href="/conocer">
					<button
					type="button"
					class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br md:w-1/2 my-2 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
					>Conoce más</button
				>
				</a>
		</div>

		<div class="w-full lg:w-2/3 flex mb-12 md:mb-16">
			<div
				class="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0"
			>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src={bannerImagen1}
					loading="lazy"
					alt="Programacion"
					class="w-full h-full object-cover object-center"
				/>
			</div>

			<div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src={bannerImagen2}
					loading="lazy"
					alt="Realidad aumentada"
					class="w-full h-full object-cover object-center"
				/>
			</div>
		</div>
	</div>
</section>
