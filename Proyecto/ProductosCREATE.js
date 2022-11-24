const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  };
const url = "http://ligafalm.eu:28100/products",
      form = document.getElementById("formularioC");

form.addEventListener("submit",function(elem) {
    elem.preventDefault();

    const formData = new FormData(form);

    var newProducto = {
        name:formData.get("producto"),
        description:formData.get("descripcion"),
        code:formData.get("codigo")
    };
    axios.post(url,newProducto,{headers})
    .then(()=> {
        window.location.assign("ProductosGET.html");
      })
    .catch((error)=>{
      console.log(error);
    });

},false);