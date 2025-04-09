"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
export default function ContactForm() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Reset form
		setEmail("");
		setMessage("");
		setIsSubmitting(false);

		// You would typically send the form data to your backend here
		console.log("Form submitted:", { email, message });

		// Show success message (you could implement a toast notification here)
		alert("Message sent successfully!");
	};

	return (
		<>
			<div className='text-3xl sm:text-4xl lg:text-5xl font-title mb-20'>
				Contact
			</div>
			<div className='relative mb-20'>
				<Card className='relative bg-gray-900/60 backdrop-blur-sm border-primary/50'>
					<CardHeader>
						<CardTitle className='text-center text-blue-300 text-2xl'>
							Travaillons ensemble ! envoyez moi un message et j'y répondrais dès que possible.
						</CardTitle>
						<CardDescription className='text-center text-gray-400 text-md'>
							You can reach out in English as well.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className='space-y-4' onSubmit={handleSubmit}>
							<div className='space-y-2'>
								<label htmlFor='email' className='text-sm text-gray-300'>
									Email
								</label>
								<input
									id='email'
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className='w-full px-4 py-2 bg-gray-900/80 border border-primary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
									placeholder='votre.email@exemple.com'
								/>
							</div>
							<div className='space-y-2'>
								<label htmlFor='message' className='text-sm text-gray-300'>
									Message
								</label>
								<textarea
									id='message'
									rows={4}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
									className='w-full px-4 py-2 bg-gray-900/80 border border-primary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
									placeholder='Votre message...'
								/>
							</div>
							<Button
								type='submit'
								className='w-full bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-blue-700'
								disabled={isSubmitting}
							>
								{isSubmitting ? "Sending..." : "Send Message"}
							</Button>
						</form>
					</CardContent>
					<CardFooter className='flex flex-col sm:flex-row justify-center gap-4 text-gray-300'>
						<Link
							href='mailto:johndoe@example.com'
							className='flex items-center gap-2 hover:text-blue-400 transition-colors'
						> Vous pouvez aussi me contacter sur 
							<Mail className='w-5 h-5' />
							sacha.alt@proton.me
						</Link>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}
