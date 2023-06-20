let marca1= "BIOLAGE";
let marca2= "HAN";
let marca3= "KERASTASE";
let marca4= "MOROCCANOIL";
let marca5= "SCHWARZKOPF";
let marca6= "SEBASTIAN";

let comboBio= 4500;
let comboHan= 3890;
let comboKeras= 8400;
let comboMoroc= 7900;
let comboSchw= 10000;
let comboSebas= 8300;


let marcaUsuario;
function solicitarMarca (){
    marcaUsuario= prompt("Por favor indique marca por la cual desea saber precios: \nBIOLAGE\nHAN\nKERASTASE\nMOROCCANOIL\nSCHWARZKOPF\nSEBASTIAN").toUpperCase();

    // CONTROL SI EL USUARIO INGRESA UNA MARCA DE PRODUCTOS QUE NO COMERCIALIZA EL SALON
    while(!(marcaUsuario == marca1 || marcaUsuario == marca2 || marcaUsuario == marca3 || marcaUsuario == marca4 || marcaUsuario == marca5 || marcaUsuario == marca6)){
    alert("Por favor ingrese una marca existente en la web");
    console.log(marcaUsuario);
    solicitarMarca();
    };


    if(marcaUsuario == marca1){
        alert("El precio del combo Shampoo + Acondicionador + Mascarilla es de " + "$" + comboBio);
        return comboBio;
    }else if(marcaUsuario == marca2){
        alert("El precio del combo Shampoo + Acondicionador + Mascarilla es de " + "$" + comboHan);
        return comboHan;
    }else if(marcaUsuario == marca3){
        alert("El precio del combo Shampoo + Acondicionador + Mascarilla es de " + "$" + comboKeras);
        return comboKeras;
    }else if(marcaUsuario == marca4){
        alert("El precio del combo Shampoo + Acondicionador + Mascarilla es de " + "$" + comboMoroc);
        return comboMoroc;
    }else if(marcaUsuario == marca5){
        alert("El precio del combo Shampoo + Acondicionador + Mascarilla es de " + "$" + comboSchw);
        return comboSchw;
    }else if(marcaUsuario == marca6){
        alert("El precio del combo Shampoo + Acondicionador + Mascarilla es de " + "$" + comboSebas);
        return comboSebas;
    }

    
}

let comboElegido = solicitarMarca();



// APLICANDO DESCUENTO DEL ENVIO SEGUN EL VALOR DEL COMBO ELEGIDO
function aplicarDescuento(){
    if (comboElegido >= 8000){
        alert("El envío del producto es gratuito por superar los $8000 pesos!!")
    }else{
        alert("El costo del envío es de $800")
    }
    console.log(comboElegido)
    otraConsulta();
}

aplicarDescuento();


// CONSULTAR SI DESEA SABER SOBRE OTRO PRODUCTO O FINALIZAR LA CONSULTA:
function otraConsulta (){
    let pregunta = confirm("Desea consultar por algun otro combo?");
    if (pregunta){
        comboElegido = solicitarMarca();
        aplicarDescuento();
    }
}
