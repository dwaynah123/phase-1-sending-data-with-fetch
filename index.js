// Add your code here

const configurationObject = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    }),
  };

function submitData(name, email){
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((object) => {
        console.log((object));
        document.querySelector("body").append(object.id);
    })
    .catch((message) => {
        console.log(message.message);
        document.querySelector("body").append(message.message);
      });
}

