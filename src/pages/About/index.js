import React from 'react'
import { Link } from 'react-router-dom'
import { AboutStyle } from './styled'


const Page = () => {
    return (
        <AboutStyle>
            <div className="container">



                <div className="row d-flex justify-content-center mt-5 ">
                    <div className="col-lg-7 col-md-11 col-sm-12 text-white Box">
                        <h1>
                            Professional background
                        </h1>
                        <p>
                            Hi!
                        </p>
                        <p>
                            I'm Jeferson Rocha, IT professional with more than 14 years of experience supporting the business of big companies such as Lanxess, FIFA, and Aveva
                            supporting over 4.000 users in the world, responsible for the entire support in Latin America.
                        </p>
                        <p>
                            I have extensive experience in solving users and systems issues.
                        </p>
                        <p>
                            I also invested in certification as Azure and Scrum to add more value to the business and deliver the server more agile.
                            I have experience in infrastructure and good knowledge in  FrontEnd, and Backend development.
                        </p>

                    </div>
                </div>



            </div>
        </AboutStyle>
    )
}

export default Page