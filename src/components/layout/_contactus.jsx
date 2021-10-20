import React,  { Component } from 'react';

import Contact from '../../img/contactus.svg';

export class Contactus extends Component {

	state = {
		showModal: false
	}

	handlechange() {
		this.setState({
			showModal: this.state.showModal ? false : true
		})
	}

	render() {

		const modalclass = this.state.showModal ? "show-modal" : "no-show-modal" ;



		return (
			<div id="mycontactus" className="contact-us-section">

			<div className={modalclass}>
				<div className="modal-box">
					<div className="modal-title">
						Form Successfully Submitted!
					</div>
					<button onClick={() => this.handlechange()} className="close-modal">&#10006;</button>
				</div>
			</div>
				<div className="contact-us__title">
					Contact us now!
				</div>
				<div className="contact-us">
					<div className="contact-us__left">
						<div className="contact-us__form">
							<form action="#" className="form">
								
								<div className="form__group">
								    <label htmlFor="name" className="form__label">Full Name</label>
									<input id="name" type="text" className="form__input" placeholder="Full name" required/>	
								</div>

								<div className="form__group">
								    <label htmlFor="email" className="form__label">Email Address</label>
									<input id="email" type="email" className="form__input" placeholder="Email Address" required/>
								</div>

								<div className="form__group">
								    <label htmlFor="subject" className="form__label">Subject</label>
									<input id="subject" type="text" className="form__input" placeholder="Subject" required/>
								</div>

								<div className="form__group">
								    <label htmlFor="messege" className="form__label">Messege</label>
									<textarea id="messege" type="text" className="form__textarea" placeholder="Messege" required/>
								</div>

								<div className="form__group">
									<button onClick={() => this.handlechange()} className="form__button">Submit</button>
								</div>
							</form>
						</div>
					</div>
					<div className="contact-us__right">
						<div className="contact-us__image-box">
							<img src={Contact} alt="" className="contact-us__image"/>
						</div>
					</div>
				</div>
			</div>
			)
	}
}