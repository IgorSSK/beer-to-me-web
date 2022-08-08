import { ChakraProvider } from '@chakra-ui/react';
import TemplateDefault from '@presentation/templates/Default';
import React from 'react';
import { createRoot } from 'react-dom/client';
import RoutesConfig from './routes';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<TemplateDefault>
				<RoutesConfig />
			</TemplateDefault>
		</ChakraProvider>
	</React.StrictMode>
);
