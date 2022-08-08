export type Confiability = {
	avarage: number,
	count: number
}


export type Publishment = {
	id: string,
	price: number,
	condition?: string,
	confiability: Confiability,
	estabelishment: {
		name: string,
		address: string,
		imageUrl?: string
	},
	product: {
		brand: string,
		imageUrl?: string
	}
	comments?: {
		dateTime: Date,
		text: string,
		author: string
	}[],
	createdAt: Date,
	updatedAt?: Date
}
