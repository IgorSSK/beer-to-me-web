import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { GraphQLClient, IGraphQLClient } from "@data/protocols/graphql/graphql-client";


export class ApolloGraphQLClient implements IGraphQLClient {
	private client: ApolloClient<NormalizedCacheObject>

	constructor(uri: string, cache: boolean) {
		this.client = new ApolloClient({ uri, cache: new InMemoryCache(), })
	}

	async request<T>({ requestType, query, variables, headers }: GraphQLClient.Request): Promise<GraphQLClient.Response<T>> {
		try {
			const request = {
				variables,
				context: { headers }
			}

			const response = requestType === "query"
				? await this.client.query<T>({ query, ...request })
				: await this.client.mutate<T>({ mutation: query, ...request })

			return {
				data: response.data,
				statusCode: response.errors ? GraphQLClient.StatusCode.badRequest : GraphQLClient.StatusCode.ok,
				errors: response.errors
			}
		} catch (error) {
			throw error
		}
	}
}
