"use client";

import { menuItems } from "@/lib/data";
import littlelemon from "@/public/llc.png";
import type { IconProps } from "@iconify/react";

import { Icon } from "@iconify/react";
import { Link, Spacer } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type SocialIconProps = Omit<IconProps, "icon">;

const socialItems = [
	{
		name: "Facebook",
		href: "https://www.facebook.com",
		icon: (props: SocialIconProps) => (
			<Icon {...props} icon="fontisto:facebook" />
		),
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com",
		icon: (props: SocialIconProps) => (
			<Icon {...props} icon="fontisto:instagram" />
		),
	},
	{
		name: "Twitter",
		href: "https://www.twitter.com",
		icon: (props: SocialIconProps) => (
			<Icon {...props} icon="fontisto:twitter" />
		),
	},
	{
		name: "GitHub",
		href: "https://www.github.com",
		icon: (props: SocialIconProps) => (
			<Icon {...props} icon="fontisto:github" />
		),
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com",
		icon: (props: SocialIconProps) => (
			<Icon {...props} icon="fontisto:youtube-play" />
		),
	},
];

export default function Footer() {
	return (
		<footer className="flex w-full flex-col">
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
				<div className="flex items-center justify-center">
					<Image
						src={littlelemon}
						alt="little lemon logo"
						height={54}
						width={200}
					/>
				</div>
				<Spacer y={8} />
				<div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
					{menuItems.map(({ label, href, id }) => (
						<Link
							key={id}
							isExternal
							className="text-default-500"
							href={href}
							size="sm"
						>
							{label}
						</Link>
					))}
				</div>
				<Spacer y={6} />
				<div className="flex justify-center gap-x-4">
					{socialItems.map((item) => (
						<a
							key={item.name}
							className="text-default-400"
							href={item.href}
							target="_blank"
							rel="noreferrer"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon aria-hidden="true" className="w-5" />
						</a>
					))}
				</div>
				<Spacer y={6} />
				<p className="mt-1 text-center text-small text-default-400">
					&copy; {new Date().getFullYear()} Little Lemon Inc. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
