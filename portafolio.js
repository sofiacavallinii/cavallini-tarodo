// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Diseño Grafico",
    about: "Catalogo realizado a empresa DKS",
}, {
    figure: "media/foto-02.jpg",
    title: "Diseño 3D",
    about: "Examén del curso Diseño por Computación",
}, {
    figure: "media/foto-03.jpg",
    title: "Diseño de experiencia",
    about: "Examén Taller 5, aplicación turistica personalizada",
}, {
    figure: "media/foto-04.jpg",
    title: "Diseño Industrial",
    about: "Lampara realizada en Impresora Laser y 3D",
}, {
    figure: "media/foto-05.jpg",
    title: "Diseño Textil",
    about: "Examén Taller 4 , sistema de memoria muscular que conecta dos personas mediante rodilleras y coderas",
}, {
    figure: "media/foto-06.jpg",
    title: "Diseño Reciclado- Lampara",
    about: "Examén Taller 3D, Experimentación de poliestireno expandido para la creación de otro objeto",
}, {
    figure: "media/foto-07.jpg",
    title: "Diseño de productos",
    about: "Examén Taller 4 para la empresa Maggi",
}, {
      figure: "media/foto-08.jpg",
      title: "Diseño de productos 2",
      about: "Taller Branding, nueva marca de café ",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
