"use client";
import { motion } from "framer-motion";


import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { useState } from "react";

export default function ContactForm() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.1 }}
			viewport={{ once: true }}
			className='group'
		>
			<div className='text-3xl sm:text-4xl lg:text-5xl font-title mb-20'>
				Contact
			</div>
			<div className='relative mb-20'>
				<Card className='relative bg-gray-900/60 backdrop-blur-sm border-primary/50'>
					<CardHeader>
						<CardTitle className='text-center text-blue-300 text-2xl'>
							Travaillons ensemble ! Envoyez moi un message et j'y répondrais
							dès que possible.
						</CardTitle>
						<CardDescription className='text-center text-gray-400 text-md'>
							You can reach out in English as well.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							className='space-y-4'
							action='https://formspree.io/f/xyzevbng'
							method='POST'
						>
							<div className='space-y-2'>
								<label htmlFor='email' className='text-sm text-gray-300'>
									Email
									<input
										name='email'
										type='email'
										required
										className='w-full px-4 py-2 bg-gray-900/80 border border-primary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
										placeholder='votre.email@exemple.com'
									/>
								</label>
							</div>
							<div className='space-y-2'>
								<label htmlFor='message' className='text-sm text-gray-300'>
									Message
									<textarea
										name='message'
										rows={4}
										required
										className='w-full px-4 py-2 bg-gray-900/80 border border-primary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
										placeholder='Votre message...'
									/>
								</label>
							</div>
							<Button
								type='submit'
								className='w-full bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-blue-700'
								
							>
								Envoyer
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</motion.div>
	);
}
