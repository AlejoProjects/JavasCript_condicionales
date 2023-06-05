
let h = document.getElementById('respuesta9');
let allButtons = document.getElementsByClassName('');
let cliente = 100;
/**Esta clase se define para el funcionamiento del punto 9
 * La clase toppings define el stock y el tipo. 
 * stock es de tipo Int
 * Type es de tipo String
 * Se crean los metodos setters y getters para poderlos llamar y modificar a gusto.
 */
class toppings {
    constructor(stock,type,price){
        this.stock = stock;
        this.type = type;
        this.price = price;
    }
    get stocks(){
        return this.stock;
    }
    get types(){
        return this.type;
    }
    get prices(){
        return this.price;
    }
    set stocks(x){
        this.stock = x;
    }

}
/**
 * Esta clase se define para el funcionamiento del punto 10
 */
class programaEducativo {
    constructor(program,course,carrera,master,beca){
        this.course = course;
        this.carrera = carrera;
        this.master = master;
        this.beca = beca;
        this.program = program;
    }
    get courses(){
        return this.course;
    }
    get carreras(){
        return this.carrera;
    }
    get masters(){
        return this.master;
    }
    get becas(){
        return this.beca;
    }
    get programs(){
        return this.program;
    }
}


function punto1() {
    let pregunta = prompt('¿eres bellisimo?')
    let rta = document.getElementById = respuesta1;
    if (pregunta == 'si') {
        rta.innerHTML = "ciertamente guapisimo";
    }
    else if (pregunta == 'no') {
        rta.innerHTML = "No te creo lind@";
    }
    else {
        rta.innerHTML = "No entendí pero estas re bell@";
    }
}
function punto2() {
    pregunta2 = prompt('dame un numero');
    let rta2 = document.getElementById = respuesta2;
    if (pregunta2 % 2 == 0) {
        rta2.innerHTML = "Es divisible entre dos";
    }
    else {
        rta2.innerHTML = "No es divisible entre 2";
    }
}
function punto3() {
    pregunta3 = prompt('dame un numero');
    let rta3 = document.getElementById = respuesta3;
    if (pregunta3 % 2 == 0) {
        rta3.innerHTML = "los dioses te dicen que es PAR";
    }
    else {
        rta3.innerHTML = "Los Dioses te dicen que es IMPAR";
    }
}
function punto4() {
    /**En el punto 4 cambie un poquito las cosas. Cada vez que se le de click al boton se sumaran 100 clientes y si el numero de cliente es multiplo de 1000 se le dara un premio. Se suma de a 100 clientes.*/
    cliente += 100;
    let rta4 = document.getElementById = respuesta4;
    if (cliente % 1000 == 0) {
        rta4.innerHTML = "Felicitaciones ganaste un premio cliente numero "+cliente;
    }
    else {
        rta4.innerHTML = "Lo sentimos, sigue participando cliente numero "+cliente;
    }
}
function punto5() {
    let rta5 = document.getElementById = respuesta5;
    let numero1 = parseFloat(prompt('dame un numero'));
    let numero2 = parseFloat(prompt('dame otro numero'));
    if(numero1 == numero2){
        rta5.innerHTML = "son iguales tarado.";
    }
    else if(numero1 > numero2){
        rta5.innerHTML = numero1 +" es mayor que "+numero2;
    }
    else {
        {
            rta5.innerHTML = numero2 +" es mayor que "+numero1;
        }
    }
}
function punto6() {
    let numero1 = parseFloat(prompt('dame un numero'));
    let numero2 = parseFloat(prompt('dame otro numero'));
    let numero3 = parseFloat(prompt('dame otro numero'));
    let numero4 = parseFloat(prompt('dame otro numero'));
    let rta6 = document.getElementById = respuesta6;
    let mayor = 0;
    repetido = 0;
    numeros = [numero1,numero2,numero3,numero4];
/**Esta logica funciona para n numeros, siempre se seleccionara el mayor numero */
    for(let i = 0;i < numeros.length;i++){
        for(let j = 0; j <numeros.length;j++){
            if(i == j){
                continue;
            }
            else if(numeros[i] >= numeros[j]){
                if(numeros[i] > mayor){
                    mayor = numeros[i];
                }
            }
        }
    }
if(numero1 == numero2 && numero2 == numero3 && numero3 == numero4){
    rta6.innerHTML = "de los numeros "+numero1+" , "+numero2+" , "+numero3+" , "+numero4+" todos son iguales";
}
else {
    rta6.innerHTML = "de los numeros "+numero1+" , "+numero2+" , "+numero3+" , "+numero4+" el mayor es "+ mayor ;
}
}
function punto7(){
    let day = prompt('¿Que día es hoy?');

    mensaje = "Escribe bien el día, sin mayusculas, ni espacios ni vainas raras esto no tiene ia y no voy a poner low caps xd";
    let rta7 = document.getElementById = respuesta7;
    switch(day){
        case "lunes":
            mensaje = "Ten un principio de semana increible" ;
            break;
        case "martes":
            mensaje = "Martes de marte como el planeta";
            break;
        case "miercoles":
            mensaje = "Miercoles a mitad de semana";
            break;
        case "jueves":
            mensaje = "Prefiesta de la fiesta";
            break;
        case "viernes":
            mensaje = "La gran fiesta es hoy";
            break;
        case "sabado":
            mensaje = "Recuperate de la fiesta";
            break;
        case "domingo":
            mensaje = "La familia siempre estara contigo";
            break;
        default: 
            "dame un día no tus pensamientos xd";
            break;

    }
    rta7.innerHTML = mensaje;
}
function punto8(){
    let rta8 = document.getElementById = respuesta8;
    let calificacion =prompt('Califique del 1 al 10');
    let mensaje = "escribe un numero en el rango del 1 al 10 ";
    calificacion = parseInt(calificacion);
    console.log(calificacion);
    switch(true){
        case (calificacion == NaN):
            mensaje = "error porfavor ingrese un valor del 1 al 10"; 
            break;
        case (0 < calificacion && calificacion < 6):
            mensaje = "reprobado";
            break;
        case (6 <= calificacion && calificacion <= 8):
            mensaje = "regular";
            break;
        case (calificacion == 9):
            mensaje = "bien";
            break;
        case (calificacion== 10):
            mensaje = "exelente";
            break;
        

    }
    rta8.innerHTML = mensaje;

}
/**Estas funciones corresponden al funcionamiento del punto 9
 * Basicamente se definen 4 elementos de la clase toppings, luego se le resta 1 unidad al elemento seleccionado y al total de helados
 * este proceso se repite para cada boton. 
 * también cuentas con cierto dinero inicial que al irlo gastando se ira disminuyendo.
 */
