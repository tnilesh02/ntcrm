import React, { Component } from 'react';

export class Footer extends Component {

	render() {

		return (
			<div className="footer-section">
				<div className="footer">
					<div className="header__title">
						<span className="nt-title">NT</span>
						<span className="crm-title">CRM</span>
					</div>

					<div className="footer__description">
						This is a sample site created by Nileshkumar Tiwari.<br/> If you liked it, you can contact me for collaboration on <br/><div className="footer__email">tnilesh02@gmail.com</div>
					</div>
				</div>

			</div>
			)
	}
}