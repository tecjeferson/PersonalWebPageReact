import styled from 'styled-components'

export const HeaderArea = styled.div`
   nav{
    background-color:#1C1C1C;
}
    img{
        border: 1px solid white;
    }
    i{
        color:#00FFFF;  
    }

   li a{
       color:#00FFFF; 
       margin-right:10px;
       font-weight:bold; 
       
       
   }
   li a:hover{
        color:white;
        margin-right:10px;  
        font-weight:bold;    
        transition: 0.8s;
    
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

  nav{
background-color: #1C1C1C; 
color: rgba(126, 119, 131, 0.9);
}
}

`