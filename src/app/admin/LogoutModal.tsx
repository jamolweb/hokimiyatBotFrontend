import Modal from './Modal'

interface LogoutModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	handleLogout: () => void
}

const LogoutModal = ({ isOpen, setIsOpen, handleLogout }: LogoutModalProps) => {
	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<h2 className='text-lg md:text-xl font-bold mb-4'>
				Accountdan chiqmoqchimisiz?
			</h2>
			<div className='flex flex-col md:flex-row md:space-x-4'>
				<button
					className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-all mb-2 md:mb-0'
					onClick={() => {
						handleLogout()
						setIsOpen(false)
					}}
				>
					Chiqish
				</button>
				<button
					className='bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-all'
					onClick={() => setIsOpen(false)}
				>
					Bekor qilish
				</button>
			</div>
		</Modal>
	)
}

export default LogoutModal
