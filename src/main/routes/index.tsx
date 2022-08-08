import { PublishmentListViewDI } from '@main/factories/views/publishment-list';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RoutesConfig: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PublishmentListViewDI />} />
				<Route path="/:id" element={<h1>Hello World!</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesConfig;
