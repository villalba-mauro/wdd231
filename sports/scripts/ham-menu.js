

//MENU RESPONSIVE
const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//---------------------------
// function openNav() {
//     document.getElementById("mySidenav").style.width = "200px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }