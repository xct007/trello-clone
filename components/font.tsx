import localFont from "next/font/local";

export const charlieText = localFont({
	src: [
		{
			path: "../public/fonts/Charlie_Text-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Charlie_Text-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
	],
});

export const charlieDisplay = localFont({
	src: [
		{
			path: "../public/fonts/Charlie_Display-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/Charlie_Display-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
});
