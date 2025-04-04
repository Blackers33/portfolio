"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className='rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
		>
			{theme === "light" ? (
				<Moon className='h-5 w-5' />
			) : (
				<Sun className='h-5 w-5' />
			)}
		</button>
	);
}
