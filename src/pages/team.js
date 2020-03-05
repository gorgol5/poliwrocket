import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import IMG_25 from '../assets/images/IMG_25.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Poliwrocket</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">

            <section id="one" className="spotlights" style={{ margin: "5% " }}>

                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>Zarząd</h3>
                        </header>
                        <p>Lista członków:</p>
                        <ul>

                            <li> <img src={IMG_25} alt="" style={{ height: "100px" }} /> Jan Kowalski </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className="actions">
                        </ul>
                    </div>
                </div>
            </section>
            <section id="one" className="spotlights" style={{ margin: "5%" }}>



                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>Zespół</h3>
                        </header>
                        <p>Lista członków:</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className="actions">
                        </ul>
                    </div>
                </div>
            </section>

        </div>

    </Layout>
)

export default Landing