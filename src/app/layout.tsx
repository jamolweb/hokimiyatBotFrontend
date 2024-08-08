'use client'

import { RecoilRoot } from 'recoil'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<RecoilRoot>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</RecoilRoot>
	)
}
