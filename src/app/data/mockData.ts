export type MockDataType = {
	chatId: number
	firstName: string
	lastName: string
	phoneNumber: string
	category: 'Taklif' | 'Ariza'
	text: string
	createdAt: string
}

const mockData: MockDataType[] = [
	{
		chatId: 123456789,
		firstName: 'John',
		lastName: 'Doe',
		phoneNumber: '1234567890',
		category: 'Taklif',
		text: 'This is a suggestion.',
		createdAt: '2023-08-01T12:34:56Z',
	},
	{
		chatId: 987654321,
		firstName: 'Jane',
		lastName: 'Smith',
		phoneNumber: '0987654321',
		category: 'Ariza',
		text: 'This is a request.',
		createdAt: '2023-08-02T12:34:56Z',
	},
	{
		chatId: 112233445,
		firstName: 'Emily',
		lastName: 'Johnson',
		phoneNumber: '1122334455',
		category: 'Taklif',
		text: 'I have a new idea to improve the service.',
		createdAt: '2023-08-03T14:22:30Z',
	},
	{
		chatId: 556677889,
		firstName: 'Michael',
		lastName: 'Brown',
		phoneNumber: '5566778899',
		category: 'Ariza',
		text: 'I would like to request a feature.',
		createdAt: '2023-08-04T15:45:10Z',
	},
	{
		chatId: 223344556,
		firstName: 'Sarah',
		lastName: 'Williams',
		phoneNumber: '2233445566',
		category: 'Taklif',
		text: 'Can we have more detailed analytics?',
		createdAt: '2023-08-05T09:30:20Z',
	},
	{
		chatId: 778899001,
		firstName: 'David',
		lastName: 'Jones',
		phoneNumber: '7788990011',
		category: 'Ariza',
		text: 'I need assistance with my account.',
		createdAt: '2023-08-06T11:25:45Z',
	},
	{
		chatId: 445566778,
		firstName: 'Olivia',
		lastName: 'Garcia',
		phoneNumber: '4455667788',
		category: 'Taklif',
		text: 'Could you consider adding more customization options?',
		createdAt: '2023-08-07T13:40:55Z',
	},
	{
		chatId: 998877665,
		firstName: 'James',
		lastName: 'Miller',
		phoneNumber: '9988776655',
		category: 'Ariza',
		text: 'I have a billing issue that needs to be resolved.',
		createdAt: '2023-08-08T10:15:35Z',
	},
]

export default mockData
