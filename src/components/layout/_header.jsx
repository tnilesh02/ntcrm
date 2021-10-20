import React, { Component } from 'react';

export class Header extends Component {

	state = {
		mobileNavigation: false
	}
	
	changenav = () => {
		if(this.state.mobileNavigation) {
			this.setState({
				mobileNavigation: false
			})
		} else {
			this.setState({
				mobileNavigation: true
			})
		}
	}

	render() {

		const mobilenavclass = this.state.mobileNavigation ? "mobile-navigation" : "no-mobile-navigation";

		const buttonbackground = this.state.mobileNavigation ? "mobile-navigation__background mobile-navigation__background--active" : "mobile-navigation__background mobile-navigation__background--inactive";

		const bottomborder = this.state.mobileNavigation ? "section-header no-bottom-border" : "section-header bottom-border";

		return (
			<div className={bottomborder}>
				<div className="header">
					<div className="header__left">
						<div className="header__title">
							<span className="nt-title">NT</span>
							<span className="crm-title">CRM</span>
						</div>
					</div>
					<div className="header__right">
						<div className="navigation">
						    <div className="navigation__item">
						    	<a href="#myfeatures" className="navigation__link">Features</a>
						    </div>
						    <div className="navigation__item">
						    	<a href="#myreviews" className="navigation__link">Reviews</a>
						    </div>
						    <div className="navigation__item">
						    	<a href="#mycontactus" className="navigation__link">Contact us</a>
						    </div>
							<div className="navigation__trial">
								<a href="#" className="navigation__trial-button">Start Your Free Trial</a>
							</div>
						</div>
					</div>
					<div className="header__right--mobile">
					    <div onClick={() => {
					    	this.changenav()
					    }} className={buttonbackground}>
					        <span className="mobile-navigation__button" >&nbsp;</span>
					    </div>
					</div>
					<div className={mobilenavclass}>
						<div className="mobile-navigation__item">
							<a href="#myfeatures" className="mobile-navigation__link">Features</a>
						</div>
						<div className="mobile-navigation__item">
							<a href="#myreviews" className="mobile-navigation__link">Reviews</a>
						</div>
						<div className="mobile-navigation__item">
							<a href="#mycontactus" className="mobile-navigation__link">Contact us</a>
						</div>
					</div>
				</div>
			</div>
			)
	}
}