"use client";

import { fetchAPI, submitAPI } from "@/lib/bookingAPI";
import { cn } from "@/lib/utils";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Minus, Plus } from "lucide-react";
import * as React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function Booking() {
	const [date, setDate] = useState(new Date());
	const [time, setTime] = React.useState("");
	const [occasion, setOccasion] = React.useState("Birthday");
	const [guests, setGuests] = React.useState(2);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const [submited, setSubmitted] = useState(false);

	React.useEffect(() => {
		console.log(submited);
	}, [submited]);

	function initializeTimes(date: Date) {
		return fetchAPI(date);
	}

	function updateTimes(date: string | number | Date) {
		const dateObj = new Date(date);
		return fetchAPI(dateObj);
	}

	function reducer(state, action) {
		let newState;
		switch (action.type) {
			case "UPDATE_TIMES": {
				const newDate = new Date(action.payload);
				newState = updateTimes(newDate);
				break;
			}

			default:
				throw new Error();
		}
		return newState;
	}

	const [availableTimes, dispatch] = React.useReducer(
		reducer,
		initializeTimes(date),
	);

	return (
		<>
			{submited ? (
				<Card classNames={{ base: "bg-emerald-900 outline w-full " }}>
					<CardHeader>Reserve A Table</CardHeader>
					<CardBody className="gap-4 flex flex-col justify-center items-center text-2xl text-center font-bold">
						<p>
							Congratulations {name.toUpperCase()},
							<br /> Your table has been reserved for {date.toDateString()} at{" "}
							{time.currentKey} for {guests} guests.
						</p>
						<p>
							We will send you an email to {email} with the details to verify.
						</p>
						<p>Happy {occasion.currentKey}!!!</p>
					</CardBody>
					<CardFooter className="flex justify-center">
						<Button
							onPress={() => setSubmitted(false)}
							variant="bordered"
							color="primary"
							className="w-full h-16"
							size="lg"
						>
							Reserve a New Table
						</Button>
					</CardFooter>
				</Card>
			) : (
				<Card classNames={{ base: "bg-emerald-900 outline w-full " }}>
					<CardHeader>Reserve A Table</CardHeader>
					<CardBody className="gap-4 flex flex-col justify-center">
						<div className="grid sm:grid-flow-col sm:grid-cols-2 gap-4">
							<DatePicker
								date={date}
								setDate={setDate}
								aria-label="Date Picker"
							/>
							<TimePicker
								aria-label="Time Picker"
								availableTimes={availableTimes}
								time={time}
								setTime={setTime}
							/>
						</div>
						<div className="grid grid-flow-col grid-cols-2 gap-4">
							<GuestCount
								guests={guests}
								setGuests={setGuests}
								aria-label="Guest count"
							/>
							<OccasionPicker
								occasion={occasion}
								setOccasion={setOccasion}
								aria-label="Occasion Picker"
							/>
						</div>
						<div className="grid grid-flow-col grid-cols-2 gap-4">
							<Input
								className="h-16"
								size="lg"
								type="name"
								label="Name"
								value={name}
								onValueChange={setName}
								aria-label="Name"
							/>

							<Input
								className="h-16"
								isInvalid={
									email.length > 5 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
								}
								aria-valuemin={5}
								size="lg"
								type="email"
								label="Email"
								aria-label="Email"
								value={email}
								onValueChange={setEmail}
							/>
						</div>
					</CardBody>
					<CardFooter className="flex justify-center">
						<Button
							aria-label="Reserve Button"
							onPress={() => setSubmitted(true)}
							variant="bordered"
							color="primary"
							className="w-full h-16"
							size="lg"
						>
							Reserve Table
						</Button>
					</CardFooter>
				</Card>
			)}
		</>
	);
}

export function TimePicker({ availableTimes, time, setTime }) {
	return (
		<Select
			data-testid="time"
			value={time}
			onSelectionChange={setTime}
			size="lg"
			isRequired
			label="Pick a time"
			placeholder="Pick a time"
			className="w-full"
		>
			{availableTimes.map((time, index) => (
				<SelectItem key={time} value={index}>
					{time}
				</SelectItem>
			))}
		</Select>
	);
}

export function OccasionPicker({ occasion, setOccasion }) {
	return (
		<Select
			data-testid="occasion"
			value={occasion}
			onSelectionChange={setOccasion}
			isRequired
			size="lg"
			label="Occasion"
			placeholder="Occasion"
			className="w-full"
		>
			<SelectItem key="Birthday" value="Birthday">
				Birthday
			</SelectItem>
			<SelectItem key="Anniversary" value="Anniversary">
				Anniversary
			</SelectItem>
		</Select>
	);
}

export function GuestCount({ guests, setGuests }) {
	return (
		<div className="flex items-center">
			<Button
				data-testid="subtract-one"
				isIconOnly
				variant="bordered"
				className="rounded-full"
				onPress={() => setGuests(guests - 1)}
				isDisabled={guests <= 1}
			>
				<Minus className="h-4 w-4" />
				<span className="sr-only">Decrease</span>
			</Button>
			<div className="flex-1 text-center">
				<div className="text-5xl font-bold tracking-tighter">{guests}</div>
				<div className="text-[0.70rem] uppercase text-muted-foreground">
					{guests === 1 ? "Guest" : "Guests"}
				</div>
			</div>
			<Button
				data-testid="add-one"
				isIconOnly
				variant="bordered"
				className="rounded-full"
				onPress={() => setGuests(guests + 1)}
				isDisabled={guests >= 10}
			>
				<Plus className="h-4 w-4" />
				<span className="sr-only">Decrease</span>
			</Button>
		</div>
	);
}

export function DatePicker({ date, setDate }) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					data-testid="date"
					variant={"outline"}
					className={cn(
						"w-full h-16 justify-start  pt-2 pl-3  flex flex-col items-start text-left font-normal text-background bg-gray-100",
					)}
				>
					{/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
					<span className=" ">Pick a date </span>
					<span className="text-black text-base">
						{date && format(date, "PPP")}
					</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
