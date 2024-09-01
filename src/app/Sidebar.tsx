// Sidebar.tsx
import React from 'react'
import { FaBars, FaCheckCircle, FaInbox } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'

type SidebarProps = {
	activeTab: string
	setActiveTab: (tab: string) => void
	onLogout: () => void
	isSidebarOpen: boolean
	setIsSidebarOpen: any
}

const Sidebar: React.FC<SidebarProps> = ({
	activeTab,
	setActiveTab,
	onLogout,
	isSidebarOpen,
	setIsSidebarOpen,
}: SidebarProps) => {
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<>
			<div
				className={`fixed inset-0 bg-gray-800 text-white md:w-1/5 md:static md:min-h-screen transition-transform transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} md:translate-x-0`}
			>
				<div className='flex flex-col p-6 h-full'>
					<div className='flex justify-between mb-8 items-center'>
						<h1 className='text-2xl font-bold'>Admin Dashboard</h1>
						<button
							className='text-black md:hidden mr-3'
							onClick={toggleSidebar}
						>
							<FaBars fontSize={24} color='white' />
						</button>
					</div>
					<nav className='space-y-4 flex flex-col'>
						<button
							onClick={() => {
								setActiveTab('requests')
								setIsSidebarOpen(false)
							}}
							className={`flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700 ${
								activeTab === 'requests' ? 'bg-gray-600' : ''
							}`}
						>
							<FaInbox />
							<span>So'rovlar</span>
						</button>
						<button
							onClick={() => {
								setActiveTab('doneRequests')
								setIsSidebarOpen(false)
							}}
							className={`flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700 ${
								activeTab === 'doneRequests' ? 'bg-gray-600' : ''
							}`}
						>
							<FaCheckCircle />
							<span>Yakunlangan So'rovlar</span>
						</button>
					</nav>
					<button
						onClick={onLogout}
						className='mt-auto py-3 px-4 bg-red-500 justify-center flex gap-3 items-center text-white rounded hover:bg-red-700'
					>
						<TbLogout2 fontSize={23} fontWeight={900} />
						<span className='text-xl'>Chiqish</span>
					</button>
				</div>
			</div>
		</>
	)
}

export default Sidebar
