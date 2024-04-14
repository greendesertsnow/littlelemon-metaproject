/**
 * @jest-environment jsdom
 */

import RootLayout from "@/app/layout";
import Home from "@/app/page";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { menuItems } from "@/lib/data";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home has following texts ", () => {
	const testCases = [
		{ description: "Title", text: "Little Lemon" },
		{ description: "Date picker", text: "Pick a date" },
		{ description: "Guest ", text: "Guest" },
		{ description: "Reserve", text: "Reserve Table" },
		{ description: "Name input", text: "Name" },
		{ description: "Email input", text: "Email" },
	];
	beforeEach(() => {
		render(<Home />);
	});

	for (const { description, text } of testCases) {
		it(description, () => {
			const regex = new RegExp(text, "i");
			const element = screen.getByText(regex);
			expect(element).toBeInTheDocument();
		});
	}
});

describe("Top Navigation has following texts ", () => {
	const testCases = [
		{ description: "Home", text: "Home" },
		{ description: "About", text: "About" },
		{ description: "Menu", text: "Menu" },
		{ description: "Order Online", text: "Order Online" },
		{ description: "Reservations", text: "Reserve Table" },
		{ description: "Login", text: "Login" },
	];
	beforeEach(() => {
		render(<Navigation />);
	});

	for (const { description, text } of testCases) {
		it(description, () => {
			const regex = new RegExp(text, "i");
			const element = screen.getByText(regex);
			expect(element).toBeInTheDocument();
		});
	}
});

describe("Footer has following links ", () => {
	const testCases = [
		{ description: "Facebook", href: "https://www.facebook.com" },
		{ description: "Instagram", href: "https://www.instagram.com" },
		{ description: "Twitter", href: "https://www.twitter.com" },
		{ description: "GitHub", href: "https://www.github.com" },
		{ description: "YouTube", href: "https://www.youtube.com" },
	];
	beforeEach(() => {
		render(<Footer />);
	});

	for (const { description, href } of testCases) {
		it(description, () => {
			const link = screen.getByRole("link", { name: description });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute("href", href);
		});
	}
});

describe("Home has following test ids ", () => {
	const testCases = [
		{ description: "Decrease Button", id: "subtract-one" },
		{ description: "Increase Button", id: "add-one" },
		{ description: "Time Picker", id: "time" },
		{ description: "Occasion Picker", id: "occasion" },
	];
	beforeEach(() => {
		render(<Home />);
	});

	for (const { description, id } of testCases) {
		it(description, () => {
			const element = screen.getByTestId(id);
			expect(element).toBeInTheDocument();
		});
	}
});
