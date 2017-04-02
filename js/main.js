/*--------------------------------------------------------------------
 *JAVASCRIPT "main.js"
 *author:     Enrique Nieto Arranz
 *website:    http://www.nietoarranz.ga
-----------------------------------------------------------------------*/

// ======================== 
// ====== Navegacion ======
// ======================== 

$(document).ready(function(){
	$("#hide1").click(function(){
        $("#21").hide();
        $("#22").hide();
        $("#31").hide();
        $("#32").hide();
        $("#41").hide();
        $("#42").hide();
        $("#hide1").removeClass( "brackets" )
        $("#hide2").addClass( "brackets" )
        $("#hide4").addClass( "brackets" )
        $("#11").show();
        $("#12").show();
    });
    $("#hide2").click(function(){
        $("#11").hide();
        $("#12").hide();
        $("#31").hide();
        $("#32").hide();
        $("#41").hide();
        $("#42").hide();
        $("#hide2").removeClass( "brackets" )
        $("#hide1").addClass( "brackets" )
        $("#hide4").addClass( "brackets" )
        $("#21").show();
        $("#22").show();
    });
    $("#hide4").click(function(){
        $("#11").hide();
        $("#12").hide();
        $("#31").hide();
        $("#32").hide();
        $("#21").hide();
        $("#22").hide();
        $("#hide4").removeClass( "brackets" )
        $("#hide1").addClass( "brackets" )
        $("#hide2").addClass( "brackets" )
        $("#41").show();
        $("#42").show();
    });
});
// ========================


// ======================== 
// ======= Sobre Mi ======= 
// ======================== 

//function textoQueAbre() {
//    document.getElementById("SeccionTexto").innerHTML = "Texto de la seccion";
//    }
//
//	  SeccionTexto:
//     - texto1.1 = texto 1, seccion 1
//     - texto1-2 = link del texto 1 al texto 2
//

function texto1() {
    document.getElementById("texto1.1").innerHTML = "Soy un ";
    document.getElementById("texto1-3").innerHTML = "estudiante";
    document.getElementById("texto1.2").innerHTML = " del grado de ";
    document.getElementById("texto1-2").innerHTML = "ingeniería informática";
}

function texto2() {
    document.getElementById("texto2.1").innerHTML = "en la ";
    document.getElementById("texto2-5").innerHTML = "universidad";
    document.getElementById("texto2.2").innerHTML = " Politécnica de Madrid.";
}

function texto3() {
    document.getElementById("texto3.1").innerHTML = "A parte de esto me gusta aprender ";
    document.getElementById("texto3-4").innerHTML = "cosas";
    document.getElementById("texto3.2").innerHTML = " por mi cuenta, ";
}

function texto4() {
    document.getElementById("texto4.1").innerHTML = "como por ejemplo ";
    document.getElementById("texto4-7").innerHTML = "HTML, CSS";
    document.getElementById("texto4.2").innerHTML = " o Programación en ";
    document.getElementById("texto4-8").innerHTML = "Android.";
}

function texto5() {
	document.getElementById("salto").style.display = 'inline'
    document.getElementById("texto5.1").innerHTML = "Puedes encontrar todos mis proyectos en mi página de ";
    document.getElementById("texto5-G").innerHTML = "GitHub";
    document.getElementById("texto5.2").innerHTML = ", desde mis ";
    document.getElementById("texto5-6").innerHTML = "practicas";
    document.getElementById("texto5.3").innerHTML = " de la universidad,";
}

function texto6() {
    document.getElementById("texto6").innerHTML = "en Java, C o Ensamblador, ";
}

function texto7() {
	document.getElementById("salto").style.display = 'inline'
	document.getElementById("texto5.1").innerHTML = "Puedes encontrar todos mis proyectos en mi página de ";
    document.getElementById("texto5-G").innerHTML = "GitHub";
    document.getElementById("texto5.2").innerHTML = ", desde mis ";
    document.getElementById("texto5-6").innerHTML = "practicas";
    document.getElementById("texto5.3").innerHTML = " de la universidad,";
    document.getElementById("texto7").innerHTML = "hasta el código de esta página web, ";
}

function texto8() {
	document.getElementById("salto").style.display = 'inline'
	document.getElementById("texto5.1").innerHTML = "Puedes encontrar todos mis proyectos en mi página de ";
    document.getElementById("texto5-G").innerHTML = "GitHub";
    document.getElementById("texto5.2").innerHTML = ", desde mis ";
    document.getElementById("texto5-6").innerHTML = "practicas";
    document.getElementById("texto5.3").innerHTML = " de la universidad,";
    document.getElementById("texto8").innerHTML = " o algún pequeño proyecto en Android.";
}

function texto9() {
    document.getElementById("texto9.1").innerHTML = "Me llamo ";
    document.getElementById("texto9-10").innerHTML = "Enrique";
    document.getElementById("texto9.2").innerHTML = " Nieto Arranz";
}

function texto10() {
    document.getElementById("texto10").innerHTML = "Aunque me puedes llamar ";
    document.getElementById("texto10-11").innerHTML = "Quique.";
}

function texto11() {
    document.getElementById("texto11.1").innerHTML = "Soy un apasionado de la ";
    document.getElementById("texto11-12").innerHTML = "tecnología,";
    document.getElementById("texto11.2").innerHTML = " el ";
    document.getElementById("texto11-13").innerHTML = "deporte,";
    document.getElementById("texto11.3").innerHTML = " y el ";
    document.getElementById("texto11-14").innerHTML = "cine,";
}

function texto12() {
    document.getElementById("texto12").innerHTML = " Aunque mi parte favorita de esta es el diseño Front-end y la interacción con el usuario,";
}

function texto13() {
    document.getElementById("texto13").innerHTML = " sobre todo el futbol y el atletismo,";
}

function texto14() {
    document.getElementById("texto14").innerHTML = " mi película favorita es Forrest Gump.";
}

function texto15() {
    document.getElementById("texto15-16").innerHTML = "Puedes";
    document.getElementById("texto15").innerHTML = " mandarme un correo a ";
    document.getElementById("texto15-C").innerHTML = "enriquenieto97@gmail.com,";
}

function texto16() {
    document.getElementById("texto16").innerHTML = "O ponerte en contacto por alguna ";
    document.getElementById("texto16-17").innerHTML = "red social,";
}

function texto17() {
    document.getElementById("texto17.1").innerHTML = "Como ";
    document.getElementById("texto17-T").innerHTML = "Twitter";
    document.getElementById("texto17.2").innerHTML = " o ";
    document.getElementById("texto17-I").innerHTML = "Instagram.";
}
// ========================
