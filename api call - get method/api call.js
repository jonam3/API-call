let value = "";
fetch('https://reqres.in/api/users?page=1')
   .then((res) => {
      return res.json();
   })
   .then((data) => {
      console.log(data.data);
      //    return data ;

      for (i = 0; i < data.data.length; i++) {
         console.log(data.data[i]);
         value += `<tr>
   <td>${data.data[i].id}</td>
   <td>${data.data[i].email}</td>
   <td>${data.data[i].first_name}</td>
   <td>${data.data[i].last_name}</td>
   <td><img src=${data.data[i].avatar}></td>
   </tr>`;
         document.getElementById("value").innerHTML = value;
      }
   })

fetch('https://reqres.in/api/users?page=2')
   .then((res) => {
      return res.json();
   })
   .then((data) => {
      console.log(data.data);
      //    return data ;

      for (i = 0; i < data.data.length; i++) {
         console.log(data.data[i]);
         value += `<tr>
   <td>${data.data[i].id}</td>
   <td>${data.data[i].email}</td>
   <td>${data.data[i].first_name}</td>
   <td>${data.data[i].last_name}</td>
   <td><img src=${data.data[i].avatar}></td>
   </tr>`;
         document.getElementById("value").innerHTML = value;
      }
   })
