<script>
	import NavbarLogOut from '$lib/NavbarLogOut.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<NavbarLogOut />

<div class="flex md:justify-center">
	<section class="text-gray-600 body-font relative bg-purple-500 rounded-lg md:w-2/3 mt-10">
		<div class="container px-5 py-24 mx-auto">
			<div class="flex flex-col text-center w-full mb-12">
				<h1 class="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">Contactanos</h1>
				<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-md text-white text-semibold">
					Escribenos sobre cualquier duda o sugerencia que puedas tener. <br />
					Te responderemos lo mas pronto posible.
				</p>
			</div>
			<div class="lg:w-1/2 md:w-2/3 mx-auto">
				<div class="flex flex-wrap -m-2">
					<div class="p-2 w-1/2">
						<div class="relative">
							<label for="name" class="leading-7 text-md text-white">Nombre</label>
							<input
								type="text"
								id="name"
								name="name"
								class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
					<div class="p-2 w-1/2">
						<div class="relative">
							<label for="email" class="leading-7 text-md text-white">Correo</label>
							<input
								type="email"
								id="email"
								name="email"
								class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
					<div class="p-2 w-full">
						<div class="relative">
							<label for="message" class="leading-7 text-md text-white">Mensaje</label>
							<textarea
								id="message"
								name="message"
								class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
					<div class="p-2 w-full">
						<button
							class="flex mx-auto text-white bg-gray-500 bg-opacity-70 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
							>Enviar</button
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<Footer />
