function salir() {
    var ask = window.confirm("¿Estas seguro que quieres salir?");
    if (ask) {
        window.location.href = "index.html";

    }
}
// Comprobar los formularios //

// Pagina 1
function validacion1() {
    var nombre1 = document.getElementById("nombre1").value;
    var IDArticulo1 = document.getElementById("IDArticulo1").value;
    var Des1 = document.getElementById("Des1").value;
    var pre1 = document.getElementById("pre1").value;

    if (nombre1.length < 3 || /^[a-z][a-z]*/.test(nombre1) == false) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo Nombre debe tener un valor de...');
        return false;
    }

    if (isNaN(IDArticulo1) || IDArticulo1.length < 3) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo ID Articulo debe tener un valor numerico y minimo 3 cifras');
        return false;
    }
    // Comprobar el DNI

    var N_DNI1 = document.getElementById("N_DNI1").value;
    if (N_DNI1 < 0 || N_DNI1 > 99999999) {
        alert('El campo Numero DNI no es correcto.');
        return false;
    } else {

        var L_DNI1 = document.getElementById("L_DNI1").value;

        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        var letraCalc = letras[N_DNI1 % 23];

        if (letraCalc != L_DNI1) {
            alert("La letra o el numero de DNI no son correctos");
            return false;
        }
    }



    // Fin Comprobar el DNI


    if (Des1.length < 5) {
        alert('[ERROR] El campo Descripcion debe tener como minimo 5 letras');
        return false;

    }
    if (isNaN(pre1) || pre1.length < 2) {
        alert('[ERROR] El campo Precio debe tener como minimo 2 numeros');
        return false;
    }

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}
//Fin Pagina 1

// Pagina 2
function validacion2() {
    var nombre2 = document.getElementById("nombre2").value;
    var apellidos2 = document.getElementById("apellidos2").value;
    var codigoPostal2 = document.getElementById("codigoPostal2").value;

    if (nombre2.length < 3 || /^[a-z][a-z]*/.test(nombre2) == false) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo Nombre debe tener un valor minimo de 3 letras.');
        return false;
    }

    if (apellidos2.length < 5 || /^[a-z][a-z]*/.test(apellidos2) == false) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo Apellidos debe tener un valor minimo de 5 letras.');
        return false;
    }


    // Comprobar el DNI

    var N_DNI2 = document.getElementById("N_DNI2").value;
    if (N_DNI2 < 0 || N_DNI2 > 99999999) {
        alert('El campo Numero DNI no es correcto.');
        return false;
    } else {

        var L_DNI2 = document.getElementById("L_DNI2").value;

        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        var letraCalc = letras[N_DNI2 % 23];

        if (letraCalc != L_DNI2) {
            alert("La letra o el numero de DNI no son correctos");
            return false;
        }
    }



    // Fin Comprobar el DNI
    if (codigoPostal2.length < 5 || isNaN(codigoPostal2)) {
        alert('El codigo postal debe tener 5 cifras y solo numeros.');
        return false;

    }

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}
//Fin Pagina 2

// Pagina 3
function validacion3() {

    var IDArticulo3 = document.getElementById("IDArticulo3").value;
    var IDProveedor3 = document.getElementById("IDProveedor3").value;
    var Des3 = document.getElementById("Des3").value;
    var pre3 = document.getElementById("pre3").value;
    var pro3 = document.getElementById('pro3').value;
    var nombre3 = document.getElementById('nombre3').value;



    if (isNaN(IDArticulo3) || IDArticulo3.length < 3) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo ID Articulo debe tener un valor numerico y minimo 3 cifras');
        return false;
    }
    if (isNaN(IDProveedor3) || IDProveedor3.length < 3) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo ID Proveedores debe tener un valor numerico y minimo 3 cifras');
        return false;
    }


    if (pro3.length < 5) {
        alert('[ERROR] El campo Producto debe tener como minimo 5 letras');
        return false;

    }

    if (nombre3.length < 3 || /^[a-z][a-z]*/.test(nombre3) == false) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo Nombre debe tener un valor minimo de 3 letras.');
        return false;
    }

    if (Des3.length < 5) {
        alert('[ERROR] El campo Descripcion debe tener como minimo 5 letras');
        return false;

    }
    if (isNaN(pre3) || pre3.length < 2) {
        alert('[ERROR] El campo Precio debe tener como minimo 2 numeros');
        return false;
    }

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}
//Fin Pagina 3

// Pagina 4
function validacion4() {
    var nombre4 = document.getElementById("nombre4").value;
    var ID4 = document.getElementById("ID4").value;
    var Des4 = document.getElementById("Des4").value;
    var codigoPostal4 = document.getElementById("codigoPostal4").value;

    if (nombre4.length < 3 || /^[a-z][a-z]*/.test(nombre4) == false) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo Nombre debe tener un valor de...');
        return false;
    }

    if (isNaN(ID4) || ID4.length < 3) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo ID debe tener un valor numerico y minimo 3 cifras');
        return false;
    }
        if (codigoPostal4.length < 5 || isNaN(codigoPostal4)) {
        alert('El codigo postal debe tener 5 cifras y solo numeros.');
        return false;

    }


    if (Des4.length < 5) {
        alert('[ERROR] El campo Descripcion debe tener como minimo 5 letras');
        return false;

    }
   

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}
//Fin Pagina 4

// Fin comprobar los Formularios.
