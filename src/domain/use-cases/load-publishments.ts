import { Publishment } from "@domain/models/publishment"

export interface ILoadPublishments {
	request: () => Promise<LoadPublishment.Model>
}

export namespace LoadPublishment {
	export type Model = { findAllPublishments: Publishment[] }
}
