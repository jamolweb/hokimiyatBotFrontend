'use client'

import $api from '@/api/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSetRecoilState } from 'recoil'
import { isAuthenticatedState } from '../../../lib/auth'

const LoginPage = () => {
	const router = useRouter()
	const setIsAuthenticated = useSetRecoilState(isAuthenticatedState)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		$api
			.post('/auth/login', { username, password })
			.then(response => {
				setIsAuthenticated(true)
				toast.success('Login successful')
				router.push('/admin')
				localStorage.setItem('token', response.data.token)
			})
			.catch(err => {
				toast.error('Invalid credentials')
			})
	}

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<div className='bg-white p-6 rounded shadow-md w-80'>
				<h2 className='text-2xl mb-4 text-center'>Login</h2>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={e => setUsername(e.target.value)}
					className='w-full p-2 border rounded mb-4'
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					className='w-full p-2 border rounded mb-4'
				/>
				<button
					onClick={handleLogin}
					className='w-full bg-blue-500 text-white p-2 rounded'
				>
					Login
				</button>
			</div>
			<ToastContainer />
		</div>
	)
}

export default LoginPage
