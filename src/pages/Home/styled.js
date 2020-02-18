import style from 'styled-components'
import ImageHeader from '../../img/891.jpg'

export const HomeStyle = style.div`
    font-family: 'Jura', sans-serif;
    background:linear-gradient(rgba(253, 193, 255, 0.219),#372a68),url(${ImageHeader});
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

    .img-profile{
        margin-top:30px;
        border:1px solid white;
    }

    .nameTitle{
        color:#FFF;
               
        h1{
            text-align:center;
            font-size:72px;
            margin-top:20px;
        }
        hr{
            background-color:#FFF;
            width: 300px;
            height:1px;
            margin-top:1px;
            margin-bottom:1px;
        }
        h2{
            text-align:center;
            font-size:40px;
            margin-bottom:20px;
        }
    }

.whatsIcon{
    margin-left:0;
    padding-left:0;
    margin-right:10px;
}


.myButton {
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	.myButton {
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	background:linear-gradient(to bottom, #89c403 5%, #d4ff6e 100%);
	background-color:#89c403;
	border-radius:6px;
	border:1px solid #74b807;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528009;
}
.myButton:hover {
	background:linear-gradient(to bottom, #d4ff6e 5%, #89c403 100%);
	background-color:#d4ff6e;
}
.myButton:active {
	position:relative;
	top:1px;
}

	background-color:#89c403;
	border-radius:50px;
	border:1px solid #74b807;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding-right:20px;
   
	text-decoration:none;
	text-shadow:0px 1px 0px #528009;
}
.myButton:hover {
	background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
	background-color:#77a809;
}
.myButton:active {
	position:relative;
	top:1px;
}
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