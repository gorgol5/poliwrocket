import React from 'react';

import Poliwrocket from '../assets/images/poliwrocket.png';
import PwrInSpace from '../assets/images/Pwr_in_Space_noBG_forDARK.png';

const Contact = (props) => (
	<section id="contact">
		<div className="inner">
			<section>
				{/* <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Imię</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Wiadomość</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Wyślij" className="special" /></li>
                        <li><input type="reset" value="Wyczyść" /></li>
                    </ul>
                </form> */}

				<div
					id="formularz-kontaktowy"
					class="contact"
					role="dialog"
					aria-label="Formularz kontaktowy"
					aria-hidden="true"
				>
					<form class="emailForm" method="POST" action="https://formspree.io/misyoda@gmail.com">
						<label class="half" aria-live="polite">
							Twój email
							<input
								class="form-data"
								name="email"
								type="email"
								placeholder="Wpisz tu twój email"
								required
							/>
						</label>
						<label class="half" aria-live="polite">
							Twoję imię
							<input
								class="form-data"
								name="name"
								type="text"
								placeholder="Wpisz tu twoje imię"
								required
							/>
						</label>

						<label class="half" aria-live="polite">
							Temat
							<input
								class="form-data"
								type="text"
								name="_subject"
								placeholder="Wpisz tu temat wiadomości"
								minlength="4"
								maxlength="78"
								required
							/>
						</label>
						<label aria-live="polite">
							Wiadomość
							<textarea
								class="form-data"
								name="message"
								placeholder="Wpisz tu twoją wiadomość"
								minlength="4"
								maxlength="6000"
								required
							/>
						</label>
						<label class="recaptcha-label" aria-live="polite">
							<div
								class="g-recaptcha"
								tabindex="-1"
								data-sitekey="6LevbxMUAAAAAIa8dsrFNJn0S_b_t5K8INV4z2JD"
								data-callback="recaptchaClearErr"
							/>
						</label>
						<button class="emailFormSubmit main-btn" name="submit" type="submit">
							Wyślij
						</button>

						<div class="emailFormAlert" aria-live="polite" />
					</form>
				</div>
			</section>
			<section className="split">
				<section>
					<div className="logo" style={{ margin: '10px auto' }}>
						<img src={PwrInSpace} style={{ height: '200px' }} alt="Pwr in Space logo" />
					</div>
					<div className="logo" style={{ paddingRight: '30px' }}>
						<img src={Poliwrocket} style={{ height: '200px' }} alt="Poliwrocket logo" />
					</div>
				</section>
				<section>
					<div className="contact-method">
						<span className="icon alt fa-envelope" />
						<h3>Email</h3>
						<a href="#" />
					</div>
				</section>
				{/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section> */}
				<section>
					<div className="contact-method">
						<span className="icon alt fa-home" />
						<h3>Adres</h3>
						<span>
							<br />
							<br />
						</span>
					</div>
				</section>
			</section>
		</div>
	</section>
);

export default Contact;
