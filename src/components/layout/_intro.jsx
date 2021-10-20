import React, { Component } from 'react';

import Crm from '../../img/crm.svg';
export class Intro extends Component {

	render() {

		return (
			<div className="intro-section">
				<div className="intro">
					<div className="intro__left">
						<div className="intro__text">
							<div className="intro__best">
								The <span className="intro__best-colored">best CRM platform</span><br/> on internet
							</div>
							<div className="intro__para">
								A CRM product that will help you to<br/> grow your product and will allow<br/> you to become the best.
							</div>
							<div className="intro__trial">
								<a href="#" className="intro__trial-button">start your free trial</a>
							</div>
						</div>
					</div>
					<div className="intro__right">
						<div className="intro__image">
							<img src={Crm} alt="CRM" className="intro__image-link" />
						</div>
					</div>
				</div>
			</div>
			)
	}
}