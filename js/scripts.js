function changeButton(){
  var objButton = document.getElementById("btnDonate");
  objButton.innerText = "Donated";
  objButton.className = "redButton";
  objButton.disabled = "disabled";
  alert("Thank you for your donation!");
}