import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';

import IMG_26 from '../assets/images/IMG_26.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';

const News = (props) => (
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
						<h2>Najnowsze wiadomości o naszym projekcie</h2>
					</header>
					<p>
						Znajdziesz tutaj wszystkie informacje o tym co aktualnie robimy, jaki jest aktualny stan prac
						nad rakietą, kiedy następny start i kiedy rekrutujemy{' '}
					</p>
				</div>
			</section>
			<section id="two" className="spotlights">
				<section>
					<Link to="/generic" className="news-image image">
						<img src={IMG_26} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Nowe miejsce - nowe możliwości</h3>
							</header>
							<p>
								Właśnie dziś w WPT - Wrocławski Park Technologiczny S.A. ruszył nowy projekt, w ramach
								którego 8 kół naukowych z Politechnika Wrocławska będzie mogło pracować w przestrzeni
								roboczej dopasowanej do naszych potrzeb. Wśród szczęśliwców znaleźliśmy się i my! Bardzo
								dziękujemy
							</p>
							<ul className="actions">
								<li>
									<Link to="/generic1" className="button">
										Więcej
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section>
					<Link to="/generic" className="news-image image">
						<img src={pic09} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Rhoncus magna</h3>
							</header>
							<p>
								Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus
								condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna
								pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
								sagittis tempus.
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
					<Link to="/generic" className=" news-image image">
						<img src={pic10} alt="" />
					</Link>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Sed nunc ligula</h3>
							</header>
							<p>
								Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus
								condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna
								pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
								sagittis tempus.
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
			</section>
		</div>
	</Layout>
);

export default News;
