import style from 'styled-components'
import ImageAbout from '../../img/homem-olhando.png'

export const AboutStyle = style.div`
    font-family: 'Jura', sans-serif;
    background-image:linear-gradient(rgba(253, 193, 255, 0.219),#372a68),url(${ImageAbout});
    background-size:cover;
    position:fixed;
    width: 100%;
    height: 100vh;

    .Box{
        margin-top:200px;
        padding:30px;
        background-color:#1C1C1C;
        border-radius:10px;
        box-shadow: 2px 2px 2px #00FFFF;
    }

    p{
        font-size:20px;
        margin-top:20px;
    }








    @media (min-width: 1281px) {

}


@media (min-width: 1025px) and (max-width: 1280px) {
  

}


@media (min-width: 768px) and (max-width: 1024px) {

  
}


@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

  
}


@media (min-width: 481px) and (max-width: 767px) {
.nameTitle{
              
        h1{
           
            font-size:32px;
            margin-top:20px;
        }
        hr{
            width: 220px;
        }
        h2{
            font-size:25px;
        }
}

  
}


@media (min-width: 320px) and (max-width: 480px) {
    
    h1{
        font-size:20px;
    }
   .Box{
        margin-top:0px;
        padding:8px;
        background-image:linear-gradient(rgba(253, 193, 255, 0.1),#372a68);
        border: none;
        box-shadow: none;
    }
    .Box:hover{
        margin-top:0px;
        background-image:linear-gradient(rgba(253, 193, 255, 0.293),#372a68);
        border: none;
        box-shadow: none;
        
    }
    p{
        font-size:17px;
        margin-top:20px;
        padding:8px;
    }
    
}
`;