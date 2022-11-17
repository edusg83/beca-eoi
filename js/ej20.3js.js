(function() {
var botones = document.getElementsByName("button");

for (let i = 0, len=botones.length; i<len; i++) {
  botones[i].onclick = function () {
    var className = this.innerHTML.toLowerCase();
    document.body.className = className;
  };
}
}());