import React from 'react'
import {
    Link
} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import Astos from '../assets/images/Astos_Solutions.png'


const News = (props) => (<Layout >
    <Helmet >
        <title > Poliwrocket </title> <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main" >
        <section id="one" >
            <div className="inner" >
                <header className="major" >
                    <h2 >Nasi sponsorzy </h2>
                </header>
                <p > Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.In efficitur ligula tate urna.Maecenas massa vel lacinia pellentesque lorem ipsum dolor.Nullam et orci eu lorem consequat tincidunt.Vivamus et sagittis libero.Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.In efficitur ligula tate urna. </p>
            </div>
        </section>
        <section id="two" className="spotlights" >
            <section >

                <img src={Astos} alt="" />
                <div className="content" >
                    <div className="inner" >
                        <header className="major" >
                            <h3 > Astos </h3> </header> <p > Nullam u lorem consequat tincidunt.Vivamus et sagittis  </p> <ul className="actions" >
                            <li > </li >
                        </ul>
                    </div>
                </div>
            </section>

        </section>
    </div>

</Layout>
)

export default News