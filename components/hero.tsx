import { Image } from "@nextui-org/react";
import { Booking } from "./booking";

export default function Hero() {
	return (
		<div className="relative isolate overflow-hidden bg-emerald-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-end">
					<div className="mb-2">
						<h1 className=" text-4xl font-extrabold text-yellow-500 sm:text-5xl">
							Little Lemon
						</h1>
						<h2 className="mt-10 text-2xl font-bold text-yellow-500 sm:text-2xl">
							Chicago
						</h2>
						<p className="mt-6 text-lg text-yellow-500">
							We are a family owned Mediterraneran restaurant, focused on
							traditional recipes servred with a modern twist.
						</p>
						<div className="mt-10 flex justify-center sm:justify-start  items-center gap-4">
							<Booking />
						</div>
					</div>
					<div className="mt-16 lg:mt-0">
						<div className="rounded-3xl bg-gray-100 p-2 ring-1 w-full ring-gray-200 shadow-lg">
							<Image
								src="https://cdn.discordapp.com/attachments/996667186280136726/1228060047540752444/greends_little_lemon_cafe_yellow_and_green_tones_vegan_cafe_b9b16681-8be1-4ab8-ba5d-16f1293f12a1.png?ex=662aab0b&is=6618360b&hm=41ded2d63240a1090586df0517023a76058a6f9ace99cec4c2a9636d2a4517c8&"
								alt="Little Lemon Cafe"
								width={1024}
								height={1024}
								className="rounded-3xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
