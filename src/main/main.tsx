import React from 'react';
import {createRoot} from 'react-dom/client';
import PublishmentList from '../presentation/views/publishment';

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<PublishmentList />
	</React.StrictMode>,
);
