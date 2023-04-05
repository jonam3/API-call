const submit = document.getElementById('submit');
submit.addEventListener('click', fetchdata);
function fetchdata() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      email: email,            // eve.holt@reqres.in
      password: password,      //cityslicka

    })
  })
    .then(response => {
      console.log(response);
      return response.json();

    })
    .then(data => {
      console.log(data.token);
    })


}






