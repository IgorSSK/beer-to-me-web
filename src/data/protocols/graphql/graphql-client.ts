import { DocumentNode, GraphQLError } from "graphql"

export namespace GraphQLClient {
	export type Request = {
		requestType: RequestType,
		query: DocumentNode,
		variables?: any,
		headers?: any
	}

	export type RequestType = 'query' | 'mutation'

	export type Response<T = any> = {
		statusCode: StatusCode,
		data?: T | null,
		errors?: GraphQLError[]
	}

	export enum StatusCode {
		ok = 200,
		badRequest = 400,
		notFound = 404,
		serverError = 500
	}
}

export interface IGraphQLClient {
	request<T>(params: GraphQLClient.Request): Promise<GraphQLClient.Response<T>>
}
