import style from 'styled-components'
import ImageAbout from '../../img/homem-olhando.png'

export const AboutStyle = style.div`
 background-image:linear-gradient(rgba(253, 193, 255, 0.219),#372a68),url(${ImageAbout});
    background-size:cover;
    position:fixed;
    width: 100%;
    height: 100vh;

    h2{
        margin-top:200px;
    }
`;