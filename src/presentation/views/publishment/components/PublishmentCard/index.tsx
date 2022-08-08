import React from 'react';
import {
	Box,
	Center,
	Divider,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	IconButton,
	Image,
	Stack,
	Text
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { Publishment } from '@domain/models/publishment';
import { Formatter } from '@common/utils/formatter';
import ConfiabilityVote from '../ConfiabilityVote';
import { MathExtensions } from '@common/utils/math';
import { AiOutlineComment, AiOutlineShareAlt, AiTwotoneShop } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export type PublishmentCardProps = {
	publishment: Publishment;
	onConfiabilityVote(publishmentId: string, confiabilityCallback: number): void;
};

const PublishmentCard: React.FC<PublishmentCardProps> = ({ publishment, onConfiabilityVote }) => {
	const navigate = useNavigate();

	return (
		<Box
			maxW="lg"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			marginY="4"
			w="full"
			minWidth="280px"
			maxWidth="800px"
		>
			<Box
				display="flex"
				cursor="pointer"
				onClick={() => navigate(publishment.id, { replace: true })}
			>
				<Center h="230px" w="230px">
					<Image
						src={publishment.product.imageUrl}
						borderRadius="full"
						boxSize="180px"
						objectFit="contain"
					/>
				</Center>
				<Grid
					w="full"
					gap={1}
					margin="1.5"
					gridTemplateRows="25px 1fr"
					gridAutoColumns="1fr"
				>
					<GridItem>
						<HStack padding="4px" justifyContent="space-between">
							<div />
							<Center display="flex" fontSize="x-small">
								<TimeIcon />
								<Text marginLeft="0.5">
									{MathExtensions.age(new Date(publishment.createdAt)).label}
								</Text>
							</Center>
						</HStack>
					</GridItem>

					<GridItem
						display="flex"
						flexDir="column"
						justifyContent="space-between"
						mb="10px"
					>
						<Heading color="yellow.500" size="xl">
							{Formatter.currency(publishment.price)}
						</Heading>
						<Text
							color="blackAlpha.700"
							noOfLines={2}
							fontWeight="bold"
							fontSize="x-large"
						>
							{publishment.product.brand}
						</Text>
						<HStack fontSize="xl" color="blackAlpha.600">
							<Icon as={AiTwotoneShop} />
							<Text>{publishment.estabelishment.name}</Text>
						</HStack>
					</GridItem>
				</Grid>
			</Box>

			<Divider />

			<Stack justifyContent="space-around" direction="row" spacing={4} marginY="2">
				<ConfiabilityVote
					publishmentId={publishment.id}
					avarage={publishment.confiability.avarage}
					numberOfVotes={publishment.confiability.count}
					onConfiabilityVote={onConfiabilityVote}
				/>
				<IconButton
					variant="ghost"
					aria-label="Comment"
					fontSize="xl"
					icon={
						<Center>
							<Icon as={AiOutlineComment} />
							<Text fontSize="md">{publishment.comments?.length ?? 0}</Text>
						</Center>
					}
				/>
				<IconButton
					variant="ghost"
					aria-label="Share"
					fontSize="xl"
					icon={<Icon as={AiOutlineShareAlt} />}
				/>
			</Stack>
		</Box>
	);
};

export default PublishmentCard;
