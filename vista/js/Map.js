/*var mapa = document.querySelector('#mapa');
if(mapa) {
 // coloca aquí tu código de los mapas
}  --- este codigo lo agregue en la seeccion 33, clase 258 de las preguntas, para evitar un futuro error en la seccion 38, clase 294 en donde no me funcionaba la pagina de registro, ademas de esto copie todos los scripts*/

var mapa = document.querySelector('#mapa');
if (mapa) {
    //Codigo mapa inicio
    var map = L.map('mapa').setView([-33.437057, -70.647860], 15); //Cambiamos el L.map('map') por L.map('mapa') ya que nuestra varoanñe es mapa. Tambien para darle la ubicación del mapa pegamos las coordenadas en este caso serian setView([-33.437057, -70.647860], 15); para monjitas 744. - el número , 15) hace referencia al zoom.

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([19.45943, -99.08557]).addTo(map) //Cambiamos coordenadas en L.marker([-33.437057, -70.647860]).addTo(map), en este caso -33.437057, -70.647860 = monjitas 744
        .bindPopup('GDLWEBCAMP 2019 <br> Boletos ya disponibles') //Frase encima del puntero del mapa
        .openPopup()
    /*.bindTooltip('Un Tooltip') //Aparece cuando te situas encima del puntero del mapa
    .openTooltip()*/

    //codigo mapa final
}