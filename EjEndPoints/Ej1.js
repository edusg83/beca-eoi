const request = "https://j4jjw.mocklab.io/users";
const request2 = "https://j4jjw.mocklab.io/usersDataList";

fetch(request)
  .then(response => response.json())
  .then(data => {console.log(data)});

fetch(request2)
  .then(response => response.json())
  .then(data => {console.log(data)});