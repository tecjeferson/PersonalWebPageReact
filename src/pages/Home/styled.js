import style from 'styled-components'
import ImageHeader from '../../img/891.jpg'
import ImageML from '../../img/machineLearning4.png'

export const HomeStyle = style.div`

    background:url(${ImageML});
    

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
        margin-top:30px;

        h1{
            text-align:center;
            font-size:32px;
        }
        hr{
            background-color:#FFF;
            width: 250px;
            height:1px;
            margin-top:1px;
            margin-bottom:1px;
        }
        h2{
            text-align:center;
            
        }
    }

button.css3button {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: #570057;
	padding: 8px 20px;
	background: -webkit-gradient(
		linear, left top, left bottom,
		from(#ffffff),
		to(#ffffff));
	background: linear-gradient(
		top,
		#ffffff 0%,
		#ffffff);
	border-radius: 4px;
	border: 1px solid #000000;
	box-shadow:
		0px 1px 3px rgba(10,10,10,0.5),
		inset 0px 0px 5px rgba(74,5,61,0.6);
	text-shadow:
		0px -1px 3px rgba(255,255,255,0.8),
		0px 1px 0px rgba(255,255,255,0.3);
        margin-top:5px;
}












    

`