import { FaFileDownload, FaSearch, FaUserCircle } from 'react-icons/fa'

export default function Header({
	searchText,
	searchRequests,
	downloadExcel,
	setShowLogoutModal,
	setSearchText,
}: any) {
	return (
		<div className='flex items-center space-x-4 mt-4 md:mt-0'>
			<input
				type='text'
				value={searchText}
				onChange={e => setSearchText(e.target.value)}
				placeholder='Search...'
				className='py-2 px-4 rounded border border-gray-300'
			/>
			<button
				onClick={searchRequests}
				className='flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all'
			>
				<FaSearch className='mr-2' />
				Search
			</button>
			<button
				className='flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all'
				onClick={downloadExcel}
			>
				<FaFileDownload className='mr-2' />
				Excel Faylini Yuklab Oling
			</button>
			<button
				className='text-gray-600 hover:text-gray-900 text-2xl md:text-3xl'
				onClick={() => setShowLogoutModal(true)}
			>
				<FaUserCircle />
			</button>
		</div>
	)
}
