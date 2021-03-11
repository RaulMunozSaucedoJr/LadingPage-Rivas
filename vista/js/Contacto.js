function Contacto() {

    event.preventDefault();
    /*EXPRESION REGULAR CORREO*/
    expresioncorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;
    /*------>*/

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;
    const asunto = document.getElementById("asunto").value;
    if (nombre.length == "") {
        event.preventDefault();
        swal({
            title: "¡NOMBRE VACIO!.",
            text: "¡Favor de verificar de que no se encuentre vacio!.",
            icon: "error",
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (correo.length == "") {
        event.preventDefault();
        swal({
            title: "¡CORREO VACIO!.",
            text: "¡Favor de verificar de que no se encuentre vacio!.",
            icon: "error",
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (asunto.length == "") {
        event.preventDefault();
        swal({
            title: "¡ASUNTO VACIO!.",
            text: "¡Favor de verificar de que no se encuentre vacio!.",
            icon: "error",
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (mensaje.length == "") {
        event.preventDefault();
        swal({
            title: "¡MENSAJE VACIO!.",
            text: "¡Favor de verificar de que no se encuentre vacio!.",
            icon: "error",
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (nombre.length >= 30) {
        event.preventDefault();
        swal({
            title: "¡Atento!.",
            text: 'El campo NOMBRE NO debe de exceder los 30 carácteres.',
            icon: "warning",
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (correo.length >= 40) {
        event.preventDefault();
        swal({
            title: "¡Atento!.",
            text: 'El campo CORREO NO debe de exceder los 30 carácteres.',
            icon: "warning",
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (asunto.length >= 30) {
        event.preventDefault();
        swal({
            title: "¡Atento!.",
            text: 'El campo ASUNTO NO debe de exceder los 30 carácteres.',
            icon: "warning",
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (mensaje.length >= 300) {
        event.preventDefault();
        swal({
            title: "¡Atento!.",
            text: 'El campo MENSAJE NO debe de exceder los 300 carácteres.',
            timer: 2000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else if (!expresioncorreo.test(correo)) {
        event.preventDefault();
        swal({
            title: "¡Correo invalido!.",
            text: "¡Verifique que su correo esta escrito correctamente!.",
            icon: "warning",
            timer: 6000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    } else {
        swal({
            title: "¡Datos enviados correctamente!.",
            text: "¡Nos comunicaremos con usted a la brevedad!.",
            icon: "success",
            timer: 6000,
            closeOnClickOutside: true,
            button: false,
            closeOnEsc: true,
        });
    }
}