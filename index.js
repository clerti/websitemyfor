document.getElementById("login-btn").onclick = function(){
  const name = document.getElementById("name-input").value;
  let realname = "HAZEL MAE PICORRO BOJAWE";

  if(name == realname){
    location.href = `index2.html`;
  }else{
    window.alert("Incorrect")
  }
}