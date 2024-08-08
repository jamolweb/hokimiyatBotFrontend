'use client'

import mockData, { MockDataType } from '@/app/data/mockData'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CiLogout } from 'react-icons/ci'
import { FaUserCircle } from 'react-icons/fa'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isAuthenticatedState } from '../../../lib/auth'
import DeleteModal from './components/DeleteModal'
import DetailModal from './components/DetailModal'
import ReplyModal from './components/ReplyModal'

const AdminPage = () => {
	const router = useRouter()
	const isAuthenticated = useRecoilValue(isAuthenticatedState)
	const setIsAuthenticated = useSetRecoilState(isAuthenticatedState)
	const [selectedItem, setSelectedItem] = useState<MockDataType | null>(null)
	const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false)
	const [replyModalVisible, setReplyModalVisible] = useState<boolean>(false)
	const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false)
	const [menuVisible, setMenuVisible] = useState<boolean>(false) // Manage menu visibility

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/login')
		}
	}, [isAuthenticated, router])

	const handleLogout = () => {
		setIsAuthenticated(false)
		router.push('/login')
	}

	const handleDelete = (item: MockDataType) => {
		setSelectedItem(item)
		setDeleteModalVisible(true)
	}

	const handleReply = (item: MockDataType) => {
		setSelectedItem(item)
		setReplyModalVisible(true)
	}

	const handleRowClick = (item: MockDataType) => {
		setSelectedItem(item)
		setDetailModalVisible(true)
	}

	return (
		<div className='p-4'>
			<div className='flex items-center justify-between mb-4'>
				<div className='flex-1'></div>

				<div className='relative'>
					<FaUserCircle
						className='text-3xl cursor-pointer'
						onClick={() => setMenuVisible(!menuVisible)}
					/>
					{menuVisible && (
						<div className='absolute right-0 top-full mt-2 bg-white shadow-lg rounded border'>
							<button
								className='px-4 flex items-center justify-center gap-5 hover:bg-red-100 py-2 hover:text-red-400 text-gray-800'
								onClick={handleLogout}
							>
								<CiLogout />
								<span>Logout</span>
							</button>
						</div>
					)}
				</div>
			</div>
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-white'>
					<thead>
						<tr>
							<th className='py-2 px-4 border'>Ismi</th>
							<th className='py-2 px-4 border'>Familiyasi</th>
							<th className='py-2 px-4 border'>Raqami</th>
							<th className='py-2 px-4 border'>Hat turi</th>
							<th className='py-2 px-4 border'>Harakatlar</th>
						</tr>
					</thead>
					<tbody>
						{mockData.map((item, index) => (
							<tr
								key={index}
								className='cursor-pointer'
								onClick={() => handleRowClick(item)}
							>
								<td className='py-2 px-4 border'>{item.firstName}</td>
								<td className='py-2 px-4 border'>{item.lastName}</td>
								<td className='py-2 px-4 border'>{item.phoneNumber}</td>
								<td className='py-2 px-4 border'>{item.category}</td>
								<td className='py-2 px-4 border'>
									<button
										className='bg-blue-500 text-white px-2 py-1 rounded mr-2 w-full sm:w-auto'
										onClick={e => {
											e.stopPropagation()
											handleReply(item)
										}}
									>
										Reply
									</button>
									<button
										className='bg-red-500 text-white px-2 py-1 rounded mt-1 w-full sm:w-auto sm:mt-0'
										onClick={e => {
											e.stopPropagation()
											handleDelete(item)
										}}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{deleteModalVisible && (
					<DeleteModal
						item={selectedItem}
						onClose={() => setDeleteModalVisible(false)}
					/>
				)}
				{replyModalVisible && (
					<ReplyModal
						item={selectedItem}
						onClose={() => setReplyModalVisible(false)}
					/>
				)}
				{detailModalVisible && (
					<DetailModal
						item={selectedItem}
						onClose={() => setDetailModalVisible(false)}
					/>
				)}
			</div>
		</div>
	)
}

export default AdminPage
