import style from 'styled-components'
import ImageAbout from '../../img/homem-olhando.png'

export const AboutStyle = style.div`
 background-image:url(${ImageAbout});
    background-size:cover;
    position:fixed;
    width: 100%;
    height: 100vh;
`;