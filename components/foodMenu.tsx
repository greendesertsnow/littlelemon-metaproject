"use client";

import type { CardProps } from "@nextui-org/react";

import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Image,
	Spacer,
} from "@nextui-org/react";
import React from "react";

const foodMenu = [
	{
		id: 1,
		name: "Avocado Toast",
		description:
			"Whole grain toast topped with mashed avocado, cherry tomatoes, and a sprinkle of sea salt.",
		price: 8.99,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428284476522577/greends_Avocado_Toast_dc3da614-3a13-4588-95b7-b411de27fe20.png?ex=662c01fe&is=66198cfe&hm=cb8106f085fd72cd392867f886f3646622c6ec805d8f36d01765d0b3874f277d&",
	},
	{
		id: 2,
		name: "Quinoa Salad",
		description:
			"Freshly cooked quinoa mixed with colorful bell peppers, cucumber, and a tangy lemon vinaigrette.",
		price: 10.49,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428357415469136/greends_Quinoa_Salad_e4fb6514-096c-4626-9936-d849db05c167.png?ex=662c020f&is=66198d0f&hm=44077ce243c3012e2dd7eefbb20b467d3834a097be583deeb14c70b358686976&",
	},
	{
		id: 3,
		name: "Vegan Burger",
		description:
			"House-made vegan patty served on a whole grain bun with lettuce, tomato, onion, and avocado spread.",
		price: 12.99,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428388201533600/greends_Vegan_Burger_9b918495-1409-4228-8236-ae5ec40c2f11.png?ex=662c0216&is=66198d16&hm=df20dea71e98f5641912b1d3ebe779bc4f0b3f4327a384865726637353416a46&",
	},
	{
		id: 4,
		name: "Green Smoothie Bowl",
		description:
			"A refreshing blend of spinach, kale, banana, and almond milk topped with fresh berries and granola.",
		price: 9.99,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428505990037534/greends_Green_Smoothie_Bowl_88c5f79c-2eb9-4541-bab5-9b0ddf9eb72f.png?ex=662c0232&is=66198d32&hm=032bf56c7ee8e196c548199af398ff3c976af0264539139164c3535d773d9187&",
	},
	{
		id: 5,
		name: "Chickpea Curry",
		description:
			"Creamy chickpea curry with coconut milk, served with jasmine rice and steamed vegetables.",
		price: 11.99,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428508825522176/greends_Chickpea_Curry_1db53316-3124-4355-9dc2-bea488875632.png?ex=662c0233&is=66198d33&hm=c78f0acdedd8acb0013a7633d116c709a9792f1c77722ec47178aeedbce1cda6&",
	},
	{
		id: 6,
		name: "Vegan Caesar Salad",
		description:
			"Crisp romaine lettuce, vegan Caesar dressing, croutons, and dairy-free parmesan cheese.",
		price: 10.99,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428743836434473/greends_Vegan_Caesar_Salad_0e0df1f8-99d3-44cb-a875-93a7a95b59ab.png?ex=662c026b&is=66198d6b&hm=e238a32d290d2f28f7bf4b6b35d27d31dda0b81c164496b1b629775b9316ae22&",
	},
	{
		id: 7,
		name: "Sweet Potato Buddha Bowl",
		description:
			"Roasted sweet potatoes, quinoa, black beans, avocado, and tahini dressing.",
		price: 11.49,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428525992808488/greends_Sweet_Potato_Buddha_Bowl_b84141cb-2177-4a8f-b38e-4178f032512f.png?ex=662c0237&is=66198d37&hm=4ed2868b927dd0247b2d5063eab402150fddfa6897c60674eede89f52edd41ba&",
	},
	{
		id: 8,
		name: "Mushroom Risotto",
		description:
			"Creamy risotto made with arborio rice, mixed mushrooms, garlic, and nutritional yeast.",
		price: 13.49,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428662869852191/greends_Mushroom_Risotto_b4635bc3-41c7-4dae-8aeb-6bcca1f41127.png?ex=662c0258&is=66198d58&hm=a99025daa6bbfb6065577a808c87d733287cbc4822bbdb202233d355d0f8d574&",
	},
	{
		id: 9,
		name: "Falafel Wrap",
		description:
			"Crispy falafel balls wrapped in a whole wheat tortilla with hummus, lettuce, tomato, and cucumber.",
		price: 9.99,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428834630533261/greends_Falafel_Wrap_dbb4dd43-c7df-4185-895b-f786760b7b5a.png?ex=662c0281&is=66198d81&hm=416cdee9f3790ea9a352d57341d0ed230532760456292a1c0b6d8d77627dab69&",
	},
	{
		id: 10,
		name: "Coconut Curry Noodles",
		description:
			"Rice noodles cooked in a creamy coconut curry sauce with tofu, bell peppers, and snap peas.",
		price: 12.49,
		image:
			"https://cdn.discordapp.com/attachments/996667186280136726/1228428871485886555/greends_Coconut_Curry_Noodles_9208ebfe-8b4f-4a3d-ad97-595b73c83dca.png?ex=662c028a&is=66198d8a&hm=3ae0ae694bb56303c6cf45a75cb4be22c2d40d1307a2f2d95f83b5bbe2eb2a6f&",
	},
];
export default function Menu() {
	return (
		<div className="flex flex-wrap gap-4 items-center justify-center px-6 py-12 lg:px-8 bg-emerald-900 ">
			{foodMenu.map((item) => (
				<MenuItem item={item} key={item.id} />
			))}
		</div>
	);
}
export function MenuItem(props: CardProps & { item: (typeof foodMenu)[0] }) {
	const { name, description, price, image } = props.item;
	return (
		<Card className="w-[420px]  text-yellow-600" {...props}>
			<CardBody className="px-3 pb-1 relative">
				<Image
					alt={name}
					className="aspect-video w-full object-cover object-top"
					src={image}
				/>

				<p className="text-large font-medium text-yellow-100 absolute z-10 top-6 right-6 backdrop-blur-sm bg-black/30 rounded-lg p-2">
					${price}
				</p>

				<Spacer y={2} />
				<div className="flex flex-col gap-2 px-2">
					<p className="text-large font-medium">{name}</p>
					<p className="text-small text-default-400">{description}</p>
				</div>
			</CardBody>
			<CardFooter className="justify-end gap-2">
				<Button fullWidth variant="light">
					Ingredients
				</Button>
				<Button className="text-background" color="primary" fullWidth>
					Order
				</Button>
			</CardFooter>
		</Card>
	);
}
