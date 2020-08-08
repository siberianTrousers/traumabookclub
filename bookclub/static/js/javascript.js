// SIDE NAV
function openNav() {
  document.getElementById("homePageSideNav").style.width = "250px";
}
function closeNav() {
  document.getElementById("homePageSideNav").style.width = "0";
}

// MODAL
var modal = document.getElementById("donateModal");
var modalBtn = document.getElementById("donateBtn");
var span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
// window.onclick = function(event) {
//   if(event.target ==  modal) {
//     modal.style.display = "none";
//   }
// }
