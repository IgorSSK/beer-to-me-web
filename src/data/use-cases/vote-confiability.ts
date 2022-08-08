import { gql } from "@apollo/client";
import { IGraphQLClient } from "@data/protocols/graphql/graphql-client";
import { IVoteConfiabilityUseCase, VoteConfiability } from "@domain/use-cases/vote-confiability";

type Response = {
	voteConfiability?: {
		avarage: number,
		count: number
	}
}

export class VoteConfiabilityUseCase implements IVoteConfiabilityUseCase {
	constructor(private readonly client: IGraphQLClient) { }

	private readonly query = gql`
		mutation VoteConfiability($publishmentId: String!, $confiability: Int!) {
			voteConfiability(publishmentId: $publishmentId, confiability: $confiability) {
				avarage
				count
			}
		}
	`

	async request(args: VoteConfiability.Args): Promise<VoteConfiability.Response> {
		const response = await this.client.request<Response>({ query: this.query, requestType: 'mutation', variables: args })
		return response.data?.voteConfiability
	}
}
