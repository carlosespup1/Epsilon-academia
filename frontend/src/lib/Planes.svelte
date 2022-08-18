<script>
	import Swal from "sweetalert2";
</script>

<div class="bg-white pt-6 sm:py-8 lg:py-12">
	<div class="max-w-screen-lg px-4 md:px-8 mx-auto">
		<!-- text - start -->
		<div class="mb-10 md:mb-16">
			<h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
				Planes de suscripción
			</h2>

			<p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
				Elige el plan que más se ajuste a tus necesidades. <br>
                <span class="text-gray-500">¡No te preocupes!</span> <br>
                <span class="text-gray-500">Si tienes dudas contactanos y te ayudamos.</span>
			</p>
		</div>
		<!-- text - end -->

		<div class="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
			<!-- left side - start -->
			<div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
				<div class="mb-4">
					<h3 class="text-gray-100 text-2xl sm:text-3xl font-semibold">Plan mensual</h3>
					<p class="text-gray-300">Basico</p>
				</div>

				<div class="space-x-2 mb-4">
					<span class="text-gray-100 text-4xl font-bold">$15</span>
					<span class="text-gray-300 text-2xl line-through">$20</span>
				</div>

				<ul class="text-gray-300 space-y-2 mb-6">
					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Acceso a todo el catalogo</span>
					</li>
					<!-- feat - end -->

					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Acceso a comunidad de estudiantes</span>
					</li>
					<!-- feat - end -->

					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Disponible desde app movil</span>
					</li>
					<!-- feat - end -->
				</ul>

				<a on:click={()=> Swal.fire({
					  position: 'center',
					  icon: 'success',
					  title: 'Listo, se ha agregado tu nueva suscripción',
					  showConfirmButton: false,
					  timer: 1500
					})}
					href={"#"}
					class="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
					>Obtener este plan</a
				>
			</div>
			<!-- left side - end -->

			<!-- right side - start -->
			<div
				class="w-full sm:w-1/2 bg-gradient-to-tr from-purple-700 to-violet-400 rounded-lg shadow-xl p-6 sm:p-8"
			>
				<div class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
					<div>
						<h3 class="text-white text-2xl sm:text-3xl font-semibold">Suscripción Anual</h3>
						<p class="text-indigo-100">Premium</p>
					</div>

					<span
						class="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
						>Más popular</span>
				</div>

				<div class="space-x-2 mb-4">
					<span class="text-white text-4xl font-bold">$99</span>
					<span class="text-indigo-100 text-2xl line-through">$180</span>
				</div>

				<ul class="text-indigo-100 space-y-2 mb-6">
					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Todos los beneficios del plan basico</span>
					</li>
					<!-- feat - end -->

					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Disponible sin conexión</span>
					</li>
					<!-- feat - end -->

					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Soporte prioritario</span>
					</li>
					<!-- feat - end -->

					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Acceso a mentorias</span>
					</li>
					<!-- feat - end -->

					<!-- feat - start -->
					<li class="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 shrink-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>

						<span>Talleres semanales</span>
					</li>
					<!-- feat - end -->
				</ul>

				<a on:click={()=> Swal.fire({
					  position: 'center',
					  icon: 'success',
					  title: 'Listo, se ha agregado tu nueva suscripción',
					  showConfirmButton: false,
					  timer: 1500
					})}
					href={"#"}
					class="block bg-indigo-200 bg-opacity-50 hover:bg-indigo-300 active:bg-indigo-400 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
					>Obtener este plan</a
				>
			</div>
			<!-- right side - end -->
		</div>
	</div>
</div>
