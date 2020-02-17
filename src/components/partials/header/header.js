import React from 'react'
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <HeaderArea>
            <nav class="navbar navbar-expand-sm fixed-top navbar-trans navbar-inverse">
                <div class="container">
                    <button class="navbar-toggler  mr-5" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars text-white"></i>
                    </button>

                    <div class="collapse navbar-collapse justify-content-start mr-5 text-right"
                        id="navbarSupportedContent">
                        <ul class="navbar-nav">

                            <li class="nav-item active">
                                <Link class="nav-link scroll" to="/">HOME<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link scroll" to="/about">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/curriculo">CURRICULUM</Link>
                            </li>

                            <li class="nav-item linkedin">
                                <a class="nav-link scroll" href="https://www.linkedin.com/in/jefersonvrocha/"
                                    id="navbarDropdown">LINKEDIN</a>
                            </li>
                            <li class="nav-item github">
                                <a class="nav-link scroll" href="https://github.com/tecjeferson"
                                    id="navbarDropdown">GITHUB</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </HeaderArea>
    )

}

export default Header