/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/
 *   mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
var _URL = window.URL || window.webkitURL;
$("#file").change(function(e) {
var file, img;
if ((file = this.files[0])) {
img = new Image();
img.onload = function() {
alert(this.width + " " + this.height);
};
img.onerror = function() {
alert("not a valid file: " + file.type);
};
img.src = _URL.createObjectURL(file);
}
})