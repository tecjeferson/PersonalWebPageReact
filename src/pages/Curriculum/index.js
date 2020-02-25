import React from 'react'
import { CurriculoStyle } from './styled'
import imageCetral from '../../img/profile2.jpg'
import Chart from '../../components/chart'


const Page = () => {
    return (
        <CurriculoStyle>
            <div className="container">
                <div className="cvBody">
                    <div className="row">
                        <div className="col title text-center">
                            <h1>JEFERSON ROCHA<span><strong> SOFTWARE DEVELOPER</strong></span></h1>
                        </div>
                    </div>

                    <section className="contact  initial">
                        <div className="row">
                            <div className="col">
                                <h2><strong>CONTACT</strong></h2>
                                <hr />
                                <ul className="navbar-nav">
                                    <li className="nav-item linkedin">
                                        <a className="nav-link scroll" href="https://www.linkedin.com/in/jefersonvrocha/"
                                            id="navbarDropdown"><i class="fab fa-linkedin"></i> <strong>LINKEDIN</strong></a>
                                    </li>
                                    <li className="nav-item github">
                                        <a className="nav-link scroll" href="https://github.com/tecjeferson"
                                            id="navbarDropdown"><i class="fab fa-github-square"></i> <strong>GITHUB</strong></a>
                                    </li>
                                    <li className="nav-item github">
                                        <a className="nav-link scroll" href="mailto:tecjeferson@gmail.com"
                                            id="navbarDropdown"><i class="fas fa-envelope-open-text"></i> <strong>EMAIL</strong></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h2><strong>EDUCATION</strong></h2>
                                <hr />


                                <h4>Undergraduate System Analysis and Development</h4>

                                <h5>December 2016</h5>
                            </div>
                        </div>
                    </section>

                    <section className="hobby">
                        <div className="row">
                            <div className="col hobbyItems">
                                <h2><strong>THINGS THAT I ENJOY</strong></h2>
                                <hr />
                                <div className="row">
                                    <div className="col hobbyItems">
                                        <i className="fas fa-plane-departure"></i>
                                        <span>Travel</span>
                                    </div>
                                    <div className="col hobbyItems">
                                        <i className="far fa-futbol"></i>
                                        <span>Foosball</span>
                                    </div>
                                    <div className="col hobbyItems">
                                        <i className="fas fa-chalkboard-teacher"></i>
                                        <span>Learn</span>
                                    </div>
                                    <div className="col hobbyItems">
                                        <i className="fas fa-mug-hot"></i>
                                        <span>Coffe</span>
                                    </div>
                                    <div className="col hobbyItems">
                                        <i className="fas fa-bicycle"></i>
                                        <span>Bike</span>
                                    </div>
                                    <div className="col hobbyItems">
                                        <i className="fas fa-leaf"></i>
                                        <span>Nature</span>
                                    </div>
                                </div>

                            </div>
                            <div className="col languages">
                                <h2><strong>LANGUAGES</strong></h2>
                                <hr />
                                <h4>Portuguese <span>Native</span></h4>
                                <h4>English <span>Fluent</span></h4>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2><strong>WORK EXPERIENCE</strong></h2>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>SENIOR IT SUPPORT ANALYST</h4>

                                <p><em>AVEVA ENGINEERING SOFTWARE FOR THE PLANT AND MARINE</em></p>
                                <p>• Latin America offices migrations, responsible for technical aspects and IT
                            Services contracts, working with PMO creating daily reports.</p>
                                <p>
                                    • Working in a worldwide team managing Configuration Manager (Deploying
                                    Operational Systems, develop applications for software center, developing
                                    scripts for silent uninstall, updates, collections).
                            </p>
                                <p>
                                    • Provide solutions for daily user's issue, keeping servers and system working
                                    correctly in all Latin America and any country when needed with Office 365,
                                    hyper-v, VPN, Microsoft Server, Routers, Switch.
                            </p>
                                <p>
                                    • Support IT Manager with equipment orders, support the technical team with
                                    the company's applications related to installations issues.
                            </p>
                                <p>
                                    • Support in events with solutions for each kind of presentation, hardware
                                    requirement or other needs.
                            </p>
                                <p>
                                    • Reduced 30% the cost of Mobile Communication in Brazil and Colombia
                                    increasing service quality, service plan (Data, Voice, Roaming).
                            </p>
                            </div>
                            <div className="col-lg-6">
                                <h4>SYSTEM ANALYST</h4>
                                <p><em>KAISTUDO</em></p>
                                <p>• Responsible for all IT, I was the interface between
                                     technology and business with the stakeholders,
                                     suggesting new procedures and investments.
                                </p>
                                <p>
                                    • I implemented an internal communication system for all company (Spark).
                                </p>
                                <p>
                                    • Keep, update and customize ERP (Winthor \ Totvs) in use to all
                                     areas in the company with more than 45 Account Managers.
                                </p>
                                <p>
                                    • Keep, update and customize sales system (Maxima Sistemas) in use for all
                                     internal users and external account managers.
                                </p>
                                <p>
                                    • Training users with ERP and Sales system
                                </p>
                                <p>
                                    • Training intern, Manage IT contracts.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2><strong>SKILLS</strong></h2>
                        <hr />
                        <div className="row skills">

                            <div className="col-lg-9 col-md-10 col-sm-12">

                                <Chart />
                            </div>

                        </div>


                    </section>
                </div>
            </div>


        </CurriculoStyle >
    )
}

export default Page