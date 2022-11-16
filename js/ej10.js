function colorVerde(){
    obj.colorRojo();
    console.log("VERDE");
}

var obj ={
    color: "",
    colorRojo: function(){
        this.color="ROJO";
    }
};
colorVerde();
console.log(obj.color);