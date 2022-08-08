import { Confiability } from "@domain/models/publishment"

export namespace VoteConfiability {
	export type Args = {
		publishmentId: string,
		confiability: number
	}
	export type Response = Confiability | undefined
}

export interface IVoteConfiabilityUseCase {
	request(args: VoteConfiability.Args): Promise<VoteConfiability.Response>
}
