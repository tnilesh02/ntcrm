import React, { Component } from 'react';
import '../sass/main.scss';

// layout
import { Header } from './layout/_header.jsx';
import { Intro } from  './layout/_intro.jsx';
import { Features } from './layout/_features.jsx';
import { Reviews } from './layout/_reviews.jsx';
import { Contactus } from './layout/_contactus.jsx';
import { Footer } from './layout/_footer.jsx';

export class Homepage extends Component {

	render() {

		return (
			<div>
				<Header />
				<Intro />
				<Features />
				<Reviews />
				<Contactus />
				<Footer />
			</div>
			)
	}
}