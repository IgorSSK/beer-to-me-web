import { gql } from "@apollo/client";
import { IGraphQLClient } from "@data/protocols/graphql/graphql-client";
import { ILoadPublishmentsUseCase, LoadPublishment } from "@domain/use-cases/load-publishments";

type Response = {
	findAllPublishments?: {
		id: string,
		price: number,
		condition?: string,
		confiability: {
			avarage: number,
			count: number
		},
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
	}[]
}

export class LoadPublishmentUseCase implements ILoadPublishmentsUseCase {
	constructor(private readonly client: IGraphQLClient) { }

	private readonly query = gql`
	query FindAllPublishments {
		findAllPublishments {
			id
			price
			condition
			createdAt
			updatedAt
			confiability {
				avarage
				count
			}
			estabelishment {
				name
				address
				imageUrl
			}
			product {
				brand
				imageUrl
			}
			comments {
				dateTime
				text
				author
			}
		}
	}
	`

	async request(): Promise<LoadPublishment.Response> {
		try {
			const response = await this.client.request<Response>({ query: this.query, requestType: 'query' })

			return response.data?.findAllPublishments ?? []
		} catch (error) {
			throw error
		}
	}
}
