const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
// const smallTap = document.getElementById('.smallTap');
// const content = document.querySelector('section');
const divcon = document.querySelector('.content');

toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
    // smallTap.classList.toggle('expand');
    // content.classList.toggle('expand');
    divcon.classList.toggle('expand');
};

// const body = document.querySelector('body');
// const bgModeBtn = document.getElementById('bgModeBtn');
// const bgModeIcon = document.getElementById('bgModeIcon');
// const sectionHeader = document.querySelector('section h1');

// bgModeBtn.onclick = function(){
//     body.classList.toggle("dark-mode");
//     bgModeIcon.classList.toggle("fa fa-sun");
//     bgModeIcon.classList.toggle("far fa-moon");
//     sectionHeader.classList.toggle("dark-mode");
// }

function toggleMode() {
    var icon = document.getElementById("bgModeIcon");
    var body = document.body;
    
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      body.classList.add("light-mode");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
    body.classList.toggle("dark-mode");
  }
  
  document.getElementById("bgModeBtn").addEventListener("click", toggleMode);