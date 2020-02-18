import React from 'react'
import { Link } from 'react-router-dom'
import { CurriculoStyle } from './styled'
import imageCetral from '../../img/profile2.jpg'


const Page = () => {
    return (
        <CurriculoStyle>
            <div class="container ">
                <div class="row">

                    <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center Imagetop">
                        <img src={imageCetral} class="rounded-circle img-profile" height="140" />
                    </div>


                    <div class="col boxStyle initBox">
                        <h3>ABOUT</h3>
                        <hr />
                        <p>
                            Supporting people ensuring that they have the correct tools and services working properly, helping them
                            improve
                            their skills sharing knowledge and solutions.
                            </p>
                    </div>
                </div>


                <div class="row">
                    <div class="col  boxStyle">
                        <h3>INTRODUCTION</h3>
                        <hr />
                        <p>
                            I'm Support Engineer with more than 10 years of experience supporting people with software, computers
                            and
                            mobiles in big companies such as Aveva, FIFA, BP and Lanxess. I'm also a Web Developer with some
                            projects in
                            Front-End and Back-End. I'm learning new technologies such as Node.js, ReactJS and some knowledge in
                            ASP.NET,
                            ASP.NET CORE and RestFull API as well.
                            </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col  boxStyle">
                        <h3>LANGUAGES</h3>
                        <hr />
                        <p>
                            Portuguese: Native
                        </p>
                        <p>
                            English: Fluent
                        </p>
                        <p>
                            Spanish: Full professional proficiency
                        </p>
                    </div>
                </div>


                <div class="row">
                    <div class="col  boxStyle">
                        <h3>SKILLS & KNOWLEDGE</h3>
                        <hr />
                        <p>
                            ITIL knowledge (I will take the exam for ITIL v4 in 3 – 4 weeks). Windows 10 , Server, Linux, Mac MS SQL
                            Powershell scripting Network TCP/IP Front-End, Back-End (C#, NodeJS, JavaScript, HTML, CSS…) Git Big
                            Data, Data
                            Cleaning with R, Data Plot with R System Center Configuration Manager Electronics (Diagram reading,
                            development
                            of electronic circuits, knowledge(AC/DC).
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col  boxStyle">
                        <h3>EDUCATION</h3>
                        <hr />
                        <p>2016 - Undergraduate System Analysis and Development</p>
                    </div>
                </div>


                <div class="row">
                    <div class="col  boxStyle mb-5">
                        <h3>EXPERIENCE</h3>
                        <hr />
                        <p>2014 - Present</p>
                        <p>IT SUPPORT ANALYST</p>
                        <p>AVEVA ENGINEERING SOFTWARE FOR THE PLANT AND MARINE</p>
                        <p>Latin America offices migrations, responsible for technical aspects and IT
                            Services contracts, working with PMO creating daily reports.</p>
                        <p>
                            Working in a worldwide team managing Configuration Manager (Deploying
                            Operational Systems, develop applications for software center, developing
                            scripts for silent uninstall, updates, collections).
                        </p>
                        <p>
                            Provide solutions for daily user's issue, keeping servers and system working
                            correctly in all Latin America and any country when needed with Office 365,
                            hyper-v, VPN, Microsoft Server, Routers, Switch.
                        </p>
                        <p>
                            Support IT Manager with equipment orders, support the technical team with
                            the company's applications related to installations issues.
                        </p>
                        <p>
                            Support in events with solutions for each kind of presentation, hardware
                            requirement or other needs.
                        </p>
                        <p>
                            Reduced 30% the cost of Mobile Communication in Brazil and Colombia
                            increasing service quality, service plan (Data, Voice, Roaming).
                        </p>
                    </div>
                </div>



            </div>
        </CurriculoStyle>
    )
}

export default Page