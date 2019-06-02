var url="https://randomuser.me/api/"
$("#btn").click(()=>{
  fetch(url)
  .then(handleerrors)
  .then(parseJSON)
  .then(function(data)
{
  var fullname=data.name.first+" " +data.name.last;
  $("#fullname").text(fullname)
  $("#avatar").attr("src",data.picture.medium)
$("#username").text(data.login.username)
$("#city").text(data.location.city)
$("#email").text(data.email)
})
.catch(function(err){
  console.log(err);
})
})

function handleerrors(res){
  if(!res.ok)
  throw Error(res.status)
  return res;
}

function parseJSON(res){

return res.json().then(function(data){
  return data.results[0];
})

}
