import React from 'react';

const Footer = (props) => (
	<footer id="footer">
		<div className="inner">
			<ul className="icons">
				<li>
					<a href="https://www.facebook.com/poliwrocket/" className="icon alt fa-facebook">
						<span className="label">Facebook</span>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/poliwrocket/?hl=pl" className="icon alt fa-instagram">
						<span className="label">Instagram</span>
					</a>
				</li>
			</ul>
			<ul className="copyright">
				<li>&copy; PWr in Space</li>
				<li>
					Design: <a href="https://github.com/gorgol5">Michał Gorgolewski</a>
				</li>
			</ul>
		</div>
	</footer>
);

export default Footer;
