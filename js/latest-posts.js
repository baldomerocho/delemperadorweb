var posts = "";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    // document.getElementById("sitename").innerHTML = myObj.name;

    // for (e in myObj.ayuda.enlaces) {
    //     y += '<H4>'+ myObj.ayuda.enlaces[e].item + '</H4>'+ myObj.ayuda.enlaces[e].descripcion +'<p><a class="btn btn-primary btn-lg href="'+myObj.ayuda.enlaces[e].link+'">Abrir</a></p><hr>';
    // }
    // document.getElementById("enlaces").innerHTML = y;
  }
};
xmlhttp.open("GET", "https://delemp.com/wp-json/wp/v2/posts?_embedded", true);
xmlhttp.send();