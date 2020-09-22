import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';

import IMG_24 from '../assets/images/IMG_24.jpg';

const Landing = (props) => (
	<Layout>
		<Helmet>
			<title>PWr in Space</title>
			<meta name="description" content="Landing Page" />
		</Helmet>

		<BannerLanding />

		<div id="main">
			<section id="one">
				<div className="inner">
					<header className="major">
						<h2>Koło naukowe przy Politechnice Wrocławskiej</h2>
					</header>
					<p>Projekt Poliwrocket</p>
				</div>
			</section>
			<section id="two" className="spotlights">
				<section>
					<img class="about-img" src={IMG_24} alt="" />
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Nasz cel</h3>
							</header>
							<p>
								Głównym celem naszego projektu jest po raz kolejny wyjazd do Stanów Zjednoczonych i
								udział w zawodach Spaceport America Cup, uczestniczą w nim zespoły z najlepszych uczelni
								z całego świata.
							</p>
							<ul className="actions" />
						</div>
					</div>
				</section>
			</section>
		</div>
	</Layout>
);

export default Landing;
