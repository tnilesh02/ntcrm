import React, { Component } from 'react';

export class Features extends Component {

	render() {

		return (
			<div className="features-section" id="myfeatures">
				<div className="features">
					<div className="features__title-box">
						<div className="features__title">
							Features
						</div>
						<div className="features__description">
							that will help you become the best in the market
						</div>
					</div>
					<div className="features__items">
						<div className="features__box">
							<div className="features__box-title">
								Marketing
							</div>
							<div className="features__box-description">
								Our Platform will help you increase customers and convert them into users
							</div>
							<div className="features__box-popular">Popular features</div>
							<div className="features__box-list">
								<div className="features__box-items">
									<span className="features__box-icon">&#10003;</span> Lead generation
								</div>
								<div className="features__box-items">
									<span className="features__box-icon">&#10003;</span> Marketing automation
								</div>
								<div className="features__box-items">
								    <span className="features__box-icon">&#10003;</span> Interaction analysis
								</div>
							</div>
						</div>
						<div className="features__box">
							<div className="features__box-title">
								Content Management
							</div>
							<div className="features__box-description">
								Our Platform will help you manage your content in most efficient way
							</div>
							<div className="features__box-popular">Popular features</div>
							<div className="features__box-list">
								<div className="features__box-items">
									<span className="features__box-icon">&#10003;</span> SEO
								</div>
								<div className="features__box-items">
									<span className="features__box-icon">&#10003;</span> Trends
								</div>
								<div className="features__box-items">
								    <span className="features__box-icon">&#10003;</span> Drag & drop content
								</div>
							</div>
						</div>
						<div className="features__box">
							<div className="features__box-title">
								Sales & Services
							</div>
							<div className="features__box-description">
								Our Platform will help you improve sales and give better services to customers
							</div>
							<div className="features__box-popular">Popular features</div>
							<div className="features__box-list">
								<div className="features__box-items">
									<span className="features__box-icon">&#10003;</span> Meeting scheduling
								</div>
								<div className="features__box-items">
									<span className="features__box-icon">&#10003;</span> Tickets
								</div>
								<div className="features__box-items">
								    <span className="features__box-icon">&#10003;</span> Customer feedback
								</div>
							</div>
						</div>
					</div>
					<div className="features__trial">
						<a href="#" className="features__trial-button">Start your free trial</a>
					</div>
				</div>
			</div>
			)
	}
}