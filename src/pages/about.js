import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import IMG_24 from '../assets/images/IMG_24.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Poliwrocket</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Nasze koło</h2>
                    </header>
                    <p>Należymy do koła naukowego PWr in Space</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img src={IMG_24} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Nasz cel</h3>
                            </header>
                            <p>Głównym celem naszego projektu jest po raz kolejny wyjazd do Stanów Zjednoczonych i udział w zawodach Spaceport America Cup, uczestniczą w nim zespoły z najlepszych uczelni z całego świata.</p>
                            <ul className="actions">

                            </ul>
                        </div>
                    </div>
                </section>

            </section>
        </div>

    </Layout>
)

export default Landing