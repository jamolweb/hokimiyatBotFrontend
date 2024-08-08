import { MockDataType } from '@/app/data/mockData'
import { useState } from 'react'

type ReplyModalProps = {
	item: MockDataType | null
	onClose: () => void
}

const ReplyModal: React.FC<ReplyModalProps> = ({ item, onClose }) => {
	const [reply, setReply] = useState<string>('')

	if (!item) return null

	const handleReply = () => {
		if (reply.trim() === '') {
			console.log('Reply is empty')
			return
		}
		console.log('Reply to:', item, 'Message:', reply)
		onClose()
	}

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='bg-white p-4 rounded shadow-md relative'>
				<button
					className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
					onClick={onClose}
				>
					&times;
				</button>
				<p className='mb-4'>Javob bering:</p>
				<input
					type='text'
					value={reply}
					onChange={e => setReply(e.target.value)}
					className='w-full p-2 border rounded mb-4'
				/>
				<div className='flex gap-2'>
					<button
						className='bg-slate-500 text-white px-4 py-2 rounded'
						onClick={() => onClose()}
					>
						Cencel
					</button>
					<button
						className='bg-blue-500 text-white px-4 py-2 rounded'
						onClick={handleReply}
					>
						Reply
					</button>
				</div>
			</div>
		</div>
	)
}

export default ReplyModal
