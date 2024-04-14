import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div className="min-h-screen grid place-content-center text-center px-10">
			<p className="stroked mr-7 md:leading-[200px] w-auto py-2 text-6xl font-black md:py-4 md:text-[10rem] transition-all duration-300 ease-linear">
				404
			</p>
			<div className="w-full mx-auto max-w-lg mt-8 md:mt-0">
				<Button size="lg" className="w-full font-bold" variant="solid">
					<Link
						href="/"
						className="pb-1 dark:text-zinc-800 bg-background text-yellow-100"
					>
						Take me home! This lemon is too sour.
					</Link>
				</Button>
			</div>
		</div>
	);
}
