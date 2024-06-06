.titulo1{

background: linear-gradient(to left,#ebaa1f, #8a4910, #ebaa1f);
}

.Menuicono{
text-shadow:  
-1px -1px 1px #000000, 
1px -1px 1px #000000, 
-1px 1px 1px #000000, 
1px 1px 1px #000000;
}
.Encabezado{
margin: auto;
font-size: 25px;
font-weight: bold;
  text-shadow:  
-1px -1px 1px #000000, 
1px -1px 1px #000000, 
-1px 1px 1px #000000, 
1px 1px 1px #000000;
}

table {
border-radius: 35px;
padding-top: 0px;
width: 100%;

}

.mat-mdc-form-field {
padding-left: px;
font-size: 15px;
width: 100%;
opacity: 70%;
}

td,th {
width: 25%;
}

/*Barra de datos*/
.toolbar {
display: flex;
align-items: center;
margin-bottom: 15px;
margin-top: 5px;
}

.TabladeDatos{

width: 96%;
margin: auto;
margin-bottom: 35px;
}


.table-filter {
width: 50px; /* Ajusta según sea necesario */
border-radius: 25px;
}

mat-icon {
cursor: pointer;
color: #ffffff; /* Color rojo para el icono de eliminar, ajusta según tu paleta de colores */
}

mat-icon:hover {
color: #ffffff; /* Color rojo más oscuro al pasar el cursor */
}

/*Boton de insertar*/
.orange-button {
transition: all.5s ease-in-out;
border-radius: 55px;
margin-left: 2%;
background-color:#df9412;

}

.orange-button:hover{
transition: all.5s ease-in-out;
text-shadow:  -1px -1px 1px #000000, 
1px -1px 1px #000000, 
-1px 1px 1px #000000, 
1px 1px 1px #000000;
background-color:#c48210;
box-shadow: 0px 0px 15px 15px #d69419;
-webkit-box-shadow: 0px 0px 10px 10px #f1cd6a96;
}

.mat-row{
transition: all.3s ease-in-out;

}

.mat-row:hover {
transition: all.3s ease-in-out;
background-color: #e2e2e2;
color: #000000;
}


div.toolbar button.orange-button {
color: white;
}

.sidenav {
overflow-y: auto; /* Agrega una barra de desplazamiento vertical */
height: 100%; /* Ajusta la altura del menú para que ocupe toda la pantalla */
}

.menu-container {
padding: 0px;
/* Ajusta el espacio interno del contenedor del menú */
}

.table-container {
margin-top: 16px; /* Ajusta el espacio superior del contenedor de la tabla */
}

.fondo-negro {
background-color: black;
color: white; /* Puedes ajustar el color del texto según tus preferencias */
}

body {
margin: 50;
font-family: Arial, sans-serif;
}

.contenedor {
background-color: #e88400;
padding: 20px;
}

.barra {
list-style-type: none;
text-align: center;
margin: 0px;
margin-top: 5px;
padding: 25px;
}

.barra a {
text-decoration: none;
color: black;
display: block;
padding: 10px;
margin-bottom: 13px;
background-color: rgb(247, 212, 161);
border-radius: 55px;
transition: all.5s ease-in-out;
font-weight: bold;

}

.letrasBarra{

color: #ffffff;
}


/* Cambia el color al pasar el ratón sobre el enlace */
.barra a:hover {
background-color: #c5863d; 
color: #ffffff;
transition: all.5s ease-in-out;
box-shadow: 0px 0px 15px 15px #d69419;
-webkit-box-shadow: 0px 0px 15px 15px #fdeaac96;
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-webkit-transform:scale(1.3);transform:scale(1.3);
}

.barra:hover{

color: #ffffff;
}

.editar{
color: #293ce9;
transition: all.5s ease-in-out;
}

.editar:hover{
color: #949ef3;
transition: all.5s ease-in-out;
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-webkit-transform:scale(1.3);transform:scale(1.3);
}

.borrar{
color: #ff2b2b;
transition: all.5s ease-in-out;
}

.borrar:hover{
color: #fd6767;
transition: all.5s ease-in-out;
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-webkit-transform:scale(1.3);transform:scale(1.3);
}
/* Animacion toolbar */

.animated-background {
background: linear-gradient(to left, #cc9463, #ffe9cd);
width: 100%;
height: 100vh;
position: relative;

}

.animation-area {
background: linear-gradient(to left, #e99a4c, #c45f25);
width: 100%;
height: 100vh;
}

.box-area {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 140%; /* SAlidad de cuadros */
overflow: hidden;
}

.box-area li {
position: absolute;
display: block;
list-style: none;
width: 25px;
height: 25px;
background: rgba(211, 133, 31, 0.835);
animation: animate 10s linear infinite;
bottom: -150px;
}

/* Resto de las animaciones ... */

.box-area li:nth-child(1) {
left: 86%;
width: 80px;
height: 80px;
animation-delay: 0s;
}
.box-area li:nth-child(2) {
left: 12%;
width: 30px;
height: 30px;
animation-delay: 0s;
animation-delay: 1.5s;
animation-duration: 10s;
}
.box-area li:nth-child(3) {
left: 70%;
width: 100px;
height: 100px;
animation-delay: 5.5s;
}
.box-area li:nth-child(4) {
left: 42%;
width: 150px;
height: 150px;
animation-delay: 0s;
animation-duration: 15s;
}
.box-area li:nth-child(5) {
left: 65%;
width: 40px;
height: 40px;
animation-delay: 0s;
}
.box-area li:nth-child(6) {
left: 15%;
width: 110px;
height: 110px;
animation-delay: 3.5s;
}
@keyframes animate {
0% {
  transform: translateY(0) rotate(0deg);
  opacity: 1;
}
100% {
  transform: translateY(-800px) rotate(360deg);
  opacity: 0;
}
}
