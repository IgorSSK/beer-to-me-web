import React, { useCallback } from 'react';

import { LoadPublishmentUseCase } from '@data/use-cases/load-publishments';
import useSWR from 'swr';
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import PublishmentCard from '@presentation/views/publishment/components/PublishmentCard';
import { VoteConfiabilityUseCase } from '@data/use-cases/vote-confiability';

type Props = {
	injection: [LoadPublishmentUseCase, VoteConfiabilityUseCase];
};

const PublishmentList: React.FC<Props> = ({
	injection: [loadPublishmentUseCase, voteConfiabilityUseCase]
}) => {
	const { isValidating, data, error, mutate } = useSWR(
		'LOAD_PUBLISHMENT',
		async () => await loadPublishmentUseCase.request(),
		{ revalidateOnFocus: true }
	);

	console.log(data);

	const handleVotingConfiability = async (publishmentId: string, confiability: number) => {
		const response = await voteConfiabilityUseCase.request({ publishmentId, confiability });

		if (response) {
			mutate(
				publishments => {
					const modifiedPublishment = publishments?.find(
						publishment => publishment.id === publishmentId
					);
					const filteredPublishments = publishments?.filter(
						publishment => publishment.id !== publishmentId
					);

					console.log([
						...filteredPublishments,
						{ ...modifiedPublishment, confiability: response }
					]);

					return [
						...filteredPublishments,
						{ ...modifiedPublishment, confiability: response }
					];
				},
				{ revalidate: true, populateCache: true }
			);
		}
	};

	if (isValidating)
		return (
			<>
				{[1, 2, 3, 4].map(i => (
					<Box
						key={i}
						marginY="4"
						padding="6"
						boxShadow="lg"
						bg="white"
						w="full"
						minWidth="280px"
						maxWidth="800px"
					>
						<SkeletonCircle size="10" />
						<SkeletonText mt="4" noOfLines={4} spacing="4" />
					</Box>
				))}
			</>
		);
	if (error) return <span>OPS! {JSON.stringify(error)}</span>;
	if (data)
		return (
			<>
				{data.map(publishment => (
					<PublishmentCard
						key={publishment.id}
						publishment={publishment}
						onConfiabilityVote={handleVotingConfiability}
					/>
				))}
			</>
		);
	return null;
};

export default PublishmentList;
