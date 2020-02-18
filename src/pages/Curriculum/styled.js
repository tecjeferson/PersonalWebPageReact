import style from 'styled-components'
import ImageCurriculo from '../../img/chicago.jpg'

export const CurriculoStyle = style.div`
        
    font-family: 'Jura', sans-serif;
    background-image:linear-gradient(rgba(253, 193, 255, 0.219),#372a68),url(${ImageCurriculo});
    background-size:cover;
    width: 100%;

.Imagetop{
    margin-top:100px;
}

.initBox{
    margin-top:50px;
}


.boxStyle{
    
    background-color:white;
    border: 1px solid white;
    border-radius:10px;
    color:#000;
    margin-bottom:5px;
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
    
.Imagetop{
    margin-top:100px;
}

.initBox{
    margin-top:50px;
}


.boxStyle{
    
    background-color:white;
    border: 1px solid white;
    border-radius:10px;
    color:#000;
    margin-bottom:5px;
    margin-left:3px;
    margin-right:3px;
}
}
`;