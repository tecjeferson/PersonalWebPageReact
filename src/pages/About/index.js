import React from 'react'
import { Link } from 'react-router-dom'
import { AboutStyle } from './styled'


const Page = () => {
    return (
        <AboutStyle>
            <div class="container">

                <h1>About</h1>
                <Link to="/">HOME</Link>
            </div>
        </AboutStyle>
    )
}

export default Page