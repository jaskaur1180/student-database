import students from './data.js'
// console.log(students);

window.onload = () => {
  loadTable(students);
}

function loadTable(students) {
  const tableBody = document.getElementById("tableData");
  let dataHTML = '';

  for (let data of students) {
    dataHTML +=  `<tr> 
                    <td>${data.id}</td> 
                    <td>${data.first_name}</td>
                    <td>${data.last_name}</td>
                    <td>${data.title}</td> 
                    <td>${data.email}</td> 
                  </tr>`;
      }

  tableBody.innerHTML = dataHTML;
}
