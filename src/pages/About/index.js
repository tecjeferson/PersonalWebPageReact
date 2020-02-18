import React from 'react'
import { Link } from 'react-router-dom'
import { AboutStyle } from './styled'


const Page = () => {
    return (
        <AboutStyle>
            <div class="container">



                <div class="row d-flex justify-content-center mt-5 ">
                    <div class="col-lg-6 col-md-10 col-sm-12 text-white Box">
                        <h1>
                            Colocando suas ideias na palma da sua mão.
                        </h1>
                        <p>
                            Analista de Sistemas de formação com mais de 10 anos de experiencia em TI em empresas do Brasil e
                            Exterior, trabalhado com equipes multiculturais, com foco na solução de problemas.
                        </p>
                        <p class="text-right">
                            Forte capacidade em resolver problemas, habilidade com FRONT-END, BACK-END, DATABASE, conhecimento em
                            ASPNET MVC e ASPNET CORE.
                        </p>
                        <p>
                            Sou apaixonado por viajar, conhecer novos lugares, culturas, tirar fotos e aproveitar o tempo com a
                            minha esposa e filho...

                        </p>
                        <p class="text-right">
                            Gosto de desafios e aprender algo novo, também gosto de ensinar e compartilhar conhecimento.
                        </p>
                    </div>
                </div>



            </div>
        </AboutStyle>
    )
}

export default Page