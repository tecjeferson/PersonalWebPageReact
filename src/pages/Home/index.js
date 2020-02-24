import React from 'react'
import { Link } from 'react-router-dom'
import { HomeStyle } from './styled'
import imageCetral from '../../img/profile2.jpg'

import logo from '../../img/logo.svg';

const Page = () => {
    return (
        <HomeStyle>

            <img src={logo} className="App-logo" alt="logo" />


            <div className="row text-center">
                <div className="col nameTitle">
                    <h1 className="">Jeferson Rocha</h1>
                    <hr />
                    <h2 className="">Software developer</h2>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?l=pt&phone=5521983650017" className="btnContact" src={imageCetral}>
                CONTATO
            </a>



        </HomeStyle>
    )
}

export default Page