import Modal from './Modal'

interface RequestModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	request: any
}

const RequestModal = ({ isOpen, setIsOpen, request }: RequestModalProps) => {
	if (!request) return null

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<h2 className='text-xl md:text-2xl font-bold mb-4'>
				So'rov Tafsilotlari
			</h2>
			<div className='space-y-2'>
				<p>
					<strong>So'rov raqami:</strong> {request.requestNumber}
				</p>
				<p>
					<strong>Ism:</strong> {request.firstName}
				</p>
				<p>
					<strong>Familiya:</strong> {request.lastName}
				</p>
				<p>
					<strong>Foydalanuvchi yozgan telefon raqam:</strong>{' '}
					{request.phoneNumber}
				</p>
				<p>
					<strong>Foydalanuvchini telegram raqami:</strong> +
					{request.phoneNumberFromTelegram}
				</p>
				<p>
					<strong>Mavzu:</strong> {request.summary}
				</p>
				<p>
					<strong>Qachon:</strong> {request.createdAt}
				</p>
			</div>
		</Modal>
	)
}

export default RequestModal
