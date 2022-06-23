import { gql } from "@apollo/client";
import { IGraphQLClient } from "@data/protocols/graphql/graphql-client";
import { Publishment } from "@domain/models/publishment";
import { ILoadPublishments, LoadPublishment } from "@domain/use-cases/load-publishments";

export class LoadPublishmentUseCase implements ILoadPublishments {
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

	async request(): Promise<Publishment[]> {
		try {
			const response = await this.client.request<LoadPublishment.Model>({ query: this.query, requestType: 'query' })

			return response.data?.findAllPublishments ?? []
		} catch (error) {
			throw error
		}
	}
}
