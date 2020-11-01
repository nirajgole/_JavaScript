//properties
//fake API
const API = "https://reqres.in/api/"; //online
const myAPI = " http://localhost:3000/"; //offline

// function getById(id){
//     return document.getElementById(""+id);
// }
// const first_name = getById(fname);

// Elements
const getBtn = document.getElementById("get_btn");
const postBtn = document.getElementById("post_btn");

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

// click Events
getBtn.addEventListener("click", getData);

postBtn.addEventListener("click", postData);

//tutorial link: https://www.youtube.com/watch?v=qM4G1Ai2ZpE&ab_channel=TraversyMedia
