 const menu = document.getElementById("menu");
 const hamburger = document.querySelector(".hamburger");
 const close = document.querySelector(".close");

const showMenu = () => {  
    if (menu.style.right !== "0px") {
      menu.setAttribute("style", "right: 0;");
      hamburger.classList.add("hide");
    }
     else {
      menu.setAttribute("style", "right: -250px;");
      hamburger.classList.remove("hide");
    }
  };