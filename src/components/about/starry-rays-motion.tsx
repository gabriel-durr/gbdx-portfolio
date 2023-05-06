import { motion } from "framer-motion";

import { Box, useColorModeValue, useToken } from "@chakra-ui/react";

export const StarryRaysMotion = () => {
	const [sun, moon] = useToken("colors", ["gbdx.sun", "gbdx.moonSky"]);

	const colorMode = useColorModeValue(sun, moon);

	return (
		<Box pos="absolute" zIndex={-7} right={-20} top="-10%">
			<motion.svg
				width="600"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 599.04 468"
			>
				<defs>
					<motion.radialGradient
						animate={{
							r: ["20%", "100%", "20%"],
							cx: ["100%", "20%", "100%"],
							cy: ["20%", "100%", "20%"],
						}}
						transition={{
							duration: 12,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						id="pulse-1"
						cx="50%"
						cy="50%"
						r="20%"
					>
						<stop offset="7%" stopColor={colorMode} stopOpacity="0" />
						<stop offset="50%" stopColor={colorMode} />
						<stop offset="100%" stopColor={colorMode} stopOpacity="0" />
					</motion.radialGradient>
				</defs>

				<path
					d="M275,71.11c-2.24,0-4.47,0-6.71,0-1.44,0-2.68-.26-3.42-1.69s-.09-2.6.78-3.7a17.41,17.41,0,0,1,1.19-1.5q6.19-6.49,12.42-13c4.82-5,9.75-9.9,14.42-15,3.22-3.55,6.7-6.84,9.94-10.36,5.51-6,11.06-11.94,16.8-17.71a3.6,3.6,0,0,1,2.17-1.36,3.16,3.16,0,0,1,3.61,4c-.82,3.24-1.81,6.44-2.73,9.65Q319.7,33.58,316,46.67c-.45,1.58-.25,1.86,1.39,1.87q6.94,0,13.9,0c1.68,0,3.36.16,4,1.93A4.17,4.17,0,0,1,334,55c-12.73,12.69-25.32,25.53-38.21,38-6.36,6.17-12.56,12.5-18.93,18.66-.68.65-1.26,1.43-2.34,1.55a3.19,3.19,0,0,1-3.67-4c.21-.85.55-1.67.83-2.5Q276.71,92,281.81,77.16c.5-1.43,1.1-2.82,1.56-4.26s.23-1.75-1.23-1.78C279.74,71.07,277.35,71.11,275,71.11Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M395.36,206.42h-7a3.18,3.18,0,0,1-3.26-1.95A3.13,3.13,0,0,1,386,201c.68-.78,1.35-1.58,2.07-2.32,5.47-5.71,11-11.4,16.43-17.12q14.38-15.09,28.75-30.2l7.58-8A3.46,3.46,0,0,1,443,142a3.15,3.15,0,0,1,3.52,4.11c-.73,2.94-1.62,5.84-2.45,8.76q-3.78,13.35-7.58,26.69c-.09.31-.21.61-.28.91-.23.94.17,1.33,1.11,1.32,1.43,0,2.87,0,4.31,0,3.52,0,7-.06,10.55,0,2.74.06,4.08,1.7,3.66,4.14a4,4,0,0,1-1.43,2.14L428.8,215.71l-4.25,4.22q-13.62,13.5-27.23,27a4.18,4.18,0,0,1-2.57,1.61,3.15,3.15,0,0,1-3.47-4.13c.42-1.54,1.06-3,1.58-4.52q5.31-15.39,10.59-30.78c.1-.31.2-.61.29-.92.43-1.52.34-1.72-1.19-1.75-2.4,0-4.8,0-7.19,0Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M468.6,63h10.56c1.84,0,3.68,0,5.52,0,1.63,0,3,.4,3.72,2s0,2.91-1.14,4.07q-6.06,6-12.07,12L449.4,106.78q-9.58,9.56-19.21,19.09a8.63,8.63,0,0,1-1.63,1.39,2.87,2.87,0,0,1-3.37-.16,3,3,0,0,1-1.35-3.11,13.59,13.59,0,0,1,.66-2l11.43-33.28c.13-.38.26-.76.38-1.14.59-1.87.59-1.91-1.31-1.93-4.16,0-8.31,0-12.47,0a15.36,15.36,0,0,1-2.15-.06,3.12,3.12,0,0,1-2.23-4.89,14.77,14.77,0,0,1,1.74-2l52.9-55.52a12.38,12.38,0,0,1,1.36-1.35,3.12,3.12,0,0,1,3.59-.24,2.89,2.89,0,0,1,1.57,3,16.32,16.32,0,0,1-.58,2.56q-4.83,17-9.68,34.07C468.92,61.62,468.82,62.08,468.6,63Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M80.78,199.53H95.47c.8,0,1.61,0,2.4,0a3.15,3.15,0,0,1,2.38,5.09A10.73,10.73,0,0,1,99,206l-56.38,56.2a8.27,8.27,0,0,1-1.83,1.52,3.15,3.15,0,0,1-4.67-2.91,9,9,0,0,1,.74-2.76q5.74-16.75,11.52-33.51a4.52,4.52,0,0,0,.52-2.47H40c-1.84,0-3.68,0-5.51,0s-3.61-.07-4.44-2.05.32-3.15,1.53-4.42c3.88-4,7.72-8.1,11.57-12.15l41.67-43.74a15.76,15.76,0,0,1,1.35-1.36A3.07,3.07,0,0,1,90,158a3.15,3.15,0,0,1,1.48,3.7c-1.21,4.47-2.5,8.91-3.76,13.36l-6.36,22.34C81.15,198,81,198.58,80.78,199.53Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M308.27,161.63h-6a7.29,7.29,0,0,1-2.13-.22c-2.57-.76-3.38-3.14-1.69-5.22,1.11-1.36,2.34-2.63,3.55-3.9,5.24-5.48,10.52-10.94,15.76-16.43q14.88-15.6,29.74-31.22c2-2.14,4-4.35,6.1-6.43,1.85-1.83,4-1.6,5.28.39a3.28,3.28,0,0,1,.21,3c-1.67,5.83-3.3,11.66-5,17.49s-3.37,11.81-5,17.72c-.6,2.11-.48,2.26,1.84,2.27q7.07,0,14.14,0c1.47,0,2.77.31,3.28,1.84a3.35,3.35,0,0,1-1,3.92c-.36.32-.68.68-1,1L342,170.21l-31.06,31a18.12,18.12,0,0,1-1.55,1.49,3.55,3.55,0,0,1-4.23.27,3.1,3.1,0,0,1-1.08-3.83c1.69-5.07,3.45-10.12,5.19-15.17q3.31-9.63,6.65-19.23c.11-.3.22-.6.32-.9.69-2.13.68-2.15-1.47-2.18-.95,0-1.91,0-2.87,0Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M347.32,373.36a27.76,27.76,0,0,0-7.12-.51c-2.88,0-5.76,0-8.63,0a3,3,0,0,1-3.11-1.79,3.28,3.28,0,0,1,.59-3.58c.25-.31.54-.59.82-.88q7.54-7.86,15.09-15.74c9.81-10.28,19.65-20.55,29.4-30.9,3-3.2,6.08-6.34,9.11-9.52.27-.29.54-.59.83-.86,1.31-1.21,2.65-1.47,3.9-.76a3.19,3.19,0,0,1,1.52,3.87c-1.11,4.08-2.27,8.14-3.43,12.21l-6.61,23.23a17.27,17.27,0,0,0-.33,1.86,4.4,4.4,0,0,0,2.41.26c4.31,0,8.63,0,12.94,0a5.93,5.93,0,0,1,2.36.29,3.22,3.22,0,0,1,1.59,4.92,9.86,9.86,0,0,1-1.43,1.6q-14.72,14.61-29.44,29.2-13.61,13.53-27.15,27.09c-.86.85-1.67,1.68-3.05,1.62a3,3,0,0,1-3.15-3.15,6.61,6.61,0,0,1,.54-2.32q6-17.29,11.93-34.62C347.05,374.47,347.15,374,347.32,373.36Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M464.54,292.16H449.05a3.11,3.11,0,0,1-3.15-1.76,3.65,3.65,0,0,1,.42-3.65,8.69,8.69,0,0,1,.93-1.08c2.93-3.06,5.89-6.08,8.77-9.18,5.44-5.85,11.12-11.47,16.59-17.28,6.51-6.92,13.1-13.76,19.63-20.66,2.86-3,5.75-6,8.61-9a14.7,14.7,0,0,1,1.2-1.17,3,3,0,0,1,3.37-.35,2.93,2.93,0,0,1,1.74,2.89A22.05,22.05,0,0,1,505.9,236c-2.87,10.2-5.81,20.38-8.72,30.57-.85,3-.84,3,2.22,3,4.48,0,9,0,13.42,0a3.37,3.37,0,0,1,2.64.86,2.91,2.91,0,0,1,.63,3.88,8.31,8.31,0,0,1-1.65,2c-5,5-9.85,10-14.93,14.89-14,13.42-27.51,27.39-41.35,41a13.22,13.22,0,0,1-1.39,1.31,2.84,2.84,0,0,1-3.56.19,3.08,3.08,0,0,1-1.38-3.5c.21-.85.51-1.68.79-2.51q5.56-16.18,11.12-32.36A8.53,8.53,0,0,0,464.54,292.16Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M174.39,165.57h-14a15.55,15.55,0,0,1-2.16,0,3.13,3.13,0,0,1-2.14-5.08,20.42,20.42,0,0,1,1.86-2.2c4.35-4.56,8.73-9.11,13.09-13.67q11.76-12.28,23.52-24.59c5.46-5.72,10.88-11.47,16.32-17.21a3.79,3.79,0,0,1,2.82-1.58A3,3,0,0,1,217,104.4a13,13,0,0,1-.76,3.49q-4.68,16.58-9.41,33.14c-.55,1.92-.54,1.95,1.54,2h13.91a5.1,5.1,0,0,1,2.13.21,3.31,3.31,0,0,1,1.34,5,13.69,13.69,0,0,1-1.48,1.57c-14.19,14.17-28.33,28.41-42.62,42.49-4.67,4.59-9.32,9.21-14,13.79a5.86,5.86,0,0,1-1.69,1.31,3,3,0,0,1-4.24-2.41,8.33,8.33,0,0,1,.72-3.72q5.56-16.19,11.13-32.38A9.32,9.32,0,0,0,174.39,165.57Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M562.74,75.91H549.41c-.95,0-1.91,0-2.87,0a2.77,2.77,0,0,1-2.81-1.85,3.15,3.15,0,0,1,.46-3.39c1.23-1.37,2.45-2.74,3.72-4.06,5-5.2,10-10.37,14.93-15.57Q573.44,40,584,28.85,591.53,21,599,13a3.71,3.71,0,0,1,3.1-1.49A3,3,0,0,1,605,14.39a7,7,0,0,1-.37,2.35q-4.44,15.65-8.84,31.31a25,25,0,0,0-1.27,5,4.63,4.63,0,0,0,2.44.28c4.39,0,8.79,0,13.18,0a5.12,5.12,0,0,1,2.35.34,3.16,3.16,0,0,1,1.33,4.81,10.11,10.11,0,0,1-1.14,1.22L556,116.29a10.17,10.17,0,0,1-1.45,1.25,3.07,3.07,0,0,1-3.39,0,2.85,2.85,0,0,1-1.48-2.8,8,8,0,0,1,.47-2.33Q556.12,95.38,562,78.29C562.21,77.62,562.41,77,562.74,75.91Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M296.06,297.51H282.29c-.8,0-1.6,0-2.4,0a2.89,2.89,0,0,1-2.83-1.85,3.15,3.15,0,0,1,.58-3.56c1.37-1.46,2.73-2.92,4.11-4.37l49.74-52.23c.5-.52,1-1.07,1.51-1.54a3.51,3.51,0,0,1,3.79-.57,3.17,3.17,0,0,1,1.59,3.45,13.61,13.61,0,0,1-.45,1.86l-9.84,34.77a2,2,0,0,0-.18,1.22,3.36,3.36,0,0,0,2,.22c4.4,0,8.79,0,13.19,0a13.27,13.27,0,0,1,1.67,0,3.22,3.22,0,0,1,2.26,5.33,12,12,0,0,1-1.16,1.21q-28,27.93-56,55.85a16.71,16.71,0,0,1-1.75,1.62,3.17,3.17,0,0,1-5.11-2.81,9.29,9.29,0,0,1,.69-2.54q5.79-16.86,11.6-33.72C295.53,299.2,295.74,298.53,296.06,297.51Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M122.88,280.61H137.5a19.43,19.43,0,0,1,2.16,0,3.12,3.12,0,0,1,2.38,5,9,9,0,0,1-1.26,1.43L84.47,343.24A11.51,11.51,0,0,1,83,344.49a3,3,0,0,1-3.76.2A3.11,3.11,0,0,1,78,340.9c.83-2.66,1.8-5.28,2.7-7.92q4.89-14.26,9.76-28.52a1.16,1.16,0,0,0,.09-1c-.48-.47-1.14-.26-1.74-.26-4.16,0-8.31,0-12.46,0H74.9a3.11,3.11,0,0,1-3-1.93,3.17,3.17,0,0,1,.67-3.55c1.38-1.56,2.77-3.09,4.21-4.59,5.52-5.76,11.08-11.5,16.6-17.26q9.76-10.22,19.49-20.47c4.62-4.86,9.2-9.75,13.81-14.62a14.43,14.43,0,0,1,1.36-1.35,3.37,3.37,0,0,1,4-.19,3.23,3.23,0,0,1,1.19,3.59c-1.46,5.22-2.95,10.43-4.43,15.64q-2.94,10.35-5.87,20.7A1.69,1.69,0,0,0,122.88,280.61Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M218.15,427.9c-5.3,0-10.25,0-15.2,0a4.77,4.77,0,0,1-2.12-.22,3.23,3.23,0,0,1-1.52-4.41,8,8,0,0,1,1.59-2.08c5.38-5.57,10.82-11.08,16.12-16.73,6.34-6.75,12.76-13.42,19.14-20.12,6.11-6.42,12.11-12.93,18.34-19.23a3.79,3.79,0,0,1,2.58-1.55c2.3-.1,3.77,1.17,3.46,3.45a36.94,36.94,0,0,1-1.36,5.31c-2.85,10-5.73,20.06-8.57,30.1-.82,2.91-.77,2.93,2.34,2.93h13.18a4,4,0,0,1,2.1.3,3.2,3.2,0,0,1,1.26,4.49A7.46,7.46,0,0,1,268,412c-6.34,6.32-12.55,12.77-19,18.94-12.61,12-24.69,24.57-37.1,36.77a14.1,14.1,0,0,1-2,1.76,2.77,2.77,0,0,1-3.55-.15,2.92,2.92,0,0,1-1.11-3.35q2.46-7.5,5-15c1.57-4.61,3.17-9.2,4.76-13.79.84-2.41,1.7-4.81,2.53-7.23C217.77,429.4,217.91,428.79,218.15,427.9Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M547.49,310.35h-5.75a13.84,13.84,0,0,1-1.44,0,3.53,3.53,0,0,1-3.13-2.24,3,3,0,0,1,.9-3.47c1.53-1.63,3-3.28,4.56-4.91,4.24-4.56,8.61-9,12.91-13.51q11.6-12.1,23.18-24.23c4.46-4.69,8.87-9.42,13.3-14.12.33-.35.65-.71,1-1,1.37-1.23,2.7-1.48,3.91-.77a3.29,3.29,0,0,1,1.63,4.09c-.71,2.62-1.51,5.21-2.24,7.81q-3.92,13.82-7.78,27.62c-.6,2.12-.54,2.18,1.61,2.19,4.87,0,9.75,0,14.62,0a3,3,0,0,1,3,4.25,4.75,4.75,0,0,1-1.46,1.86q-6.69,6.7-13.4,13.38L550.2,350a7.94,7.94,0,0,1-2,1.73,3.55,3.55,0,0,1-3.85-.09,3.07,3.07,0,0,1-.93-3.65c1.46-4.39,3-8.76,4.45-13.14q3.89-11.32,7.76-22.64c.57-1.68.47-1.8-1.22-1.83C552.13,310.32,549.81,310.35,547.49,310.35Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M469.49,403.21a7.65,7.65,0,0,0-2.8-.21c-4.4,0-8.79,0-13.19,0a2.75,2.75,0,0,1-2.8-1.84,3.15,3.15,0,0,1,.47-3.38l.33-.35c2.63-2.78,5.24-5.58,7.89-8.35,5-5.24,10.15-10.4,15.11-15.7,6.22-6.65,12.59-13.15,18.78-19.81,3.69-4,7.73-7.62,11.14-11.85a15.85,15.85,0,0,1,2.21-2.2,3.28,3.28,0,0,1,3.79-.52,2.93,2.93,0,0,1,1.54,3.24,60.51,60.51,0,0,1-1.95,7.63c-2.75,9.81-5.55,19.61-8.33,29.42-.06.22-.08.46-.13.72.57.66,1.34.41,2,.41,4.48,0,8.95,0,13.43,0a5.67,5.67,0,0,1,2.12.22,3.19,3.19,0,0,1,1.51,5.21c-.35.43-.78.8-1.17,1.2l-56,55.9a8.23,8.23,0,0,1-2.17,1.85,3.05,3.05,0,0,1-4.58-2.94,8.73,8.73,0,0,1,.69-2.78q5.71-16.74,11.48-33.48A7.42,7.42,0,0,0,469.49,403.21Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M571.82,191.2a4.33,4.33,0,0,0-2.33-.22c-4,0-8,0-12,0a11.14,11.14,0,0,1-1.92-.07,3.22,3.22,0,0,1-2.11-5.14,9.66,9.66,0,0,1,1-1.07Q575.1,163,595.76,141.3c4.08-4.28,8.14-8.58,12.22-12.85a9.89,9.89,0,0,1,1.78-1.59,2.87,2.87,0,0,1,3.18,0,3,3,0,0,1,1.6,3,13.53,13.53,0,0,1-.53,2.33q-4.71,16.57-9.45,33.14c-.13.46-.27.92-.38,1.39-.36,1.53-.3,1.66,1.28,1.67q7,0,13.91,0c1.74,0,3.46,0,4.23,1.93s-.32,3.27-1.65,4.59Q593.65,203,565.41,231.23c-.29.28-.55.58-.86.84a3.14,3.14,0,0,1-4,.49,3.19,3.19,0,0,1-1.33-3.95c1.07-3.26,2.21-6.5,3.32-9.74q4.39-12.8,8.79-25.59A3.4,3.4,0,0,0,571.82,191.2Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M233.74,248h14.71c.8,0,1.6-.05,2.4,0a3.15,3.15,0,0,1,2.33,5.12,13.6,13.6,0,0,1-1.47,1.57l-55.83,55.7a7.91,7.91,0,0,1-2.42,1.92,3,3,0,0,1-4.39-2.51,6.45,6.45,0,0,1,.51-2.8q6-17.19,11.86-34.4a2.79,2.79,0,0,0,.35-1.84,5.21,5.21,0,0,0-2.35-.19q-6.36,0-12.71,0c-1.53,0-2.9-.28-3.58-1.83s-.23-2.87,1-4.11c6.31-6.56,12.57-13.17,18.85-19.77L232.38,214c2.09-2.2,4.18-4.4,6.24-6.63a3.41,3.41,0,0,1,3-1.18,2.76,2.76,0,0,1,2.77,2.74,7.44,7.44,0,0,1-.33,2.6q-4.75,16.68-9.49,33.37C234.3,245.83,234.08,246.75,233.74,248Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M66.38,426c-2.08,0-4.16-.05-6.24,0-1.72.05-3.19-.27-4-2s.22-3.05,1.36-4.24c4.41-4.63,8.84-9.25,13.24-13.88l39.36-41.32,1.33-1.38c1.61-1.63,3.23-2.06,4.66-1.22s1.8,2.17,1.17,4.45c-.78,2.84-1.59,5.68-2.4,8.52q-3.72,13.14-7.43,26.26c-.09.31-.21.61-.29.92-.27.92.07,1.35,1,1.3.56,0,1.12,0,1.68,0,4.4,0,8.8,0,13.19,0,1.57,0,2.93.34,3.56,1.88a3.57,3.57,0,0,1-1,4.14q-5.06,4.95-10.07,9.93l-46.52,46.4a19.93,19.93,0,0,1-1.55,1.5,3.06,3.06,0,0,1-4,.28,3.17,3.17,0,0,1-1.19-3.79q2.5-7.5,5.1-15c2.29-6.64,4.61-13.27,6.91-19.91.1-.3.19-.61.28-.92.57-1.86.55-1.91-1.31-1.93C71,426,68.7,426,66.38,426Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M316.12,22.45c-1,3.65-2,7.23-3,10.8-1.59,5.59-3.2,11.18-4.78,16.77-.92,3.29.45,5.15,3.87,5.19,3.9,0,7.81,0,11.78,0-1,1.89-37.68,38.49-41.5,41.46-.54-.53-.06-1,.1-1.48q4.32-12.56,8.65-25.1c.3-.88.78-1.76.37-2.78a3.8,3.8,0,0,0-3.64-2.54c-4,.15-8,0-12,0-.29-.81.36-1.07.71-1.44,4.41-4.61,8.9-9.16,13.26-13.83,6.32-6.77,12.73-13.44,19.13-20.13,1.87-2,3.67-4,5.58-5.93A2.62,2.62,0,0,1,316.12,22.45Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M444.63,190.78l-41.74,41.38c-.51-.69-.15-1.16,0-1.64l8.49-24.65c.15-.46.32-.91.45-1.37a3.25,3.25,0,0,0-3.2-4.4c-3.35-.06-6.71,0-10.06,0a6.11,6.11,0,0,1-2.62-.26l40.14-42.17.35.16c-.65,2.38-1.29,4.76-2,7.12q-2.87,10.13-5.77,20.24c-.06.23-.15.46-.2.69-.58,2.84.68,4.5,3.62,4.57,3.27.08,6.54,0,9.82,0A5.16,5.16,0,0,1,444.63,190.78Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M435.13,110.86l9.06-26.22c.1-.3.19-.61.28-.91.76-2.66-.48-4.47-3.22-4.52-3.35-.07-6.71,0-10.06,0h-2.11c-.36-.53,0-.78.28-1q19.23-20.2,38.48-40.4a3.65,3.65,0,0,1,.37-.29c.48-.1.71,0,.57.56q-3.21,11.51-6.44,23c-.36,1.3-.81,2.59-1.13,3.9-.68,2.82.61,4.52,3.55,4.58,3.67.07,7.34,0,11,0,.39,0,.78,0,1.21.07,0,.93-.71,1.25-1.18,1.71Q456,91.06,436.12,110.8c-.17.16-.32.35-.48.53C435.2,111.47,435,111.35,435.13,110.86Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M468.78,38l-.57-.56c.21-.34.4-1,.87-.59S469.1,37.67,468.78,38Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M435.13,110.86l.51.47c-.11.37-.41.83-.72.61C434.44,111.62,434.76,111.17,435.13,110.86Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M80.77,175.23q-2.52,9.11-5.06,18.2c-.72,2.62-1.52,5.21-2.21,7.83-.77,3,.51,4.61,3.6,4.64,4,0,8,0,11.89,0a2.61,2.61,0,0,1,.17.33.28.28,0,0,1,0,.22,3,3,0,0,1-.41.57L47.48,248.16a2.53,2.53,0,0,1,.27-1.92Q51.94,234,56.17,221.8c.18-.52.38-1.05.53-1.59.73-2.63-.5-4.49-3.23-4.62s-5.6,0-8.39,0h-3.7c-.22-.7.18-.93.44-1.2q18.82-19.8,37.66-39.58a7.24,7.24,0,0,1,.73-.62C81.14,174.12,81,174.67,80.77,175.23Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M80.77,175.23c-.1-.4-.11-.86-.56-1.07A1.74,1.74,0,0,1,81.5,173,4.19,4.19,0,0,1,80.77,175.23Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M357.17,145.88c-13.85,13.74-27.5,27.68-41.73,41.09a40.09,40.09,0,0,1,2.16-7.32c2.25-6.56,4.54-13.11,6.77-19.68,1-2.94-.38-4.88-3.49-4.93-3.27-.06-6.55,0-9.82,0h-2.61l40.39-42.43.31.15c-.63,2.31-1.24,4.64-1.89,6.94q-2.86,10.13-5.76,20.24a9.87,9.87,0,0,0-.32,1.15c-.46,2.78.76,4.28,3.61,4.32,3.6.06,7.19,0,10.79,0H357Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M339.32,366.18l39.78-41.8c.21,2.42-.67,4.45-1.24,6.54C376,337.76,374,344.57,372,351.39c-.09.31-.14.63-.21.94-.66,2.8.61,4.49,3.51,4.54,3.2.06,6.39,0,9.59,0h2.34a2,2,0,0,1,.14.32.37.37,0,0,1,0,.21c-.31.37-.6.74-.93,1.08l-40.89,40.79a40.91,40.91,0,0,1,2-6.53c2.3-6.8,4.69-13.57,7-20.36.13-.37.29-.74.39-1.13.79-2.94-.48-4.69-3.52-4.73-3.27-.05-6.55,0-9.82,0A4.12,4.12,0,0,1,339.32,366.18Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M497,243.52c-1.92,6.73-3.78,13.23-5.64,19.73-.74,2.61-1.49,5.21-2.23,7.82-.09.3-.18.61-.24.92a3.29,3.29,0,0,0,3.33,4c4.14-.16,8.3,0,12.41,0a1.45,1.45,0,0,1,.13.29.33.33,0,0,1,0,.22L464.37,317c-.33.33-.59.78-1.27.81a10.63,10.63,0,0,1,1-3.59c2.63-7.7,5.32-15.37,8-23.05a9.25,9.25,0,0,0,.47-1.61,3.15,3.15,0,0,0-2.36-3.62,12.88,12.88,0,0,0-3.56-.39c-3.15,0-6.31,0-9.38,0a.85.85,0,0,1,.27-1.06c2.23-2.39,4.46-4.79,6.72-7.15,5.14-5.36,10.31-10.69,15.44-16.06,5.4-5.65,10.76-11.35,16.14-17A1.76,1.76,0,0,1,497,243.52Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M206.44,118.13c-1,4.59-2.5,9.06-3.75,13.59-1.2,4.38-2.48,8.74-3.69,13.12-.79,2.83.45,4.44,3.46,4.46,3.28,0,6.55,0,9.83,0a6.47,6.47,0,0,1,2.48.19c0,1-.85,1.44-1.42,2-6.18,6.14-12.3,12.33-18.57,18.37-6.73,6.48-13.26,13.18-19.87,19.78-.56.56-1.15,1.08-1.76,1.65-.44-.78.06-1.33.24-1.87,2.85-8.38,5.75-16.75,8.63-25.12a6.47,6.47,0,0,0,.38-1.62,2.86,2.86,0,0,0-3-3.42c-3.43-.07-6.87,0-10.31,0a4.18,4.18,0,0,1-2.23-.2c-.11-.72.34-1,.66-1.32q4.7-5,9.4-9.9c7.78-8.13,15.59-16.25,23.33-24.42,1.87-2,3.61-4.05,5.65-5.85C206.34,117.46,206.58,117.6,206.44,118.13Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M206.44,118.13l-.58-.58c.18-.34.49-.84.8-.61S206.8,117.78,206.44,118.13Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M594.5,28.46q-2.61,9.45-5.24,18.89c-.71,2.53-1.43,5.06-2.14,7.6-.85,3,.4,4.81,3.55,5,1.83.11,3.68,0,5.51,0,2,0,4,0,6,0a1.41,1.41,0,0,1,.43.13c-.8,1.48-39.49,40.26-42,41.94,1.24-3.61,2.36-6.91,3.49-10.2l5.92-17.19a6.86,6.86,0,0,0,.34-1.15c.38-2.38-.83-3.87-3.26-3.92-3.28-.06-6.56,0-9.83,0H555c-.42-1,.32-1.28.71-1.7q3.84-4.11,7.73-8.18C569,54,574.53,48.21,580,42.43c4-4.16,7.87-8.37,11.82-12.55.65-.7,1.37-1.33,2.06-2C594.4,27.79,594.63,27.94,594.5,28.46Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M594.5,28.46l-.58-.58c.17-.34.48-.84.79-.61S594.85,28.1,594.5,28.46Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M327.76,250.48q-3.21,11.49-6.44,23c-.28,1-.57,2-.84,3-.87,3.23.35,4.88,3.73,4.93,3.19.06,6.38,0,9.57,0a5.83,5.83,0,0,1,2.25.16c.09.62-.31.83-.57,1.09q-20.16,20.1-40.35,40.18c-.48.11-.7-.05-.58-.56q4.23-12.44,8.48-24.87c.21-.61.47-1.19.63-1.81.7-2.68-.56-4.42-3.32-4.47-3.35-.05-6.7,0-10.05,0h-2c-.33-.66.07-.91.32-1.17l38.28-40.2a2.63,2.63,0,0,1,.37-.29C328.14,249.43,328,249.92,327.76,250.48Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M327.76,250.48c-.09-.38-.1-.81-.52-1,.14-.36.35-.79.74-.69s.27.6.19.92A3.24,3.24,0,0,1,327.76,250.48Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M294.53,322.29l.58.56c-.22.33-.37,1-.88.56C293.88,323.12,294.16,322.6,294.53,322.29Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M130.62,287.05,89.18,328.72a5.32,5.32,0,0,1,.51-1.86c2.83-8.3,5.55-16.65,8.55-24.89,1.18-3.24-.45-5.31-3.77-5.38-3-.06-6.07,0-9.11,0a5.07,5.07,0,0,1-2.29-.18c0-.73.52-1,.88-1.38,2.8-3,5.65-5.86,8.43-8.84,5.39-5.78,11-11.4,16.41-17.12,3.85-4,7.64-8.15,11.46-12.22.76-.8,1.54-1.57,2.56-2.59.18,2.11-.65,3.61-1.07,5.16-2.11,7.69-4.33,15.34-6.51,23-.77,2.71.58,4.5,3.44,4.53,3.28,0,6.55,0,9.83,0A5.18,5.18,0,0,1,130.62,287.05Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M258.1,411.63l-41.56,41.72a11.14,11.14,0,0,1,1-3.49c2.64-7.69,5.33-15.36,8-23a9.52,9.52,0,0,0,.38-1.14c.53-2.28-.72-4-3.06-4.05-3.35-.05-6.71,0-10.06,0a4.15,4.15,0,0,1-2.27-.21c-.26-.55.09-.82.34-1.09q4-4.28,8.06-8.53c4.69-4.9,9.42-9.76,14.1-14.67,5.29-5.54,10.53-11.12,15.8-16.68a3.24,3.24,0,0,1,1.68-1.22l-3.77,13.21q-2.07,7.23-4.14,14.47c-.37,1.33-.53,2.65.54,3.82a3.39,3.39,0,0,0,2.84.93Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M596.27,294.19,554.53,336a5.3,5.3,0,0,1,.66-2.52c2.8-8.15,5.64-16.28,8.45-24.42,1.16-3.37-.2-5.28-3.74-5.31-3.83,0-7.67,0-11.48,0-.24-.81.38-1.08.73-1.45q8-8.29,15.94-16.57,9.69-10.12,19.32-20.3a34.17,34.17,0,0,1,4.28-4.38c-1,3.44-1.8,6.49-2.67,9.54-1.72,6.05-3.47,12.1-5.19,18.15a8.58,8.58,0,0,0-.32,1.4c-.25,2.56.94,3.93,3.55,4,3.43.05,6.87,0,10.31,0A4.52,4.52,0,0,1,596.27,294.19Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M502,354.28l-2.74,9.84c-1.7,6.06-3.44,12.11-5.1,18.18-.82,3,.58,4.75,3.72,4.79,3.6,0,7.19,0,10.79,0,.31,0,.62,0,1,.07-.74,1.5-39.3,40.23-41.61,41.8-.34-.77.2-1.4.41-2,2.79-8.15,5.58-16.29,8.48-24.4,1.57-4.4-.38-6.06-4.18-5.85-3.56.19-7.14,0-10.95,0A8.21,8.21,0,0,1,463.6,394c5.5-5.68,11-11.32,16.46-17.07,6.46-6.85,12.88-13.75,19.52-20.43C500.27,355.82,500.56,354.7,502,354.28Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M604.12,143.06q-3.71,13.14-7.4,26.28a10.09,10.09,0,0,0-.4,1.62c-.27,2.29.9,3.71,3.22,3.75,3.84.07,7.68,0,11.51,0h1.06c.32.52,0,.74-.19.95L571,216.46a.41.41,0,0,1-.62-.06q4.49-13.12,9-26.24c.18-.53.4-1,.53-1.59a3.1,3.1,0,0,0-2.45-4,11.13,11.13,0,0,0-2.38-.16c-3.51,0-7,0-10.46,0-.42-.84.22-1.13.56-1.49q6-6.36,12-12.68,13.2-13.87,26.42-27.72C604,142.42,604.22,142.57,604.12,143.06Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M604.12,143.06l-.57-.51c.12-.38.44-.85.75-.64C604.76,142.22,604.48,142.72,604.12,143.06Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M570.35,216.4l.62.06c-.14.37-.4.77-.77.61S570.05,216.57,570.35,216.4Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M233.75,223.62q-2.13,7.59-4.24,15.19c-1,3.69-2.09,7.37-3.07,11.07-.76,2.88.44,4.43,3.45,4.47,3.28.05,6.55,0,9.83,0h2.2c.17.28.24.34.25.42a.27.27,0,0,1,0,.22q-18.27,18.33-36.55,36.63a41.72,41.72,0,0,1-5.34,4.56c.51-1.56,1-3.12,1.53-4.66,2.49-7.24,5-14.48,7.51-21.72a9.8,9.8,0,0,0,.47-1.6c.4-2.39-.8-3.89-3.23-3.93-3.35-.06-6.71,0-10.06,0-.77,0-1.53-.07-2.41-.11.25-1.15,1.05-1.62,1.63-2.23q11.81-12.41,23.66-24.78c3.85-4,7.66-8.14,11.5-12.2.76-.81,1.59-1.56,2.39-2.33C234.12,222.57,234,223.06,233.75,223.62Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M233.75,223.62c-.06-.4-.1-.81-.53-1,.18-.35.38-.8.83-.64.27.09.21.55.12.84A5.19,5.19,0,0,1,233.75,223.62Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M73.91,450.32c1.62-5.6,3.77-11,5.58-16.55,1-3.11,2.16-6.18,3.18-9.29s-.2-4.81-3.45-4.84-6.71,0-10.07,0H67.22c1-1.76,37.32-40.11,40.32-42.57-.75,2.7-1.4,5.1-2.08,7.49q-2.83,10-5.68,20a9.66,9.66,0,0,0-.36,1.38c-.3,2.3.86,3.74,3.19,3.78,3.43.07,6.87,0,10.3,0h2.28c.31.64-.1.87-.36,1.13L74.94,450.69a2.66,2.66,0,0,1-.38.28C74,451.05,73.76,450.91,73.91,450.32Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
				<path
					d="M73.91,450.32l.65.65c-.19.34-.52.88-.8.69C73.15,451.26,73.57,450.74,73.91,450.32Z"
					transform="translate(-27.04 -4.48)"
					stroke-miterlimit="10"
					stroke="url(#pulse-1)"
					strokeWidth="1"
					strokeDasharray="4 2 1"
				/>
			</motion.svg>
		</Box>
	);
};
