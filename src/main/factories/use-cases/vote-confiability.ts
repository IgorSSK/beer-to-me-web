import { VoteConfiabilityUseCase } from "@data/use-cases/vote-confiability";
import { ApolloGraphQLClient } from "@infra/graphql/ApolloGraphQLClient";

export class VoteConfiabilityUseCaseDI {
	static inject() {
		const client = new ApolloGraphQLClient(import.meta.env.VITE_GRAPHQL_URL, false)
		return new VoteConfiabilityUseCase(client)
	}
}
