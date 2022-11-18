const request = new Request('https://j4jjw.mocklab.io/users');

const url = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response => response.json())
    .then(data => {
        console.log(data.arrayUsuarios);
    });