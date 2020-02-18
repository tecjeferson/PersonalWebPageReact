import React from 'react'
import { Link } from 'react-router-dom'
import { HomeStyle } from './styled'
import imageCetral from '../../img/profile2.jpg'
import imageWhatsapp from '../../img/whatsapp.png'


const Page = () => {
    return (
        <HomeStyle>


            <div class="row  mt-5">
                <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center top  mt-5">
                    <img src={imageCetral} class="rounded-circle img-profile" height="140" />
                </div>
            </div>


            <div class="row text-center">
                <div class="col nameTitle">
                    <h1 class="">Jeferson Rocha</h1>
                    <hr />
                    <h2 class="">Software developer</h2>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?l=pt&phone=5521983650017" class="myButton" src={imageCetral}>
                <span><img href="" src={imageWhatsapp} class="whatsIcon" height="28" />
                </span>CONTATO</a>



        </HomeStyle>
    )
}

export default Page