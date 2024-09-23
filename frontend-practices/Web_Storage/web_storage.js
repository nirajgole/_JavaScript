const list = document.getElementById("ls_table");
const sList = document.getElementById("ss_table");
const setKey = document.getElementById("set_key");
const key = document.getElementById("key");
const val = document.getElementById("val");



setKey.onclick = () => {
  localStorage.setItem(key.value, val.value);
  sessionStorage.setItem(key.value, val.value);
  key.value="";
  val.value="";
};

showSessionData = () => {

  for (let i = 0; i < localStorage.length; i++) {

    const tableRow = document.createElement("tr");
    const listKey = document.createElement("td");
    const listVal = document.createElement("td");
    const listBtn = document.createElement("td");
    const removeBtn = document.createElement("button");
    listKey.textContent = sessionStorage.key(i);

    tableRow.appendChild(listKey);

    listVal.textContent = sessionStorage.getItem(sessionStorage.key(i));
    tableRow.appendChild(listVal);

    removeBtn.textContent = "remove";
    listBtn.appendChild(removeBtn);
    tableRow.appendChild(listBtn);

    sList.appendChild(tableRow);

    listBtn.onclick = () => {
      sList.removeChild(tableRow);
      sessionStorage.removeItem(sessionStorage.key(i));
    };
  }
};

showData = () => {

  for (let i = 0; i < localStorage.length; i++) {
    // let myKey = JSON.stringify(localStorage.key);
    // let myVal = localStorage.getItem(myKey);
    // document.write("Key: "+myKey.toString+" Value: "+myVal.toString);

    const tableRow = document.createElement("tr");
    const listKey = document.createElement("td");
    const listVal = document.createElement("td");
    const listBtn = document.createElement("td");
    const removeBtn = document.createElement("button");
    listKey.textContent = localStorage.key(i);

    tableRow.appendChild(listKey);

    listVal.textContent = localStorage.getItem(localStorage.key(i));
    tableRow.appendChild(listVal);

    removeBtn.textContent = "remove";
    listBtn.appendChild(removeBtn);
    tableRow.appendChild(listBtn);

    list.appendChild(tableRow);

    listBtn.onclick = () => {
      list.removeChild(tableRow);
      localStorage.removeItem(localStorage.key(i));
    };
  }
};

clearLS = ()=>{
  localStorage.clear();
  // for(let i=0;list.length;i++){
  //   list.removeChild(document.getElementById);
  // }
}
// setKey.onclick = ()=>{
//     const list = document.getElementById('ls_table');
//     const key = document.getElementById('key');
//     const val = document.getElementById('val');

//     let myKey = key.value;
//     key.value = '';
//     let myVal = val.value;
//     val.value=0;

//     const tableRow = document.createElement('tr');
//     const listKey = document.createElement('td');
//     const listVal = document.createElement('td');
//     const listBtn = document.createElement('td');
//     const removeBtn = document.createElement('button');

//     listKey.textContent=myKey;
//     tableRow.appendChild(listKey);
//     listVal.textContent=myVal;
//     tableRow.appendChild(listVal);

//     removeBtn.textContent='remove';
//     listBtn.appendChild(removeBtn);
//     tableRow.appendChild(listBtn);

//     list.appendChild(tableRow);
//     alert(tableRow);
//     listBtn.onclick=()=>{
//         list.removeChild(tableRow);
//     }
// }