/**Se definen los elementos de la clase toppings con sus valores iniciales de stock y tipo  */
let dinero = 200;
let recursosTexto = document.getElementById('recursos');
let oreo = new toppings(25,'oreo',10);
let kitKat = new toppings(25,'kitKat',15);
let brownie = new toppings(25,'brownie',20);
let nada = new toppings(100,'',5);
function evaluarOreo(){  
    let he = oreo;
    console.log(he.types);
    console.log(he.stocks);
    if(nada.stocks <= 0){
        h.innerHTML = 'no hay mas helado';
    }
    else if(he.stocks <= 0){ 
        h.innerHTML = 'no nos queda este topping';
        }
    else if(dinero >= he.prices ) {
            he.stocks = he.stocks - 1;
            nada.stocks -= 1;
            dinero -= he.prices;
            h.innerHTML ='toma tu helado con '+he.types+" quedan "+he.stocks+" unidades";
            recursosTexto.innerHTML = "Tienes "+dinero+"$";
            
        }
    else{
        h.innerHTML = "no te queda dinero";
    }
    
}
function evaluarKitkat(){  
    let he = kitKat;
    console.log(he.types);
    console.log(he.stocks);
    if(nada.stocks <= 0){
        h.innerHTML = 'no hay mas helado';
    }
    else if(he.stocks <= 0){ 
        h.innerHTML = 'no nos queda este topping';
            restar = false;
        }
    else if(dinero >= he.prices ) {
            he.stocks = he.stocks - 1;
            nada.stocks -= 1;
            dinero -= he.prices;
            h.innerHTML ='toma tu helado con '+he.types+" quedan "+he.stocks+" unidades";
            recursosTexto.innerHTML = "Tienes  "+dinero+"$";
            
        }
    else{
        h.innerHTML = "no te queda dinero";
    }
    
}
function evaluarBrownie(){  
    let he = brownie;
    console.log(he.types);
    console.log(he.stocks);
    if(nada.stocks <= 0){
        h.innerHTML = 'no hay mas helado';
    }
    else if(he.stocks <= 0){ 
        h.innerHTML = 'no nos queda este topping';
            restar = false;
        }
    else if(dinero >= he.prices ) {
            he.stocks = he.stocks - 1;
            nada.stocks -= 1;
            dinero -= he.prices;
            h.innerHTML ='toma tu helado con '+he.types+" quedan "+he.stocks+" unidades";
            recursosTexto.innerHTML = "Tienes "+dinero+"$";
            
        }
    else{
        h.innerHTML = "no te queda dinero";
    }
    }
