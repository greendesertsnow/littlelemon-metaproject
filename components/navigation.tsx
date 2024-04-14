import { menuItems } from "@/lib/data";
import littlelemon from "@/public/llc.png";

import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Navigation() {
	const actions = [
		{ id: "reservations", label: "Reservations", href: "#reservations" },
		{ id: "login", label: "Login", href: "#login", button: true },
	];
	return (
		<Navbar className="bg-white">
			<NavbarBrand>
				<Image
					src={littlelemon}
					alt="little lemon logo"
					height={54}
					width={200}
				/>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map(({ id, label, href }) => (
					<NavbarItem key={id}>
						<Link href={href} className="text-background">
							{label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end" className="text-background">
				<NavbarItem className="hidden lg:flex text-background">
					<Link className="text-background" href="#">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="#"
						variant="flat"
						className="text-background"
					>
						Reserve Table
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
