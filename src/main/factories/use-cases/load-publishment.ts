import { LoadPublishmentUseCase } from "@data/use-cases/load-publishments"
import { ApolloGraphQLClient } from "@infra/graphql/ApolloGraphQLClient"

export class LoadPublishmentUseCaseDI {
	static inject() {
		const client = new ApolloGraphQLClient(import.meta.env.VITE_GRAPHQL_URL, false)
		return new LoadPublishmentUseCase(client)
	}
}
