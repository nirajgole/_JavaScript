const twit = {
    "name":"Neeraj",
    "followers":123456
}

var str = JSON.stringify(twit,null,2);
document.getElementById('printHere').innerHTML=""+twit.name+"</br>"+twit.followers;

console.log(str);