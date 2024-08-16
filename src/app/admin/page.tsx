'use client'

import $api from '@/api/axios'
import { useEffect, useState } from 'react'
import Admin from './admin'
import AdminLoginForm from './login'

export default function AdminPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const refreshAccessToken = async () => {
		const adminId = process.env.NEXT_PUBLIC_ADMIN_ID

		await $api
			.get('/auth/refresh', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.then(response => {
				const { id, username, fullName, image } = response.data
				if (id && username && fullName && image) {
					setIsLoggedIn(true)
				}
			})
			.catch(error => {
				setIsLoggedIn(false)
			})
	}

	useEffect(() => {
		refreshAccessToken()
	}, [])

	return (
		<div className='overflow-x-hidden'>
			{isLoggedIn ? (
				<Admin setIsLoggedIn={setIsLoggedIn} />
			) : (
				<AdminLoginForm setIsLoggedIn={setIsLoggedIn} />
			)}
		</div>
	)
}
