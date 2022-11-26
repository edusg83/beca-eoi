const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

const urlUsers = ("http://ligafalm.eu:28100/products");
const form = document.getElementById('formularioPost');
form.addEventListener('submit', function(element) {
    element.preventDefault();

    const dataRequest = {
        "name":document.getElementById("post-name").value,
        "description":document.getElementById("post-text").value,
        "code":document.getElementById("post-code").value
    };
    
    axios.post(urlUsers,dataRequest,{headers})
    .then(() => {
        window.location.assign("../products.html");
    })
    .catch((error) => {
        console.log(error);
    });
}, false);