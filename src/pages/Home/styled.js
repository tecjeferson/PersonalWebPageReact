import style from 'styled-components'
import ImageHeader from '../../img/891.jpg'

export const HomeStyle = style.div `
    font-family: 'Jura', sans-serif;
   
    background:linear-gradient(rgba(0,0,0, 0.75),#ADD8E6),url(${ImageHeader});
    background-repeat: no-repeat;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

   
       
    height: 100vh;

   

    .nameTitle{
        color:#FFF;
               
        h1{
            color:#000;
            text-align:center;
            font-size:82px;
            margin-top:20px;
            text-shadow:0.5px 0.5px #00FFFF;
        }
        hr{
            background-color:#00FFFF;
            width: 600px;
            height:2px;
            margin-top:1px;
            margin-bottom:1px;
        }
        h2{
            color:#000;
            text-align:center;
            font-size:35px;
            margin-bottom:20px;
            text-shadow:0.1px 0.1px #00FFFF;
        }
    }

    .App {
        text-align: center;
      
    }
    
    .App-logo {
        margin-top:100px;
        height: 25vmin;
        pointer-events: none;
       
        
    }
    .img-central {
        margin-top:100px;
        height: 25vmin;
        pointer-events: none;
        
   
   box-shadow: 0px 0px 170px 170px rgba(255,255,255, 0.47);

        
       
        
    }

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}



@keyframes App-logo-spin {
  from {
    transform: rotate(10deg);
  }
  to {
    transform: rotate(560deg);
  }
}




.btnContact {
    box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color:#ededed;
	border-radius:3px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:5px 15px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
	box-shadow:1px 1px 1px #00FFFF;
}
.btnContact:hover {
		background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}
.btnContact:active {
	position:relative;
	top:1px;
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








    

`