'use client'

import { MockDataType } from '@/app/data/mockData'

type DeleteModalProps = {
	item: MockDataType | null
	onClose: () => void
}

const DeleteModal: React.FC<DeleteModalProps> = ({ item, onClose }) => {
	if (!item) return null

	const handleDelete = () => {
		console.log('Deleted item:', item)
		onClose()
	}

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='bg-white p-4 rounded shadow-md'>
				<p className='mb-4'>O'chirilsinmi?</p>
				<button
					className='bg-red-500 text-white px-4 py-2 rounded mr-2'
					onClick={handleDelete}
				>
					Ha
				</button>
				<button
					className='bg-gray-500 text-white px-4 py-2 rounded'
					onClick={onClose}
				>
					Yoq
				</button>
			</div>
		</div>
	)
}

export default DeleteModal
