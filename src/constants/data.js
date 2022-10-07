import {
	Sofa,
	BgLessChair,
	BgLessPlasticChair,
	BgLessLamp,
	BookCase, Chair, FoamChair, Glass, Lamp,
} from "./Images";

export const notifications = [
	{
		id: 1,
		date: "2022-10-05 12:00:00",
		notifications: [
			{
				"id": 4,
				"icon": "external-link-square",
				"message": "Order delivered successfully",
				"description": "Your order has been delivered successfully",
				"date": "2022-10-05 12:00:00",
			}
		]
	},
	{
		id: 2,
		date: "2022-10-04 12:00:00",
		notifications: [
			{
				"id": 3,
				"icon": "external-link-square",
				"message": "Order placed successfully",
				"description": "Your order has been placed successfully",
				"date": "2022-10-02 12:00:00",
			}
		]
	},
	{
		id: 3,
		date: "2022-10-02 12:00:00",
		notifications: [
			{
				"id": 1,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 2,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 3,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 4,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			}
		]
	},
	{
		id: 4,
		date: "2022-10-01 12:00:00",
		notifications: [
			{
				"id": 1,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 2,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 3,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 4,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			}
		]
	},
]

export const offers = [
	{
		offCount: 20,
		title: "Today's Special!",
		description: "Get 20% off on your first three order. Only valid for today",
		image: Sofa,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 18,
		title: "Weekend Deals!",
		description: "Get 18% off on your first order. Valid for weekend only",
		image: BgLessChair,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 30,
		title: "New Arrivals!",
		description: "Get 30% off on your first order. Valid for today only",
		image: BgLessLamp,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 20,
		title: "Black Friday!",
		description: "Get 20% off on your first order. Valid for today only",
		image: BgLessPlasticChair,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 33,
		title: "Diwali Offer!",
		description: "Get 33% off on your first order. Valid for today only",
		image: BgLessChair,
		backgroundColor: "#e8e8e8",
	}
]

export const categories = [
	{
		title: "Sofa",
		icon: "sofa-single",
	},
	{
		title: "Table",
		icon: "table-furniture",
	},
	{
		title: "Chair",
		icon: "chair-rolling",
	},
	{
		title: "Lamp",
		icon: "lamp",
	},
	{
		title: "Kitchen",
		icon: "fridge",
	},
	{
		title: "Cupboard",
		icon: "cupboard",
	},
	{
		title: "Others",
		icon: "dots-horizontal-circle-outline",
	},
]
export const products = [
	{
		id: 1,
		name: "Small Book Case",
		price: 1450,
		image: BookCase,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
			" nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
			"nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
		rating: 4.7,
		reviewsCount: 100,
		soldCount: 120,
		reviews: [
			{
				name: "John Doe",
				rating: 4.5,
				review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
			},
		]
	},
	{
		id: 2,
		name: "Glass Lamp",
		price: 400,
		image: Lamp,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
			" nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
			"nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
		rating: 4.2,
		reviewsCount: 100,
		soldCount: 300,
		reviews: [
			{
				name: "John Doe",
				rating: 4.5,
				review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
			},
		]
	},
	{
		id: 3,
		name: "Glass Package",
		price: 220,
		image: Glass,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
			" nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
			"nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
		rating: 4.6,
		reviewsCount: 100,
		soldCount: 900,
		reviews: [
			{
				name: "John Doe",
				rating: 4.5,
				review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
			},
		]
	},
	{
		id: 4,
		name: "Wooden Chair",
		price: 370,
		image: Chair,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
			" nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
			"nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
		rating: 4.9,
		reviewsCount: 100,
		soldCount: 77,
		reviews: [
			{
				name: "John Doe",
				rating: 4.5,
				review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
			},
		]
	},
	{
		id: 5,
		name: "Foam Padded Chair",
		price: 2000,
		image: FoamChair,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
			" nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
			"nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
		rating: 4.5,
		reviewsCount: 100,
		soldCount: 100,
		reviews: [
			{
				name: "John Doe",
				rating: 4.5,
				review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
			},
		]
	},
];
