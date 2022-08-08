import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
	Slider,
	SliderMark,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Text,
	Tooltip,
	Center,
	IconButton
} from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

type Props = {
	publishmentId: string;
	avarage?: number;
	numberOfVotes?: number;
	onConfiabilityVote(publishmentId: string, confiabilityCallback: number): void;
};

enum ConfiabilityColorSchema {
	default = 'grey',
	green = 'green',
	red = 'red',
	yellow = 'yellow'
}

const ConfiabilityVote: React.FC<Props> = ({
	publishmentId,
	avarage = 0,
	numberOfVotes = 0,
	onConfiabilityVote
}) => {
	const calculateColor = useCallback(
		(confiability: number) => {
			if (!confiability && numberOfVotes === 0) return ConfiabilityColorSchema.default;
			if (confiability > 0 && confiability < 33) return ConfiabilityColorSchema.red;
			if (confiability >= 33 && confiability < 66) return ConfiabilityColorSchema.yellow;
			if (confiability >= 66) return ConfiabilityColorSchema.green;

			return ConfiabilityColorSchema.default;
		},
		[numberOfVotes]
	);

	const initialColorRef = useRef(calculateColor(avarage));
	const [color, setColor] = useState<ConfiabilityColorSchema>(initialColorRef.current);
	const [vote, setVote] = useState<number>();
	const [confirmationHidden, setConfirmationHidden] = useState<boolean>(true);

	const voteHandler = useCallback((value: number) => {
		setVote(value);
		setColor(calculateColor(value));
	}, []);

	const endVotingHandler = useCallback(() => setConfirmationHidden(false), []);
	const confirmVotingHandler = useCallback(() => {
		setConfirmationHidden(true);
		if (vote) onConfiabilityVote(publishmentId, vote);
	}, [vote]);
	const denyVotingHandler = useCallback(() => {
		setConfirmationHidden(true);
		setVote(avarage);
		setColor(initialColorRef.current);
	}, []);

	return (
		<Tooltip label={`${numberOfVotes} votos`} hasArrow placement="bottom">
			<Center maxW={confirmationHidden ? '120px' : '180px'} minW="90px" w="full">
				<Slider
					aria-label="slider-ex-1"
					min={0}
					max={100}
					step={10}
					defaultValue={avarage}
					value={vote}
					colorScheme={color}
					onChange={voteHandler}
					onChangeEnd={endVotingHandler}
				>
					<SliderMark
						fontSize="xs"
						mt="-3"
						ml="-2.5"
						top="-1.5"
						bg={`${initialColorRef.current}.500`}
						color="white"
						w="5"
						rounded="full"
						textAlign="center"
						value={avarage}
					>
						{avarage}
					</SliderMark>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb>
						<Text fontSize="x-small">{vote || avarage}</Text>
					</SliderThumb>
				</Slider>
				<Center flexDir="row" ml="0.5" gap="0.5" hidden={confirmationHidden}>
					<IconButton
						onClick={confirmVotingHandler}
						icon={<CheckIcon />}
						size="xs"
						color="green"
						variant="outline"
						aria-label="Confirm"
					/>
					<IconButton
						onClick={denyVotingHandler}
						icon={<CloseIcon />}
						size="xs"
						color="red"
						variant="outline"
						aria-label="Clear"
					/>
				</Center>
			</Center>
		</Tooltip>
	);
};

export default ConfiabilityVote;
