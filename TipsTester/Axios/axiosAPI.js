const axios = require('axios');

//properties
//fake API
const API = "https://reqres.in/api/"; //online
const myAPI = "http://localhost:3000/"; //offline

// function getById(id){
//     return document.getElementById(""+id);
// }
// const first_name = getById(fname);

// Elements
const getBtn = document.getElementById("get_btn");
const postBtn = document.getElementById("post_btn");
const delBtn = document.getElementById('delete_btn');


// object creation
class Blogger {
  constructor(username, firstName, lastName) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

//features
//1.GET DATA
const getData = () => {
  axios
    .get(myAPI + "users")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

//2.POST DATA
const postData = () => {
  var first_name = document.getElementById("fname").value;
  var last_Name = document.getElementById("lname").value;
  let blog = new Blogger("122", first_name, last_Name);

//   var newDate = new Date().toDateString();
//   let newTime = new Date().getTime();

var myDate = new Date().toDateString();
var newTime = new Date().toLocaleTimeString();

  axios
    .post(myAPI + "users", {
      userName: blog.username,
      firstName: blog.firstName,
      lastName: blog.lastName,
      date: myDate,
      time: newTime,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err, err.response);
    });
  console.log(first_name);
};

//3.Delete Data

// const deleteData=()=>{
//   var getId = prompt("Enter Data").toLowerCase();
//   console.log(getId);
//   axios.delete(myAPI+'users?userName='+getId).then((response)=>{
//     console.log(response);
//   });
// }

const deleteData=()=>{
  axios.delete('http://localhost:3000/users/1/')
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });  
}

//http://localhost:3000/users?userName=101

// click Events
getBtn.addEventListener("click", getData);

postBtn.addEventListener("click", postData);

delBtn.addEventListener('click',deleteData);

//tutorial link: https://www.youtube.com/watch?v=qM4G1Ai2ZpE&ab_channel=TraversyMedia



// onDeleteClick(id, e) {
//   let inventory;
//   axios.delete(api() + '/products/' + id).then((deleted) => {
//    axios.get(api() + this.state.lastGET).then((response) => {
//     inventory = response.data.data
//     this.setState({inventory})
//    })
//   })
//  }


// axios.delete(url, { data: { foo: "bar" } });


// axios({
//   method: 'DELETE',
//   url: 'http://localhost:3000/posts/1',
//   headers: { 'Content-Type': 'application/json' },
// });

// const axiosInstance = axios.create({
//   baseURL:'http://localhost:3000/'
// });

// axiosInstance.get(...).then(...);