function evaluarNada(){  
        let he = nada;
        console.log(he.types);
        console.log(he.stocks);
        if(nada.stocks <= 0){
            h.innerHTML = 'no hay mas helado';
        }
    
        else if(dinero >= he.prices ) {
                he.stocks = he.stocks - 1;
                dinero -= he.prices;
                h.innerHTML ='toma tu helado con  quedan '+he.stocks+" unidades";
                recursosTexto.innerHTML = "te quedan "+dinero+"$";
            } 
        else{
                h.innerHTML = "no te queda dinero";
            }
        
        }
/**Estas funciones corresponden al funcionamiento del punto 10 */
let precios = [4999,3999,2999];
let facebook = new programaEducativo('facebook',precios[0],precios[1],precios[2],0.2);
let google = new programaEducativo('google',precios[0],precios[1],precios[2],0.15);
let jesua  = new programaEducativo('jesua',precios[0],precios[1],precios[2],0.5);
let info = document.getElementById('info_curso');
let confBeca = document.getElementById('confirmacion_beca');
function textoBase(option){
    let preguntaBeca = prompt('¿Aplicable para beca? Porfavor responda solo si o no.');
    let preguntaOpcion = prompt('Escoja entre curso = c, carrera = r o master = m, para escoger alguno escriba solo la inicial que se indica para la pregunta')
    let mensual = option.courses;
    let programa = "";
    switch(preguntaOpcion){
        case 'c':
            mensual = option.courses;
            programa = "curso";
            break;
        case 'r':
            mensual = option.carreras;
            programa = "carrera";
            break;
        case 'm':
            mensual = option.masters;
            programa = "master";
            break;
    }

    if(preguntaBeca == "si"){
        mensual -= option.becas*mensual;
        confBeca.innerHTML = "Los precios con descuento se mostraran a continuación";
    }
    else {
        confBeca.innerHTML = "Los precios sin descuento se mostraran a continuación";
    }
    mensual = Math.round(mensual,1);
    let twoMonths = mensual * 2;
    let sixMonths = mensual * 6;
    let twelveMonths = mensual * 12;
    let infoRta = "El precio del programa "+programa+ " es de "+mensual+" mxn mensualmente, \ mientras que 2 meses cuesta "+twoMonths+"mxn \ y seis meses cuestan "+sixMonths+" mxn.\ y el precio anual es de "+twelveMonths+" mxn.";
    info.innerHTML = infoRta;
}
function chooseFacebook(){
    textoBase(facebook);
}
function chooseGoogle(){
    textoBase(google);
}
function chooseJesua(){
    textoBase(jesua);
}
function punto11(){
    let rta11 = document.getElementById('respuesta11');
    let vehiculo = prompt("escriba si es carro , moto o bus. Sin mayusculas ni espacios");
    let litros = prompt("de la cantidad de litros consumidos(claramente positivos)");
    let km = prompt('escriba la cantidad de kilometros recorridos');
    let value = 0;
    let total = 0;
    switch(vehiculo){
        case 'moto':
            value = 0.2;
            break;
        case 'carro':
            value = 0.1;
            break;
        case 'bus':
            value = 0.5;
            break;
    }
    total= km * value;
    if(litros >= 0 && litros <= 100){
        total += 5;
    }
    else{
        total += 10;
    }
    rta11.innerHTML = "el total a pagar es "+total+" mxn";
}
function main() {
    let button1 = document.getElementById('ej_1');
    let button2 = document.getElementById('ej_2');
    let button3 = document.getElementById('ej_3');
    let button4 = document.getElementById('ej_4');
    let button5 = document.getElementById('ej_5');
    let button6 = document.getElementById('ej_6');
    let button7 = document.getElementById('ej_7');
    let button8 = document.getElementById('ej_8');
    let button11 = document.getElementById('ej_11');

    button1.onclick = punto1;
    button2.onclick = punto2;
    button3.onclick = punto3;
    button4.onclick = punto4;
    button5.onclick = punto5;
    button6.onclick = punto6;
    button7.onclick = punto7;
    button8.onclick = punto8;
    button11.onclick = punto11;
}

main(); // your code 
