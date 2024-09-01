import $api from '@/api/axios'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as XLSX from 'xlsx'
import DeleteModal from './DeleteModal'
import Header from './Header'
import LogoutModal from './LogoutModal'
import RequestModal from './RequestModal'
import RequestTable from './RequestTable'
import Sidebar from './Sidebar'

export default function Admin({ setIsLoggedIn }: { setIsLoggedIn: any }) {
	const [requests, setRequests] = useState<any[]>([])
	const [doneRequests, setDoneRequests] = useState<any[]>([])
	const [selectedRequest, setSelectedRequest] = useState<any>(null)
	const [showModal, setShowModal] = useState(false)
	const [showLogoutModal, setShowLogoutModal] = useState(false)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
		null
	)
	const [activeTab, setActiveTab] = useState('requests')
	const [searchText, setSearchText] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)

	const fetchRequests = async () => {
		try {
			const response = await $api.get('/requests', {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			setRequests(response.data)
		} catch (error) {
			console.error('Error fetching requests:', error)
		}
	}

	const fetchDoneRequests = async () => {
		try {
			const response = await $api.get(`/done-requests?page=${currentPage}`, {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			setDoneRequests(response.data.data)
			setTotalPages(response.data.total)
			setCurrentPage(response.data.page)
		} catch (error) {
			console.error('Error fetching done requests:', error)
		}
	}

	const searchRequests = async () => {
		const searchUrl =
			activeTab === 'requests'
				? `/requests/search?search=${encodeURIComponent(searchText)}`
				: `/done-requests/search?search=${encodeURIComponent(searchText)}`
		try {
			const response = await $api.get(searchUrl, {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			if (!response.data.length) {
				toast.error("Ma'lumot topilmadi")
			} else {
				if (activeTab === 'requests') {
					setRequests(response.data)
				} else {
					setDoneRequests(response.data)
				}
			}
		} catch (error) {
			console.error('Error searching requests:', error)
		}
	}

	const handleDeleteRequest = async () => {
		if (selectedRequestId) {
			try {
				await $api.delete(`/requests/${selectedRequestId}`, {
					headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
				})
				toast.success("So'rov o'chirildi")
				setShowDeleteModal(false)
				fetchRequests()
			} catch (error: any) {
				console.log(error.response?.data)
				toast.error('Xatolik yuz berdi')
			}
		}
	}

	const handleLogout = () => {
		localStorage.removeItem('token')
		setIsLoggedIn(false)
	}

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	useEffect(() => {
		fetchRequests()
		fetchDoneRequests()
	}, [currentPage, activeTab])

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

	const downloadExcel = () => {
		const data = activeTab === 'requests' ? requests : doneRequests
		const ws = XLSX.utils.json_to_sheet(data)
		const wb = XLSX.utils.book_new()
		XLSX.utils.book_append_sheet(wb, ws, "So'rovlar")
		XLSX.writeFile(
			wb,
			`${activeTab === 'requests' ? "So'rovlar" : "bajarilgan_so'rovlar"}.xlsx`
		)
	}

	return (
		<div className='min-h-screen flex bg-gray-100'>
			<Sidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				onLogout={() => setShowLogoutModal(true)}
			/>
			<div className='flex-1 p-4 md:p-8 overflow-x-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center mb-6'>
					<div className='flex items-center space-x-3'>
						{!isSidebarOpen && (
							<button
								className='text-gray-700 flex md:hidden hover:bg-gray-200 p-2 rounded focus:outline-none'
								onClick={toggleSidebar}
							>
								<FaBars fontSize={20} />
							</button>
						)}
						<h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
							{activeTab === 'requests' ? "So'rovlar" : "Yakunlangan So'rovlar"}
						</h2>
					</div>

					<Header
						searchText={searchText}
						searchRequests={searchRequests}
						downloadExcel={downloadExcel}
						setShowLogoutModal={setShowLogoutModal}
						setSearchText={setSearchText}
					/>
				</div>

				{!isSidebarOpen && (
					<RequestTable
						handlePageChange={handlePageChange}
						currentPage={currentPage}
						totalPages={totalPages}
						requests={requests}
						doneRequests={doneRequests}
						handleDeleteRequest={(id: string) => {
							setSelectedRequestId(id)
							setShowDeleteModal(true)
						}}
						onViewRequest={(request: any) => {
							setSelectedRequest(request)
							setShowModal(true)
						}}
						activeTab={activeTab}
					/>
				)}
			</div>

			<RequestModal
				isOpen={showModal}
				request={selectedRequest}
				setIsOpen={setShowModal}
			/>

			<LogoutModal
				handleLogout={handleLogout}
				isOpen={showLogoutModal}
				setIsOpen={setShowLogoutModal}
			/>

			<DeleteModal
				handleDeleteRequest={handleDeleteRequest}
				isOpen={showDeleteModal}
				setIsOpen={setShowDeleteModal}
			/>

			<ToastContainer />
		</div>
	)
}
