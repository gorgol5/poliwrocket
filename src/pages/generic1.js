import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import IMG_26 from '../assets/images/IMG_26.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Poliwrocket</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Nowe miejsce - nowe możliwości</h1>
                    </header>
                    <span className="image main"><img src={IMG_26} alt="" /></span><p>
                        Właśnie dziś w WPT - Wrocławski Park Technologiczny S.A. ruszył nowy projekt, w ramach którego 8 kół naukowych z Politechnika Wrocławska będzie mogło pracować w przestrzeni roboczej dopasowanej do naszych potrzeb. Wśród szczęśliwców znaleźliśmy się i my!
Bardzo dziękujemy</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic