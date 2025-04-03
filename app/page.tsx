import { charlieText, charlieDisplay } from "@/components/font";
import { PlayIcon } from "@/components/icons";
import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	Grid,
	Heading,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";

const PromoBanner = () => (
	<Grid px={0} py={4}>
		<Center textAlign="center">
			<Text
				fontFamily={charlieText.style.fontFamily}
				fontSize="md"
				color="#172B4D"
			>
				Accelerate your teams&apos; work with Atlassian Intelligence
				(AI) features 🤖 now available for all Premium and Enterprise!{" "}
				<Link
					href="https://www.atlassian.com/software/artificial-intelligence"
					target="_blank"
					style={{
						textDecoration: "underline",
						color: "#0052CC",
					}}
					rel="noopener"
				>
					Learn more.
				</Link>
			</Text>
		</Center>
	</Grid>
);

const HeroContent = () => (
	<Flex
		gap={{ base: 4, md: 8 }}
		px={6}
		align="center"
		justify="space-between"
		direction={{ base: "column", md: "row" }}
	>
		<Stack
			direction={"row"}
			justify="center"
			maxW={{ base: "100%", md: "520px" }}
			gap={8}
			flex={1}
		>
			<Flex direction="column" gap={4}>
				<Stack gap={4}>
					<Heading
						as="h1"
						fontSize={{ base: "36px", md: "44px" }}
						fontWeight="semibold"
						lineHeight="1.1"
						fontFamily={charlieDisplay.style.fontFamily}
						color="#172B4D"
						letterSpacing="-0.02em"
					>
						Capture, organize, and tackle your to-dos from anywhere.
					</Heading>
					<Text
						fontSize={{ base: "18px", md: "20px" }}
						fontFamily={charlieText.style.fontFamily}
						color="#172B4D"
						lineHeight="1.5"
					>
						Escape the clutter and chaos—unleash your productivity
						with Trello.
					</Text>
				</Stack>

				<Stack
					direction={{ base: "column", md: "row" }}
					gap={3}
					width="100%"
				>
					<Input
						type="email"
						placeholder="Email"
						size="lg"
						display={{ base: "none", md: "flex" }}
						minW="250px"
						height="48px"
						borderColor="#DFE1E6"
						_hover={{ borderColor: "#C1C7D0" }}
						_focus={{
							borderColor: "#0052CC",
							boxShadow: "none",
						}}
						fontFamily={charlieText.style.fontFamily}
						fontSize="16px"
						borderRadius="3px"
					/>
					<Button
						size="lg"
						height="48px"
						bg="#0052CC"
						color="white"
						fontWeight="normal"
						w={{ base: "full", md: "auto" }}
						fontFamily={charlieText.style.fontFamily}
						px={6}
						_hover={{ bg: "#0747A6" }}
						fontSize="16px"
						borderRadius="3px"
					>
						Sign up - it&apos;s free!
					</Button>
				</Stack>

				<Button
					variant="plain"
					color="#0052CC"
					fontFamily={charlieText.style.fontFamily}
					fontWeight="normal"
					display="flex"
					alignItems="center"
					gap={2}
					width="fit-content"
					_hover={{
						"& svg": {
							transform: "translateX(6px)",
							transition: "transform 0.2s ease",
						},
					}}
					height="auto"
					p={0}
					fontSize="16px"
				>
					Watch video <PlayIcon />
				</Button>
			</Flex>
		</Stack>
		<Box
			flex={1}
			display={{ base: "none", md: "block" }}
			position="relative"
			maxW="500px"
			overflow="hidden"
		>
			<video muted autoPlay playsInline>
				{/* <source src="/videos/n20-hero-cropped2.mov" /> */}
				<source src="https://videos.ctfassets.net/rz1oowkt5gyp/4AJBdHGUKUIDo7Po3f2kWJ/ccaa544e6ae561e906e45a1c106bcc2d/n20-hero-cropped2.mov" />
				Hero
			</video>
		</Box>
	</Flex>
);

export default function Home() {
	return (
		<Container as={"main"} maxW="100%" padding={0}>
			<Flex
				as="section"
				backgroundColor="blue.100"
				direction="column"
				width="100%"
			>
				<PromoBanner />
			</Flex>
			<Container p={20} as="section">
				<HeroContent />
			</Container>
		</Container>
	);
}
