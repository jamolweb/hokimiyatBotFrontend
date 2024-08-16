'use client'

interface ModalProps {
	isOpen: boolean
	setIsOpen: (open: boolean) => void
	children: React.ReactNode
}

export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='fixed inset-0 bg-gray-600 bg-opacity-75'></div>
			<div className='bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full'>
				<button
					className='absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl'
					onClick={() => setIsOpen(false)}
				>
					&times;
				</button>
				<div>{children}</div>
			</div>
		</div>
	)
}
