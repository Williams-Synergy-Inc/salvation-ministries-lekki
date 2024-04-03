import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Input } from "../../components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
	type: z.enum(["all", "mentions", "none"], {
		required_error: "You need to select a notification type.",
	}),
});

export function ServiceForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(FormSchema), // Using zodResolver with useForm
	});

	// Handle form submission
	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}
	return (
		<AlertDialog>
			<AlertDialogTrigger data-state="closed" asChild>
				<Button variant="outline">Show Dialog 1</Button>
			</AlertDialogTrigger>

			<AlertDialogContent data-state="closed">
				<AlertDialogHeader className="flex flex-row justify-between items-end">
					<AlertDialogTitle className="text-[20px]">
						Service Group Form
					</AlertDialogTitle>
					<AlertDialogCancel className="font-bold">X</AlertDialogCancel>
				</AlertDialogHeader>

				<AlertDialogDescription className="overflow-y-auto max-h-[400px] lg:max-h-[600px]">
					<div className="grid gap-3">
						<span className="text-[18px] font-bold text-primary-blue">
							Please Tick The service Group You Intend To Join
						</span>

						<div className="grid gap-3 md:grid-cols-2"></div>
					</div>
				</AlertDialogDescription>

				{/* <AlertDialogDescription className="overflow-y-auto max-h-[400px] lg:max-h-[600px]">
					<div className="grid gap-3">
						<span className="text-[18px] font-bold text-primary-blue">
							Upload image
						</span>
						<div className="w-[150px] h-[150px] rounded-xl bg-gray-300"></div>
               </div>

					<div>
						<span className="text-[18px] font-bold text-primary-blue">
							Basic Personal Information
						</span>
						<div className="grid gap-3 md:grid-cols-2">
							<Input placeholder="Full Name (Surname Last)" />
							<Input placeholder="Residential Address" />
							<Input placeholder="Nearest Bus Stop" />
							<Input placeholder="Nationaliity" />
							<Input placeholder="Gender" />
							<Input placeholder="Marital Status" />
							<Input placeholder="Present Workplace" />
							<Input placeholder="Date of Birth" />
							<Input placeholder="Are you born again" />
							<Input placeholder="If yes, when" />
						</div>
               </div>

					<div>
						<span className="text-[18px] font-bold text-primary-blue">
							Church Details
						</span>
						<div className="grid gap-3 md:grid-cols-2">
							<Input placeholder="When did you join the church" />
							<Input placeholder="Tithe Card Number" />
							<Input placeholder="Name of your Home Cell" />
							<Input placeholder="Have You Attended Wilibi?" />
						</div>
					</div>
				</AlertDialogDescription> */}

				<AlertDialogFooter>
					<AlertDialogAction>Next</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
