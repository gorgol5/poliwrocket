import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';

import R1 from '../assets/images/R1.jpg';
import R2 from '../assets/images/R2.jpg';
import R3 from '../assets/images/R3.jpg';

const News = (props) => (
	<Layout>
		<Helmet>
			<title>PWr in Space</title>
			<meta name="description" content="Landing Page" />
		</Helmet>

		<BannerLanding />

		<div id="main">
			<section id="one" className="spotlights">
				<section>
					<Link to="/generic" className="image">
						<img src={R1} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>R1 Mikro</h3>
							</header>
							<p>
								Nasza pierwsza rakieta, odbyła dwa loty na festiwalu Meteor zakończone sukcesem. Podczas
								pierwszego Micro R-1 osiągnęła 685m, a podczas drugiego 745m
							</p>
							<ul className="actions">
								<li>
									<Link to="/generic" className="button">
										Learn more
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section>
					<Link to="/generic" className="image">
						<img src={R2} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>R2 Setka</h3>
							</header>
							<p>
								Pierwszy lot: 1516m na poligonie wojskowym w Drawsku Pomorskim podczas Lotów Rakiet
								Eksperymentalnych w listopadzie 2018, Drugi lot: około 1000m również na poligonie w
								Drawsku Pomorskim w marcu 2019
							</p>
							<ul className="actions">
								<li>
									<Link to="/generic" className="button">
										Learn more
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section>
					<Link to="/generic" className="image">
						<img src={R3} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>R3 Dziewięćdziesiątka dziewiątka</h3>
							</header>
							<p>
								Rakieta R3 Dziewięćdziesiątka dziewiątka wykonała udany lot na wysokość około 4 200m 🚀
								Ze względu na wiatr, odczyty pomiaru masy zatankowanego utleniacza były nieprecyzyjne😕
								Wahały się, przez co nie byliśmy w stanie określić jego rzeczywistej ilości w zbiorniku.
								Spowodowało to przestrzelenie zakładanego pułapu (3 048 m) o ponad kilometr
							</p>
							<ul className="actions">
								<li>
									<Link to="/generic" className="button">
										Learn more
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section>
					<Link to="/generic" className="image">
						{/* <img src={pic10} alt="" /> */}
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>R4</h3>
							</header>
							<p>In progress</p>
							<ul className="actions">
								<li>
									<Link to="/generic" className="button">
										Learn more
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</section>
		</div>
	</Layout>
);

export default News;
