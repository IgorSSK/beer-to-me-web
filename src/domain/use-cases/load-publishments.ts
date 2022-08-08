import { Publishment } from "@domain/models/publishment"

export namespace LoadPublishment {
	export type Response = Publishment[]
}

export interface ILoadPublishmentsUseCase {
	request: () => Promise<LoadPublishment.Response>
}
