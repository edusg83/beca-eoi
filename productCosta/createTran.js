const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  };
const url = "http://ligafalm.eu:28100/transactions/",
      form = document.getElementById("formularioT");

form.addEventListener("submit",function(elem) {
    elem.preventDefault();

    const formData = new FormData(form);

    var prod = formData.get("producto"),
        desc = formData.get("descripcion"),
        cod = formData.get("codigo");

    var newTransaction = {
        "code":document.getElementById("codigo").value,
        "total":document.getElementById("total").value,
        "type":document.getElementById("type").value,
        "done":document.getElementById("done").value,
        "goal":document.getElementById("goal").value
    };
    axios.post(url,newTransaction,{headers})
    .then((respuesta)=> {
        console.log(respuesta);
        window.location.href = "indexTR.html"
      });

},false);

function mostrarCode() {
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const urlResponse = "http://ligafalm.eu:28100/transactions/"
}