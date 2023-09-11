fetch(" https://reqres.in/api/users?page=1&&per_page=15")
.then((data)=> data.json())  //this will convert data into object 
.then((objectData)=>{
    console.log(objectData)
    let tableData="";
    objectData.data.map((user) => {
        tableData += `<tr>
          <td><img src='${user.avatar}'/></td>
          <td>${user.first_name} </td>
          <td>${user.last_name}</td>
        </tr>`;
      });
      document.getElementById("table__body").innerHTML = tableData; 
}).catch((error)=> {
    console.log(error);
});