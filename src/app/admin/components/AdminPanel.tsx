'use client'

import { MockDataType } from '@/app/data/mockData'
import { useState } from 'react'
import DeleteModal from './DeleteModal'
import DetailModal from './DetailModal'
import ReplyModal from './ReplyModal'

type AdminPanelProps = {
	data: MockDataType[]
}

const AdminPanel: React.FC<AdminPanelProps> = ({ data }) => {
	const [selectedItem, setSelectedItem] = useState<MockDataType | null>(null)
	const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false)
	const [replyModalVisible, setReplyModalVisible] = useState<boolean>(false)
	const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false)

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
		<div className='overflow-x-auto'>
			<table className='min-w-full bg-white'>
				<thead>
					<tr>
						<th className='py-2 px-4 border'>First Name</th>
						<th className='py-2 px-4 border'>Last Name</th>
						<th className='py-2 px-4 border'>Phone Number</th>
						<th className='py-2 px-4 border'>Category</th>
						<th className='py-2 px-4 border'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
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
									className='bg-blue-500 text-white px-2 py-1 rounded mr-2'
									onClick={e => {
										e.stopPropagation()
										handleReply(item)
									}}
								>
									Reply
								</button>
								<button
									className='bg-red-500 text-white px-2 py-1 rounded'
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
	)
}

export default AdminPanel
