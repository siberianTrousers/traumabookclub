// SIDE NAV
function openNav() {
  document.getElementById("homePageSideNav").style.width = "250px";
}
function closeNav() {
  document.getElementById("homePageSideNav").style.width = "0";
}
function openSubNav() {
  document.getElementById("homePageSideNavSubMenu").style.width = "250px";
}
function closeSubNav() {
  document.getElementById("homePageSideNavSubMenu").style.width = "0";
}

// MODAL
var modal = document.getElementById("donateModal");
var modalBtn = document.getElementById("donateBtn");
var span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function() {
  modal.style.cssText = "display: flex;align-items: center;justify-content: center;"
}
span.onclick = function() {
  modal.style.display = "none";
}
