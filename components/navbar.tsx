"use client";

import { TrelloIcon } from "./icons";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { charlieText } from "./font";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import React, { forwardRef, useEffect, useState } from "react";

const ITEMS = [
	{ name: "Features" },
	{ name: "Solutions" },
	{ name: "Plans" },
	{ name: "Pricing", asLink: true },
	{ name: "Resources" },
];

const NavLink = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button>
>((props, ref) => (
	<Button
		ref={ref}
		variant="plain"
		fontWeight="normal"
		fontSize="sm"
		px={4}
		height="70px"
		_hover={{ color: "blue.500" }}
		{...props}
	/>
));

NavLink.displayName = "NavLink";

export const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Flex
			as="nav"
			position="sticky"
			top="0"
			zIndex="100"
			bg="white"
			boxShadow={isScrolled ? "xl" : "none"}
			transition="box-shadow 0.2s ease-in-out"
			height="60px"
			width="100%"
			px={28}
			alignItems="center"
		>
			<Flex
				as="header"
				alignItems="center"
				justifyContent="space-between"
				width="100%"
				maxW="1600px"
				mx="auto"
			>
				<Flex direction="row" gap={0} alignItems="center">
					<Link href="/">
						<TrelloIcon size={115} />
					</Link>
					<Flex fontFamily={charlieText.style.fontFamily} ml={4}>
						{ITEMS.map((item) => (
							<NavLink key={item.name}>
								{item.name}
								{!item.asLink && (
									<FiChevronDown
										style={{ marginLeft: "4px" }}
									/>
								)}
							</NavLink>
						))}
					</Flex>
				</Flex>
				<Stack
					direction="row"
					justify="end"
					gap={2}
					display={{ base: "none", md: "flex" }}
					alignItems={"center"}
				>
					<Button
						variant="ghost"
						fontFamily={charlieText.style.fontFamily}
						fontWeight="normal"
						fontSize="sm"
						height="36px"
						_hover={{ bg: "gray.50" }}
					>
						Log in
					</Button>
					<Button
						colorScheme="blue"
						fontFamily={charlieText.style.fontFamily}
						fontWeight="normal"
						fontSize="sm"
						height="36px"
						px={5}
						bg="#0052CC"
						_hover={{ bg: "#0747A6" }}
					>
						Get Trello for free
					</Button>
				</Stack>
			</Flex>
		</Flex>
	);
};
