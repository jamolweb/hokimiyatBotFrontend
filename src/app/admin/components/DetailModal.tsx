import { MockDataType } from '@/app/data/mockData'

type DetailModalProps = {
	item: MockDataType | null
	onClose: () => void
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
	if (!item) return null

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
			<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-lg'>
				<h2 className='text-2xl font-semibold mb-4'>Details</h2>
				<div className='gap-4'>
					{Object.entries(item).map(([key, value]) => (
						<div key={key} className='flex flex-col mt-2'>
							<label className='font-medium text-gray-700'>
								{formatLabel(key)}
							</label>
							{key !== 'text' ? (
								<input
									type='text'
									value={value}
									readOnly
									className='mt-1 p-2 border border-gray-300 rounded-md bg-gray-50'
								/>
							) : (
								<textarea
									value={value}
									readOnly
									className='mt-1 p-2 border border-gray-300 rounded-md bg-gray-50'
								/>
							)}
						</div>
					))}
				</div>
				<div className='mt-4 flex justify-end'>
					<button
						className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300'
						onClick={onClose}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}

const formatLabel = (key: string) => {
	return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

export default DetailModal
