import React from 'react'
import { Link } from 'react-router-dom'
import { AboutStyle } from './styled'


const Page = () => {
    return (
        <AboutStyle>
            <div className="container">



                <div className="row d-flex justify-content-center mt-5 ">
                    <div className="col-lg-6 col-md-10 col-sm-12 text-white Box">
                        <h1>
                            Professional background
                        </h1>
                        <p>
                            Hi!
                            <br />
                            I'm Jeferson Rocha, IT professional with more than 10 years of experience supporting the business of big companies such as Lanxess, FIFA, and Aveva.
                        <br />
                           I have extensive experience in solving users and systems issues.
                           <br />
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