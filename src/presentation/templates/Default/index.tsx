import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
type Props = {
	children: ReactNode;
};
const TemplateDefault: React.FC<Props> = ({ children }) => {
	return (
		<Grid w="full">
			<GridItem textAlign="center">
				<Heading size="2xl" fontFamily="cursive" color="yellow.600">
					Beer to Me 🍻
				</Heading>
			</GridItem>
			<GridItem display="flex" flexDirection="column" alignItems="center">
				{children}
			</GridItem>
		</Grid>
	);
};

export default TemplateDefault;
