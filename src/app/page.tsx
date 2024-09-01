'use client'

import $api from '@/api/axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Admin from './admin'
import AdminLoginForm from './login'

export default function AdminPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [loading, setLoading] = useState(true)

	const refreshAccessToken = async () => {
		const token = localStorage.getItem('token')
		if (!token) {
			setIsLoggedIn(false)
			setLoading(false)
			return
		}

		try {
			const response = await $api.get('/auth/refresh', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const { id, username, fullName, image } = response.data
			if (id && username && fullName && image) {
				setIsLoggedIn(true)
			} else {
				setIsLoggedIn(false)
			}
		} catch (error) {
			setIsLoggedIn(false)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		refreshAccessToken()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>{isLoggedIn ? 'Admin Dashboard' : 'Admin Login'}</title>
				<meta
					name='description'
					content={
						isLoggedIn
							? 'qabulga yozilish, hokim qabulga yozilish, qabulga yozilish.uz'
							: 'qabulga yozilish, hokim qabulga yozilish, qabulga yozilish.uz'
					}
				/>
			</Head>
			{isLoggedIn ? (
				<Admin setIsLoggedIn={setIsLoggedIn} />
			) : (
				<AdminLoginForm setIsLoggedIn={setIsLoggedIn} />
			)}
		</div>
	)
}
