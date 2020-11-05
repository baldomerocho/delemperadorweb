var y = "";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myMenu = JSON.parse(this.responseText);
    for (e in myMenu.menu) {
        y += '<a href="'+myMenu.menu[e].url+'" target="'+myMenu.menu[e].target+'">'+myMenu.menu[e].value;
    }
    document.getElementById("menu-general").innerHTML = y;
  }
};
xmlhttp.open("GET", "../json/menu-general.json", true);
xmlhttp.send();