import $api from './axios'

export const fetchData = async (endpoint: string) => {
	try {
		const response = await $api.get(endpoint, {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
		})
		return response.data
	} catch (error) {
		console.error(`Error fetching data from ${endpoint}:`, error)
		throw error
	}
}

export const deleteData = async (endpoint: string) => {
	try {
		await $api.delete(endpoint, {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
		})
	} catch (error) {
		console.error(`Error deleting data from ${endpoint}:`, error)
		throw error
	}
}
