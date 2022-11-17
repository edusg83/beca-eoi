(function() {
    var botones = document.getElementsByTagName("button");

    for (var i = 0, len = botones.length; i < len; i=i+1){
        botones[i].onclick = function() {
            var className = this.innerHTML.toLowerCase();
            document.body.className = className;
        };
    }
}());