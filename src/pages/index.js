import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import IMG_19 from '../assets/images/IMG_19.jpg'
import IMG_20 from '../assets/images/IMG_20.jpg'
import IMG_23 from '../assets/images/IMG_23.jpg'
import IMG_22 from '../assets/images/IMG_22.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Poliwrocket"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h2>Rakiety to nasz hobby</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/rockets" className="button next">Nasze rakiety</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section id="two" className="tiles">
                        <article style={{ backgroundImage: `url(${IMG_20})` }}>
                            <header className="major">
                                <h3>O nas</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${IMG_19})` }}>
                            <header className="major">
                                <h3>Nasz Team</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/team" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${IMG_23})` }}>
                            <header className="major">
                                <h3>Sponsorzy</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/sponsors" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${IMG_22})` }}>
                            <header className="major">
                                <h3>Newsy</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/news" className="link primary"></Link>
                        </article>
                        {/* <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex