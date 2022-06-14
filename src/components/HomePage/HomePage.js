import React from 'react';
import Header from './Header';
import Offers from './Offers';
import TopRoutes from './TopRoutes';
import Footer from './Footer';

function HomePage() {
	return (
		<div>
			<Header></Header>
			<Offers />
			<TopRoutes />
			<Footer />
		</div>
	);
}

export default HomePage;
