const fetch = require("node-fetch");

for (let i = 0; i < 10; i++) {
  //Enter Fetch request 
  //Go to browser Fetch > select Node Fetch
  
    .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}


