import React, { Component } from 'react';

import Review1 from '../../img/review1.jpeg';
import Review2 from '../../img/review2.jpeg';

export class Reviews extends Component {

	render() {

		return (
			<div id="myreviews" className="reviews-section">
				<div className="reviews">
					<div className="reviews__title">
					<span className="reviews__title-big">500,000+</span><br/> satisfied customers</div>
					<div className="reviews__box">
						<div className="reviews__box-profile">
							<img src={Review1} alt="" className="reviews__box-profile--image"/>
						</div>
						<div className="reviews__box-text">
							<div className="reviews__box-text--name">James Gordon</div>
							<div className="reviews__box-text--description">I started using NTCRM for my startup 2 years ago and it was the best decision I made for company. NTCRM helped my company grow exponentially and thrive in the market. If you are serious about growth of your company then start using NTCRM ASAP.</div>
						</div>
					</div>
					<div className="reviews__box">
						<div className="reviews__box-profile">
							<img src={Review2} alt="" className="reviews__box-profile--image"/>
						</div>
						<div className="reviews__box-text">
							<div className="reviews__box-text--name">Lisa ann</div>
							<div className="reviews__box-text--description">To become the best in the market you have to use the best tools in the market and without any doubt NTCRM is best at what it does. It gives you all the tools you need to scale your business and increase traffic.</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}