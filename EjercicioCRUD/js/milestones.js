const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

const urlUsers = ("http://ligafalm.eu:28100/milestones");
const form = document.getElementById('formularioPost');
form.addEventListener('submit', function (element) {
    element.preventDefault();

    const dataRequest = {
        "name": document.getElementById("post-name").value,
        "start": new Date(document.getElementById("post-start").value),
        "end": new Date(document.getElementById("post-end").value)
    };

    axios.post(urlUsers, dataRequest, { headers })
        .then(() => {
            window.location.assign("../milestones.html");
        })
        .catch((error) => {
            console.log(error);
        });
}, false);

