
namespace Age {
	export type TimeType = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'

	export type Result = {
		label: string,
		age: number,
		resultIn: TimeType
	}
}

export class MathExtensions {

	static age(startDate: Date, endDate = new Date()): Age.Result {
		let result = (endDate.getTime() - startDate.getTime()) / 1000
		let roundedResult = Math.floor(result)
		if (result < 60) return { label: `${roundedResult} segundo${(roundedResult !== 1 ? 's' : '')}`, age: roundedResult, resultIn: 'seconds' }

		result = result / 60
		roundedResult = Math.floor(result)
		if (result < 60) return { label: `${roundedResult} minuto${(roundedResult !== 1 ? 's' : '')}`, age: roundedResult, resultIn: 'minutes' }

		result = result / 60
		roundedResult = Math.floor(result)
		if (result < 24) return { label: `${roundedResult} hora${(roundedResult !== 1 ? 's' : '')}`, age: roundedResult, resultIn: 'hours' }

		result = result / 24
		roundedResult = Math.floor(result)
		if (result < 7) return { label: `${roundedResult} dia${(roundedResult !== 1 ? 's' : '')}`, age: roundedResult, resultIn: 'days' }

		result = result / 7
		roundedResult = Math.floor(result)
		if (result < 4) return { label: `${roundedResult} semana${(roundedResult !== 1 ? 's' : '')}`, age: roundedResult, resultIn: 'weeks' }

		result = result / 4
		roundedResult = Math.floor(result)
		if (result < 12) return { label: `${roundedResult} mes${(roundedResult !== 1 ? 'es' : '')}`, age: roundedResult, resultIn: 'months' }

		result = result / 12
		roundedResult = Math.floor(result)
		return { label: `${roundedResult} ano${(roundedResult !== 1 ? 's' : '')}`, age: roundedResult, resultIn: 'years' }
	}
}
