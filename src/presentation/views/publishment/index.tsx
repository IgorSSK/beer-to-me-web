import React, { useEffect, useState } from 'react';

import { Publishment } from '@domain/models/publishment';
import { ApolloGraphQLClient } from '@infra/graphql/ApolloGraphQLClient';
import { LoadPublishmentUseCase } from '@data/use-cases/load-publishments'
import useSWR from 'swr';
import Card from './components/Card';

const PublishmentList: React.FC = () => {
	// const [publishments, setPublishments] = useState<Publishment[]>([])

	// useEffect(() => {
	// 	const fetch = async () => {
	// 		const response = await new LoadPublishmentUseCase(new ApolloGraphQLClient('https://j2f8uzh1wg.execute-api.us-east-1.amazonaws.com/dev/graphql', false)).request()
	// 		setPublishments(response)
	// 	}

	// 	fetch()
	// }, [])
	const {isValidating, data, error} = useSWR('LOAD_PUBLISHMENT', async () => await new LoadPublishmentUseCase(new ApolloGraphQLClient('https://j2f8uzh1wg.execute-api.us-east-1.amazonaws.com/dev/graphql', false)).request())

	if (isValidating) return <div>LoAdInG...</div>
	if (error) return <span>OPS! { JSON.stringify(error) }</span>
	if (data) return <>{data.map(pub => <Card id={pub.id} title={pub.product.brand} image={pub.product.imageUrl}></Card>)}</>
	return null
}

export default PublishmentList;
