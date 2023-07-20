function tableSearch() {
  let input, filter, table, tr, td, textValue;
  
  //Initialising Variables
  input = document.getElementById("searchItem");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableData");
  tr = table.getElementsByTagName("tr");

  for(let i = 0; i < tr.length; i++){
    td = tr[i]
      if(td) {
        textValue = td.textContent || td.innerTeXT;
        if(textValue.toUpperCase().indexOf(filter) > -1){
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none"
        }
      }
  }
}
