const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  };
const url = "http://ligafalm.eu:28100/products",
      form = document.getElementById("formularioC");

form.addEventListener("submit",function(elem) {
    elem.preventDefault();

    const formData = new FormData(form);

    var prod = formData.get("producto"),
        desc = formData.get("descripcion"),
        cod = formData.get("codigo");

    var newProducto = {
        "name":document.getElementById("producto").value,
        "description":document.getElementById("descripcion").value,
        "code":document.getElementById("codigo").value
    };
    axios.post(url,newProducto,{headers})
    .then(()=> {
        window.location.assign("EjeCreate.html")
      });

},false);