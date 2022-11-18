const request = new Request('https://j4jjw.mocklab.io/users');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response => response.json())
    .then(data => {});

console.log(request);    