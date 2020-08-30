import React from 'react'
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'
import imageIcon from '../../../img/fotoperfil.jpg'
import logo from '../../../img/logo.svg';


const Header = () => {
    return (
        <HeaderArea>
            <nav className="navbar navbar-expand-sm fixed-top navbar-trans navbar-inverse">
                <div className="container">
                    <button className="navbar-toggler  mr-5" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-start mr-5 text-right"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            <li className="nav-item active">
                                <Link className="nav-link scroll" to="/">HOME<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll" href="https://jefersonvrocha.com.br/blog/">BLOG</a>
                            </li>

                            <li className="nav-item linkedin">
                                <a className="nav-link scroll" href="https://www.linkedin.com/in/jefersonvrocha/"
                                    id="navbarDropdown">LINKEDIN</a>
                            </li>
                            <li className="nav-item github">
                                <a className="nav-link scroll" href="https://github.com/tecjeferson"
                                    id="navbarDropdown">GITHUB</a>
                            </li>
                        </ul>

                    </div>
                    <img src={logo} className="App-logo" height="40" />
                </div>

            </nav>
        </HeaderArea>
    )

}

export default Header