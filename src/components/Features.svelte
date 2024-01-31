<script>
	import admin from '$lib/assets/admin.png';
	import mod from '$lib/assets/mod.png';
	import tickets from '$lib/assets/tickets.png';
	import logging from '$lib/assets/logging.png';
	import games from '$lib/assets/games.png';
	import polls from '$lib/assets/polls.png';
	import tags1 from '$lib/assets/tags1.png';
</script>

<section class="p-4 md:p-10">
	<div class="mt-5 md:mt-7">
		<div class="mx-auto w-full max-w-[1240px] px-6 lg:px-10 py-6 lg:py-10 !py-16 lg:!py-40">
			<div class="grid grid-cols-1 gap-12 lg:gap-36">
				<!-- ADMIN -->
				<div data-aos="fade-up">
					<div class="hidden lg:grid grid-cols-7 gap-16">
						<div class="col-span-4">
							<img
								src={admin}
								alt="admin"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Admin Commands</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Empower your Discord server with PizzaHat's admin commands. Take control by setting
								up tickets, logging channels, and enabling automod functionalities. Customize your
								server with ease, ensuring a tailored and secure environment for your community.
							</p>
						</div>
					</div>
					<div class="grid lg:hidden grid-cols-1 gap-6">
						<div class="col-span-4">
							<img
								src={admin}
								alt="admin"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Admin</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Empower your Discord server with PizzaHat's admin commands. Take control by setting
								up tickets, logging channels, and enabling automod functionalities. Customize your
								server with ease, ensuring a tailored and secure environment for your community.
							</p>
						</div>
					</div>
				</div>

				<!-- MODERATION -->
				<div data-aos="fade-up">
					<div class="hidden lg:grid grid-cols-7 gap-16">
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Powerful Moderation
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Experience the strength of PizzaHat's powerful moderation features, designed to keep
								your Discord server running smoothly. With advanced capabilities, our moderation
								tools empower server owners and moderators to maintain order, enforce rules, and
								ensure a secure and enjoyable community environment.
							</p>
						</div>
						<div class="col-span-4">
							<img
								src={mod}
								alt="mod"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:mr-0 lg:ml-auto"
							/>
						</div>
					</div>
					<div class="grid lg:hidden grid-cols-1 gap-6">
						<div class="col-span-4">
							<img
								src={mod}
								alt="mod"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Powerful Moderation
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Experience the strength of PizzaHat's powerful moderation features, designed to keep
								your Discord server running smoothly. With advanced capabilities, our moderation
								tools empower server owners and moderators to maintain order, enforce rules, and
								ensure a secure and enjoyable community environment.
							</p>
						</div>
					</div>
				</div>

				<!-- LOGS -->
				<div data-aos="fade-up">
					<div class="hidden lg:grid grid-cols-7 gap-16">
						<div class="col-span-4">
							<img
								src={logging}
								alt="logging"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Comprehensive Logging
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Keep a detailed record of every event and interaction within your server with our
								comprehensive logging system. From user actions to moderation activities, stay
								informed and maintain a transparent and secure server environment.
							</p>
						</div>
					</div>
					<div class="grid lg:hidden grid-cols-1 gap-6">
						<div class="col-span-4">
							<img
								src={logging}
								alt="logging"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Comprehensive Logging
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Keep a detailed record of every event and interaction within your server with our
								comprehensive logging system. From user actions to moderation activities, stay
								informed and maintain a transparent and secure server environment.
							</p>
						</div>
					</div>
				</div>

				<!-- TICKETS -->
				<div data-aos="fade-up">
					<div class="hidden lg:grid grid-cols-7 gap-16">
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Advanced Ticket System
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Revolutionize user support and organization with our advanced ticket system.
								Effortlessly manage and resolve user inquiries, creating a seamless experience for
								both administrators and community members.
							</p>
						</div>
						<div class="col-span-4">
							<img
								src={tickets}
								alt="tickets"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:mr-0 lg:ml-auto"
							/>
						</div>
					</div>
					<div class="grid lg:hidden grid-cols-1 gap-6">
						<div class="col-span-4">
							<img
								src={tickets}
								alt="tickets"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Advanced Ticket System
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Revolutionize user support and organization with our advanced ticket system.
								Effortlessly manage and resolve user inquiries, creating a seamless experience for
								both administrators and community members.
							</p>
						</div>
					</div>
				</div>

				<!-- GAMES -->
				<div data-aos="fade-up">
					<div class="hidden lg:grid grid-cols-7 gap-16">
						<div class="col-span-4">
							<img
								src={games}
								alt="games"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Interactive Games
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Elevate the gaming experience in your server with our Interactive Games feature.
								Engage in thrilling challenges, compete with friends, and foster a sense of
								camaraderie through a variety of entertaining games designed for your community's
								enjoyment.
							</p>
						</div>
					</div>
					<div class="grid lg:hidden grid-cols-1 gap-6">
						<div class="col-span-4">
							<img
								src={games}
								alt="games"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">
								Interactive Games
							</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Elevate the gaming experience in your server with our Interactive Games feature.
								Engage in thrilling challenges, compete with friends, and foster a sense of
								camaraderie through a variety of entertaining games designed for your community's
								enjoyment.
							</p>
						</div>
					</div>
				</div>

				<!-- TAGS -->
				<div data-aos="fade-up" class="mb-2 md:mb-5">
					<div class="hidden lg:grid grid-cols-7 gap-16">
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Tag Snippets</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Organize and streamline your server's content with our Tags feature. Whether it's
								quick information, helpful resources, or fun snippets, create custom tags to enhance
								communication and easily access important content.
							</p>
						</div>
						<div class="col-span-4">
							<img
								src={tags1}
								alt="tags1"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:mr-0 lg:ml-auto"
							/>
						</div>
					</div>
					<div class="grid lg:hidden grid-cols-1 gap-6">
						<div class="col-span-4">
							<img
								src={tags1}
								alt="tags1"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Tag Snippets</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Organize and streamline your server's content with our Tags feature. Whether it's
								quick information, helpful resources, or fun snippets, create custom tags to enhance
								communication and easily access important content.
							</p>
						</div>
					</div>
				</div>

				<!-- POLLS -->
				<div data-aos="fade-up">
					<div class="hidden lg:grid grid-cols-7 gap-16">
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Poll Powerhouse</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Unleash the potential of community decision-making with our Polls feature. This
								robust tool empowers your server members to actively participate in shaping the
								server's direction.
							</p>
						</div>
						<div class="col-span-4">
							<img
								src={polls}
								alt="polls"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:mr-0 lg:ml-auto"
							/>
						</div>
					</div>
					<div class="grid lg:hidden grid-cols-1 gap-6">
						<div class="col-span-4">
							<img
								src={polls}
								alt="polls"
								class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
							/>
						</div>
						<div
							class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left"
						>
							<h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Poll Powerhouse</h2>
							<p class="text-accent_5 text-base my-8 whitespace-pre-line">
								Unleash the potential of community decision-making with our Polls feature. This
								robust tool empowers your server members to actively participate in shaping the
								server's direction.
							</p>
						</div>
					</div>
				</div>

				<!-- MORE -->
				<div data-aos="fade-up">
					<h3 class="p-0 md:p-0 m-0 md:m-0 font-semibold text-3xl md:text-4xl text-center">
						And much more!
					</h3>
					<div class="text-center mt-0 md:mt-5">
						<button
							class="text-black font-bold rounded-lg p-2 md:p-4 mt-2 md:mt-5 md:m-2 lg:m-2 bg-accent_1 hover:bg-accent_1_hover"
						>
							<a href="https://dsc.gg/pizza-invite" target="_blank">Add to server</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
