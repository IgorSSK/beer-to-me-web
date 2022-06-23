import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import PublishmentList from '../presentation/views/publishment';

ReactDOM.render(
	<React.StrictMode>
		<PublishmentList />
	</React.StrictMode>,
	document.getElementById('root')
);
