import style from 'styled-components'
import ImageCurriculo from '../../img/chicago.jpg'

export const CurriculoStyle = style.div`
      
    font-family: 'Jura', sans-serif;
    background-image:linear-gradient(rgba(253, 193, 255, 0.219),#372a68),url(${ImageCurriculo});
    background-size:cover;
    width: 100%;
    position:absolute;

    .container{
        background-color:#FFF;
        border-radius: 20px;
        margin-top:100px;
        margin-bottom:100px;
        padding-bottom:50px;
        box-shadow: 5px 5px 5px #000;

    }
    h2{
        color:#A020F0;
    }
    section{
        margin-top:30px;
    }
    .title{
        margin-top:50px;
        margin-bottom:50px;
        
        h1{
            font-size:32px;
        }

        span{
            color:#A020F0;
        }
    }
    .contact{
        i{
            color:#000;
            font-size:20px;
            
        }
        li a {
            color:#A020F0;
            
        }
    }

    .hobby{
       
        .hobbyItems i{
            
            margin-bottom:5px;
            display:flex;
            justify-content:center;
            
        } 
        .hobbyItems span{
                 display:flex;
                justify-content:center;
        } 
        i{
            color:#000;
            font-size:30px; 
        }
        i:hover{
            color:#A020F0;
            transition: 0.5s;
        }
        span{
            color:#A020F0;
        }
 
    }
    .languages{

    }

    .skills{
        display:flex;
        justify-content:center;
    }

    .fa-laptop-code{
        margin-top:40px;
        font-size:180px;
        color:#A020F0;
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

      
     
        
        
   
}


@media (min-width: 320px) and (max-width: 480px) {

            
     
        
}

`;