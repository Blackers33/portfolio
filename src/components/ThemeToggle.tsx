"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure the component is mounted before rendering
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className='p-2 border rounded'
		>
			{theme === "light" ? "Dark Mode" : "Light Mode"}
		</button>
	);
}
