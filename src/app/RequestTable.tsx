import React from 'react'

type RequestTableProps = any

const RequestTable: React.FC<RequestTableProps> = ({
	requests,
	handleDeleteRequest,
	onViewRequest,
	activeTab,
	currentPage,
	handlePageChange,
	totalPages,
	doneRequests,
}) => {
	return (
		<div className='relative shadow-md sm:rounded-lg w-full px-5'>
			<div className='min-w-full overflow-x-auto'>
				{activeTab === 'requests' ? (
					<table className='w-full min-w-[600px] text-sm text-left text-gray-500'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
							<tr>
								<th scope='col' className='px-6 py-3'>
									Navbat raqami
								</th>
								<th scope='col' className='px-6 py-3'>
									To'liq ismi
								</th>
								<th scope='col' className='px-6 py-3'>
									Telefon raqami
								</th>
								<th scope='col' className='px-6 py-3'>
									Mavzu
								</th>
								<th scope='col' className='px-6 py-3'>
									Vaqti
								</th>
								<th scope='col' className='px-6 py-3'>
									<span className='sr-only'>Actions</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{requests.map((request: any, index: any) => (
								<tr
									key={request.id}
									className='bg-white border-b hover:bg-gray-50'
								>
									<td className='px-6 py-4'>{index + 1}</td>
									<td className='px-6 py-4'>
										{request.firstName} {request.lastName}
									</td>
									<td className='px-6 py-4'>{request.phoneNumber}</td>
									<td className='px-6 py-4'>{request.summary}</td>
									<td className='px-6 py-4'>{request.createdAt}</td>
									<td className='px-6 py-4 text-right'>
										<button
											className='font-medium text-blue-600 hover:underline'
											onClick={() => onViewRequest(request)}
										>
											To'liq ko'rish
										</button>
										<button
											className='font-medium text-red-600 hover:underline ml-4'
											onClick={() => handleDeleteRequest(request.id)}
										>
											O'chirish
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<>
						<table className='w-full min-w-[600px] text-sm text-left text-gray-500'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
								<tr>
									<th scope='col' className='px-6 py-3'>
										Navbat raqami
									</th>
									<th scope='col' className='px-6 py-3'>
										To'liq ismi
									</th>
									<th scope='col' className='px-6 py-3'>
										Telefon raqami
									</th>
									<th scope='col' className='px-6 py-3'>
										Mavzu
									</th>
									<th scope='col' className='px-6 py-3'>
										Vaqti
									</th>
									<th scope='col' className='px-6 py-3'>
										<span className='sr-only'>Actions</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{doneRequests.map((request: any, index: any) => (
									<tr
										key={request.id}
										className='bg-white border-b hover:bg-gray-50'
									>
										<td className='px-6 py-4'>{index + 1}</td>
										<td className='px-6 py-4'>
											{request.firstName} {request.lastName}
										</td>
										<td className='px-6 py-4'>{request.phoneNumber}</td>
										<td className='px-6 py-4'>{request.summary}</td>
										<td className='px-6 py-4'>{request.createdAt}</td>
										<td className='px-6 py-4 text-right'>
											<button
												className='font-medium text-blue-600 hover:underline'
												onClick={() => onViewRequest(request)}
											>
												To'liq ko'rish
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className='flex justify-center mt-4 mb-4'>
							<button
								className='px-4 py-2 border rounded'
								disabled={currentPage <= 1}
								onClick={() => handlePageChange(currentPage - 1)}
							>
								Oldingi
							</button>
							<span className='px-4 py-2'>
								Hozirgi {totalPages} dan {currentPage}
							</span>
							<button
								className='px-4 py-2 border rounded'
								disabled={currentPage >= totalPages}
								onClick={() => handlePageChange(currentPage + 1)}
							>
								Keyingi
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RequestTable
